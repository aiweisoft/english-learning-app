<template>
	<view class="container">
		<view class="mode-switch">
			<view
				:class="['mode-pill', mode === 'list' ? 'active' : '']"
				@click="mode = 'list'"
			>列表</view>
			<view
				:class="['mode-pill', mode === 'card' ? 'active' : '']"
				@click="mode = 'card'"
			>闪卡</view>
		</view>

		<view v-if="mode === 'list'">
			<view
				v-for="cat in categories"
				:key="cat.id"
				class="cat-card"
				@click="goToCategory(cat.id, cat.category)"
			>
				<view class="cat-top">
					<text class="cat-icon">{{ cat.icon }}</text>
					<text class="cat-name">{{ cat.category }}</text>
					<text class="cat-arrow">›</text>
				</view>
				<view class="cat-bottom">
					<text class="cat-num">{{ cat.count }} 个单词</text>
					<text class="cat-progress">已学 {{ getCatLearned(cat.id) }} 个</text>
				</view>
			</view>
		</view>

		<view v-if="mode === 'card'" class="card-mode">
			<view class="card-tabs">
				<view
					v-for="cat in categories"
					:key="cat.id"
					:class="['tab-chip', currentCatId === cat.id ? 'tab-on' : '']"
					@click="switchCategory(cat.id)"
				>{{ cat.category }}</view>
			</view>
			<view
				v-if="currentWord"
				class="flashcard"
				@click="flipCard"
			>
				<view :class="['card-inner', flipped ? 'flipped' : '']">
					<view class="card-front">
						<view class="card-en-row">
							<text class="card-en">{{ currentWord.en }}</text>
							<text class="speaker-icon" @click.stop="speakWord(currentWord.en)">🔊</text>
						</view>
						<text class="card-phonetic">{{ currentWord.phonetic }}</text>
						<text class="card-hint">点击翻转</text>
					</view>
					<view class="card-back">
						<text class="card-zh">{{ currentWord.zh }}</text>
						<text class="card-example">{{ currentWord.example }}</text>
						<text class="card-example-zh">{{ currentWord.exampleZh }}</text>
					</view>
				</view>
			</view>
			<view v-if="currentWord" class="card-actions">
				<view class="card-btn prev" @click="prevWord">上一个</view>
				<view class="card-btn learned" @click="markLearned">已学会</view>
				<view class="card-btn next" @click="nextWord">下一个</view>
			</view>
			<view class="card-progress-bar">
				<view class="progress-track">
					<view class="progress-fill" :style="{ width: cardProgress + '%' }"></view>
				</view>
				<text class="progress-text">{{ currentIndex + 1 }} / {{ currentWords.length }}</text>
			</view>
		</view>
	</view>
</template>

<script>
import { getCategories, getWordsByCategory } from '@/data/words.js'

export default {
	data() {
		return {
			categories: [],
			mode: 'list',
			currentCatId: 1,
			currentWords: [],
			currentIndex: 0,
			flipped: false,
			learnedIds: []
		}
	},
	computed: {
		currentWord() {
			return this.currentWords[this.currentIndex] || null
		},
		cardProgress() {
			if (this.currentWords.length === 0) return 0
			return ((this.currentIndex + 1) / this.currentWords.length) * 100
		}
	},
	onShow() {
		this.categories = getCategories()
		const learned = uni.getStorageSync('learnedWordIds')
		this.learnedIds = learned ? JSON.parse(learned) : []
		if (this.mode === 'card') {
			this.switchCategory(this.currentCatId)
		}
	},
	methods: {
		getCatLearned(catId) {
			const words = getWordsByCategory(catId)
			return words.filter(w => this.learnedIds.includes(w.id)).length
		},
		goToCategory(id, name) {
			uni.navigateTo({
				url: `/pages/word-detail/word-detail?categoryId=${id}&categoryName=${encodeURIComponent(name)}`
			})
		},
		switchCategory(id) {
			this.currentCatId = id
			this.currentWords = getWordsByCategory(id)
			this.currentIndex = 0
			this.flipped = false
		},
		flipCard() {
			this.flipped = !this.flipped
		},
		prevWord() {
			this.flipped = false
			if (this.currentIndex > 0) {
				this.currentIndex--
			} else {
				this.currentIndex = this.currentWords.length - 1
			}
		},
		nextWord() {
			this.flipped = false
			if (this.currentIndex < this.currentWords.length - 1) {
				this.currentIndex++
			} else {
				this.currentIndex = 0
			}
		},
		markLearned() {
			if (!this.currentWord) return
			if (!this.learnedIds.includes(this.currentWord.id)) {
				this.learnedIds.push(this.currentWord.id)
				uni.setStorageSync('learnedWordIds', JSON.stringify(this.learnedIds))
				uni.setStorageSync('learnedWords', this.learnedIds.length)
			}
			uni.showToast({ title: '已标记为学会', icon: 'success', duration: 1200 })
			this.nextWord()
		},
		speakWord(text) {
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
		}
	}
}
</script>

<style scoped>
.container {
	padding: 32rpx 32rpx;
}

.mode-switch {
	display: flex;
	background: #ffffff;
	border-radius: 9999rpx;
	border: 1rpx solid #B0BEC5;
	padding: 6rpx;
	margin-bottom: 32rpx;
}
.mode-pill {
	flex: 1;
	text-align: center;
	padding: 20rpx 0;
	border-radius: 9999rpx;
	font-size: 28rpx;
	color: #78909C;
	font-weight: 600;
}
.mode-pill.active {
	background: #42A5F5;
	color: #ffffff;
}

.cat-card {
	background: #ffffff;
	border-radius: 36rpx;
	border: 1rpx solid #B0BEC5;
	padding: 32rpx;
	margin-bottom: 20rpx;
}
.cat-top {
	display: flex;
	align-items: center;
}
.cat-icon { font-size: 36rpx; }
.cat-name {
	font-size: 30rpx;
	font-weight: 600;
	color: #263238;
	margin-left: 16rpx;
	flex: 1;
}
.cat-arrow {
	font-size: 40rpx;
	color: #B0BEC5;
}
.cat-bottom {
	display: flex;
	justify-content: space-between;
	margin-top: 16rpx;
	padding-left: 52rpx;
}
.cat-num { font-size: 24rpx; color: #78909C; }
.cat-progress { font-size: 24rpx; color: #42A5F5; }

.card-tabs {
	display: flex;
	background: #ffffff;
	border-radius: 36rpx;
	border: 1rpx solid #B0BEC5;
	padding: 6rpx;
	margin-bottom: 40rpx;
	flex-wrap: wrap;
}
.tab-chip {
	flex: 1;
	min-width: 25%;
	text-align: center;
	padding: 16rpx 10rpx;
	font-size: 24rpx;
	color: #78909C;
	border-radius: 9999rpx;
	font-weight: 600;
}
.tab-on {
	background: #42A5F5;
	color: #ffffff;
}

.flashcard {
	margin: 20rpx auto;
	width: 100%;
	height: 500rpx;
	perspective: 1000rpx;
}
.card-inner {
	width: 100%;
	height: 100%;
	position: relative;
	transition: transform 0.6s;
	transform-style: preserve-3d;
}
.card-inner.flipped {
	transform: rotateY(180deg);
}
.card-front, .card-back {
	position: absolute;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
	border-radius: 36rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 40rpx;
	box-sizing: border-box;
}
.card-front {
	background: #42A5F5;
	color: #fff;
}
.card-back {
	background: #263238;
	transform: rotateY(180deg);
	color: #fff;
}
.card-en-row {
	display: flex;
	align-items: center;
}
.card-en {
	font-size: 52rpx;
	font-weight: 600;
}
.speaker-icon {
	font-size: 36rpx;
	margin-left: 16rpx;
	padding: 4rpx;
}
.card-phonetic {
	font-size: 26rpx;
	margin-top: 20rpx;
	opacity: 0.8;
}
.card-hint {
	font-size: 22rpx;
	margin-top: 40rpx;
	opacity: 0.5;
}
.card-zh {
	font-size: 48rpx;
	font-weight: 600;
}
.card-example {
	font-size: 26rpx;
	margin-top: 24rpx;
	text-align: center;
	line-height: 1.5;
	opacity: 0.9;
}
.card-example-zh {
	font-size: 24rpx;
	margin-top: 12rpx;
	opacity: 0.7;
}

.card-actions {
	display: flex;
	justify-content: space-between;
	margin-top: 32rpx;
}
.card-btn {
	padding: 20rpx 36rpx;
	border-radius: 9999rpx;
	font-size: 28rpx;
	color: #fff;
	font-weight: 600;
}
.prev { background: #CFD8DC; color: #263238; }
.next { background: #42A5F5; }
.learned { background: #4CAF50; }

.card-progress-bar {
	margin-top: 32rpx;
	display: flex;
	align-items: center;
}
.progress-track {
	flex: 1;
	height: 8rpx;
	background: #B0BEC5;
	border-radius: 9999rpx;
	overflow: hidden;
}
.progress-fill {
	height: 100%;
	background: #42A5F5;
	border-radius: 9999rpx;
	transition: width 0.3s;
}
.progress-text {
	font-size: 24rpx;
	color: #78909C;
	margin-left: 20rpx;
	min-width: 80rpx;
}
</style>
