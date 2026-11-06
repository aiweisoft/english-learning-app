<template>
	<view class="container">
		<view class="words-header">
			<text class="words-category">{{ categoryName }}</text>
			<text class="words-count">已测 {{ testedGroups.length }} / {{ totalGroups }} 组</text>
		</view>

		<scroll-view scroll-x class="group-tabs">
			<view class="group-tabs-inner">
				<view
					v-for="(g, idx) in totalGroups"
					:key="idx"
					:class="['group-tab', groupStatus(idx)]"
					@click="switchGroup(idx)"
				>
					<text class="group-num">{{ idx + 1 }}</text>
					<text v-if="isTested(idx)" class="group-check">✓</text>
					<text v-if="isLocked(idx)" class="group-lock">🔒</text>
				</view>
			</view>
		</scroll-view>

		<view class="group-label">第 {{ currentGroup + 1 }} 组</view>

		<view
			v-for="word in groupWords"
			:key="word.id"
			:class="['word-card', isLearned(word.id) ? 'learned' : '']"
			@click="toggleLearned(word.id)"
		>
			<view class="word-main">
				<view class="word-en-row">
					<text class="word-en">{{ word.en }}</text>
					<text class="speaker-icon" @click.stop="speakWord(word.en)">🔊</text>
					<text v-if="isLearned(word.id)" class="learned-badge">✓</text>
				</view>
				<text class="word-phonetic">{{ word.phonetic }}</text>
			</view>
			<view class="word-divider"></view>
			<view class="word-detail">
				<text class="word-zh">{{ word.zh }}</text>
				<text class="word-example">{{ word.example }}</text>
				<text class="word-example-zh">{{ word.exampleZh }}</text>
			</view>
		</view>

		<view v-if="groupWords.length === 0" class="empty">暂无单词</view>

		<view class="bottom-bar">
			<view :class="['play-btn', playing ? 'playing' : '']" @click="togglePlay">
				<view v-if="!playing" class="icon-play"></view>
				<view v-else class="icon-stop"></view>
			</view>
			<view v-if="allDone" class="all-done-msg">全部完成</view>
			<template v-else>
				<view :class="['bar-btn', 'prev-btn', currentGroup === 0 ? 'disabled' : '']" @click="prevGroup">
					<text>上一组</text>
				</view>
				<view class="bar-btn test-btn" @click="startGroupQuiz">
					<text>测验</text>
				</view>
				<view class="bar-btn spell-btn" @click="startGroupSpell">
					<text>拼写</text>
				</view>
				<view :class="['bar-btn', 'next-btn', !canNext() ? 'disabled' : '']" @click="nextGroup">
					<text>下一组</text>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
import { getWordsByGroup, getGroupCount } from '@/data/word-service.js'

const GROUP_SIZE = 10

export default {
	data() {
		return {
			categoryId: 0,
			categoryName: '',
			totalGroups: 0,
			currentGroup: 0,
			testedGroups: [],
			groupWords: [],
			learnedIds: [],
			playing: false,
			playIndex: 0,
			playToken: 0
		}
	},
	computed: {
		allDone() {
			return this.totalGroups > 0 && this.testedGroups.length >= this.totalGroups
		}
	},
	onLoad(options) {
		this.categoryId = parseInt(options.categoryId)
		this.categoryName = decodeURIComponent(options.categoryName)
		this.initData()
	},
	onShow() {
		if (this.categoryId) {
			const learned = uni.getStorageSync('learnedWordIds')
			this.learnedIds = learned ? JSON.parse(learned) : []
			this.loadProgress()
			this.loadGroupWords()
		}
	},
	onHide() {
		this.stopPlay()
	},
	onUnload() {
		this.stopPlay()
	},
	methods: {
		initData() {
			this.totalGroups = getGroupCount(this.categoryId, GROUP_SIZE)
			const learned = uni.getStorageSync('learnedWordIds')
			this.learnedIds = learned ? JSON.parse(learned) : []
			this.loadProgress()
			this.loadGroupWords()
		},
		loadProgress() {
			const raw = uni.getStorageSync('groupProgress')
			const progress = raw ? JSON.parse(raw) : {}
			const catProgress = progress[this.categoryId]
			if (catProgress) {
				this.currentGroup = Math.min(catProgress.current || 0, this.totalGroups - 1)
				this.testedGroups = catProgress.tested || []
			} else {
				this.currentGroup = 0
				this.testedGroups = []
			}
		},
		saveProgress() {
			const raw = uni.getStorageSync('groupProgress')
			const progress = raw ? JSON.parse(raw) : {}
			progress[this.categoryId] = {
				current: this.currentGroup,
				tested: this.testedGroups
			}
			uni.setStorageSync('groupProgress', JSON.stringify(progress))
		},
		loadGroupWords() {
			this.stopPlay()
			this.groupWords = getWordsByGroup(this.categoryId, this.currentGroup, GROUP_SIZE)
		},
		groupStatus(idx) {
			if (this.isTested(idx)) return 'completed'
			if (idx === this.currentGroup) return 'current'
			return 'locked'
		},
		isTested(idx) {
			return this.testedGroups.includes(idx)
		},
		isLocked(idx) {
			return idx > this.currentGroup && !this.isTested(idx)
		},
		canNext() {
			if (this.currentGroup >= this.totalGroups - 1) return false
			return this.isTested(this.currentGroup)
		},
		switchGroup(idx) {
			if (this.isLocked(idx)) return
			this.currentGroup = idx
			this.saveProgress()
			this.loadGroupWords()
		},
		prevGroup() {
			if (this.currentGroup > 0) {
				this.currentGroup--
				this.saveProgress()
				this.loadGroupWords()
			}
		},
		nextGroup() {
			if (!this.canNext()) return
			this.currentGroup++
			this.saveProgress()
			this.loadGroupWords()
		},
		startGroupQuiz() {
			const wordIds = this.groupWords.map(w => w.id).join(',')
			uni.navigateTo({
				url: `/pages/quiz/quiz?wordIds=${wordIds}&categoryId=${this.categoryId}&groupIndex=${this.currentGroup}&categoryName=${encodeURIComponent(this.categoryName + ' 第' + (this.currentGroup + 1) + '组')}`
			})
		},
		startGroupSpell() {
			const wordIds = this.groupWords.map(w => w.id).join(',')
			uni.navigateTo({
				url: `/pages/spell/spell?wordIds=${wordIds}&categoryId=${this.categoryId}&groupIndex=${this.currentGroup}&categoryName=${encodeURIComponent(this.categoryName + ' 第' + (this.currentGroup + 1) + '组')}`
			})
		},
		isLearned(wordId) {
			return this.learnedIds.includes(wordId)
		},
		toggleLearned(wordId) {
			const index = this.learnedIds.indexOf(wordId)
			if (index > -1) {
				this.learnedIds.splice(index, 1)
			} else {
				this.learnedIds.push(wordId)
			}
			uni.setStorageSync('learnedWordIds', JSON.stringify(this.learnedIds))
			uni.setStorageSync('learnedWords', this.learnedIds.length)
		},
		speakWord(text) {
			this.stopPlay()
			try {
				if (typeof window !== 'undefined' && window.speechSynthesis) {
					const utterance = new SpeechSynthesisUtterance(text)
					utterance.lang = 'en-US'
					utterance.rate = 0.9
					window.speechSynthesis.speak(utterance)
					return
				}
			} catch (e) {}
			const audio = uni.createInnerAudioContext()
			audio.src = 'https://dict.youdao.com/dictvoice?audio=' + encodeURIComponent(text) + '&type=0'
			audio.play()
		},
		togglePlay() {
			if (this.playing) {
				this.stopPlay()
			} else {
				this.startPlay()
			}
		},
		startPlay() {
			if (!this.groupWords.length) return
			this.stopPlay()
			this.playIndex = 0
			this.playing = true
			this.playToken++
			this.playNext()
		},
		stopPlay() {
			this.playing = false
			this.playToken++
			if (this.playTimer) {
				clearTimeout(this.playTimer)
				this.playTimer = null
			}
			if (this.speakTimer) {
				clearTimeout(this.speakTimer)
				this.speakTimer = null
			}
			this.audioDone = null
			if (this.playAudio) {
				try { this.playAudio.stop() } catch (e) {}
			}
			if (typeof window !== 'undefined' && window.speechSynthesis) {
				try { window.speechSynthesis.cancel() } catch (e) {}
			}
		},
		playNext() {
			if (!this.playing) return
			if (this.playIndex >= this.groupWords.length) {
				this.stopPlay()
				return
			}
			const word = this.groupWords[this.playIndex]
			const token = this.playToken
			const next = () => {
				if (token !== this.playToken) return
				this.playIndex++
				this.playTimer = setTimeout(() => {
					this.playTimer = null
					if (token === this.playToken) this.playNext()
				}, 500)
			}
			this.speakText(word.en, 'en-US', () => {
				if (token !== this.playToken) return
				this.speakText(word.zh, 'zh-CN', next)
			})
		},
		speakText(text, lang, done) {
			if (!text) {
				done()
				return
			}
			let finished = false
			const finish = () => {
				if (finished) return
				finished = true
				if (this.speakTimer) {
					clearTimeout(this.speakTimer)
					this.speakTimer = null
				}
				done()
			}
			if (typeof window !== 'undefined' && window.speechSynthesis) {
				try {
					const utterance = new SpeechSynthesisUtterance(text)
					utterance.lang = lang
					utterance.rate = 0.9
					utterance.onend = finish
					utterance.onerror = finish
					window.speechSynthesis.speak(utterance)
					this.speakTimer = setTimeout(finish, Math.max(1500, text.length * 400) + 2000)
					return
				} catch (e) {}
			}
			this.ensureAudio()
			if (!this.playAudio) {
				finish()
				return
			}
			const audio = this.playAudio
			this.audioDone = finish
			const url = lang === 'zh-CN'
				? 'https://fanyi.baidu.com/gettts?lan=zh&text=' + encodeURIComponent(text) + '&spd=3&source=web'
				: 'https://dict.youdao.com/dictvoice?audio=' + encodeURIComponent(text) + '&type=0'
			try {
				audio.stop()
				audio.src = url
				audio.play()
			} catch (e) {
				finish()
				return
			}
			this.speakTimer = setTimeout(() => {
				try { audio.stop() } catch (e) {}
				finish()
			}, Math.max(1500, text.length * 500) + 3000)
		},
		ensureAudio() {
			if (this.playAudio) return
			if (typeof uni.createInnerAudioContext !== 'function') return
			const audio = uni.createInnerAudioContext()
			audio.onEnded(() => this.finishAudioPlay())
			audio.onError(() => this.finishAudioPlay())
			this.playAudio = audio
		},
		finishAudioPlay() {
			const done = this.audioDone
			this.audioDone = null
			if (done) done()
		}
	}
}
</script>

<style scoped>
.container {
	padding: 32rpx 32rpx;
	padding-bottom: 160rpx;
}

.words-header {
	background: #FFE082;
	border-radius: 36rpx;
	padding: 32rpx;
	color: #263238;
	margin-bottom: 24rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.words-category {
	font-size: 30rpx;
	font-weight: 600;
}
.words-count {
	font-size: 24rpx;
	color: #5D4037;
}

.group-tabs {
	white-space: nowrap;
	margin-bottom: 16rpx;
}
.group-tabs-inner {
	display: inline-flex;
	gap: 12rpx;
	padding: 4rpx 0;
}
.group-tab {
	width: 60rpx;
	height: 60rpx;
	border-radius: 30rpx;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	font-size: 24rpx;
	font-weight: 600;
	flex-shrink: 0;
}
.group-tab.locked {
	background: #B0BEC5;
	color: #B0BEC5;
	background: #42A5F5;
	color: #fff;
}
.group-tab.completed {
	background: #4CAF50;
	color: #fff;
}
.group-check {
	font-size: 22rpx;
	position: absolute;
	top: -4rpx;
	right: -4rpx;
}
.group-lock {
	font-size: 18rpx;
}

.group-label {
	font-size: 26rpx;
	color: #42A5F5;
	font-weight: 600;
	margin-bottom: 20rpx;
}

.word-card {
	background: #ffffff;
	border-radius: 36rpx;
	border: 1rpx solid #B0BEC5;
	padding: 32rpx;
	margin-bottom: 16rpx;
}
.word-card.learned {
	border-left: 6rpx solid #4CAF50;
}
.word-main { margin-bottom: 20rpx; }
.word-en-row {
	display: flex;
	align-items: center;
}
.word-en {
	font-size: 36rpx;
	font-weight: 600;
	color: #263238;
}
.speaker-icon {
	font-size: 32rpx;
	margin-left: 12rpx;
	padding: 4rpx;
}
.learned-badge {
	margin-left: 12rpx;
	background: #4CAF50;
	color: #fff;
	font-size: 22rpx;
	width: 36rpx;
	height: 36rpx;
	border-radius: 9999rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}
.word-phonetic {
	font-size: 24rpx;
	color: #78909C;
	margin-top: 8rpx;
	display: block;
}
.word-divider {
	height: 1rpx;
	background: #CFD8DC;
	margin-bottom: 16rpx;
}
.word-zh {
	font-size: 28rpx;
	color: #42A5F5;
	font-weight: 600;
	display: block;
}
.word-example {
	font-size: 26rpx;
	color: #78909C;
	margin-top: 10rpx;
	display: block;
	line-height: 1.5;
}
.word-example-zh {
	font-size: 24rpx;
	color: #78909C;
	margin-top: 6rpx;
	display: block;
}

.empty {
	text-align: center;
	color: #B0BEC5;
	padding: 100rpx 0;
	font-size: 30rpx;
}

.bottom-bar {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16rpx 32rpx;
	padding-bottom: calc(16rpx + env(safe-area-inset-bottom));
	background: #ffffff;
	border-top: 1rpx solid #B0BEC5;
}
.play-btn {
	width: 72rpx;
	height: 72rpx;
	border-radius: 9999rpx;
	background: #FFE082;
	color: #263238;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	margin-right: 12rpx;
}
.play-btn.playing {
	background: #EF5350;
	color: #fff;
}
.icon-play {
	width: 0;
	height: 0;
	border-top: 12rpx solid transparent;
	border-bottom: 12rpx solid transparent;
	border-left: 18rpx solid #263238;
	margin-left: 6rpx;
}
.icon-stop {
	width: 20rpx;
	height: 20rpx;
	background: #ffffff;
	border-radius: 2rpx;
}
.bar-btn {
	padding: 20rpx 20rpx;
	border-radius: 9999rpx;
	font-size: 26rpx;
	font-weight: 600;
	text-align: center;
	flex: 1;
	margin: 0 6rpx;
}
.prev-btn {
	background: #CFD8DC;
	color: #263238;
}
.next-btn {
	background: #CFD8DC;
	color: #263238;
}
.test-btn {
	background: #FF7043;
	color: #fff;
}
.spell-btn {
	background: #42A5F5;
	color: #fff;
}
.bar-btn.disabled {
	opacity: 0.3;
	pointer-events: none;
}
.all-done-msg {
	flex: 1;
	text-align: center;
	font-size: 34rpx;
	font-weight: 600;
	color: #4CAF50;
	padding: 20rpx 0;
}
</style>
