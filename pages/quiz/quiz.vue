<template>
	<view class="container">
		<view class="quiz-top">
			<text class="quiz-title">{{ categoryName }}</text>
			<view class="quiz-progress-bar">
				<view class="quiz-progress-fill" :style="{ width: progress + '%' }"></view>
			</view>
			<text class="quiz-counter">{{ current + 1 }} / {{ questions.length }}</text>
		</view>

		<view v-if="!finished" class="question-area">
			<view class="question-card">
				<text class="question-label">请选择以下单词的中文含义</text>
				<view class="q-word-row">
					<text class="question-word">{{ currentQuestion.en }}</text>
					<text class="speaker-icon" @click.stop="speakWord(currentQuestion.en)">🔊</text>
				</view>
			</view>

			<view class="options">
				<view
					v-for="(opt, idx) in currentQuestion.options"
					:key="idx"
					:class="['option-item', selectedIndex === idx ? 'selected' : '']"
					@click="selectOption(idx)"
				>
					<text class="option-letter">{{ letters[idx] }}</text>
					<text class="option-text">{{ opt }}</text>
				</view>
			</view>

			<view v-if="selectedIndex !== null" class="next-btn" @click="nextQuestion">
				{{ current < questions.length - 1 ? '下一题' : '查看结果' }}
			</view>
		</view>

		<view v-else class="result-area">
			<text class="result-icon">{{ correctCount >= questions.length * 0.6 ? '🎉' : '💪' }}</text>
			<text class="result-score">{{ correctCount }} / {{ questions.length }}</text>
			<text class="result-msg">{{ resultMessage }}</text>
			<view class="result-actions">
				<view class="result-btn retry" @click="retry">再来一次</view>
				<view class="result-btn back" @click="goBack">返回</view>
			</view>
		</view>
	</view>
</template>

<script>
import { generateQuiz, generateQuizByWords } from '@/data/word-service.js'

export default {
	data() {
		return {
			categoryName: '',
			categoryId: 0,
			groupIndex: -1,
			questions: [],
			current: 0,
			selectedIndex: null,
			answers: [],
			finished: false,
			letters: ['A', 'B', 'C', 'D']
		}
	},
	computed: {
		currentQuestion() {
			return this.questions[this.current] || {}
		},
		progress() {
			if (this.questions.length === 0) return 0
			return ((this.current + 1) / this.questions.length) * 100
		},
		correctCount() {
			return this.answers.filter((a, i) => this.questions[i] && a === this.questions[i].correct).length
		},
		resultMessage() {
			const rate = this.questions.length > 0 ? this.correctCount / this.questions.length : 0
			if (rate >= 0.9) return '太棒了！你简直是单词达人！'
			if (rate >= 0.7) return '表现不错，继续加油！'
			if (rate >= 0.5) return '还有提升空间，再接再厉！'
			return '别灰心，多多练习就会进步！'
		}
	},
	onLoad(options) {
		this.categoryId = parseInt(options.categoryId) || 0
		this.groupIndex = parseInt(options.groupIndex)
		if (isNaN(this.groupIndex)) this.groupIndex = -1
		this.categoryName = decodeURIComponent(options.categoryName || '随机测验')
		if (options.wordIds) {
			const ids = options.wordIds.split(',').map(Number)
			this.questions = generateQuizByWords(ids, this.categoryId)
		} else {
			this.questions = generateQuiz(this.categoryId || 0, 10)
		}
	},
	methods: {
		selectOption(index) {
			this.selectedIndex = index
			this.answers[this.current] = this.currentQuestion.options[index]
		},
		nextQuestion() {
			if (this.current < this.questions.length - 1) {
				this.current++
				this.selectedIndex = null
			} else {
				this.finishQuiz()
			}
		},
		finishQuiz() {
			const correct = this.correctCount
			const total = this.questions.length
			const percent = total > 0 ? Math.round((correct / total) * 100) : 0
			const history = uni.getStorageSync('quizHistory')
			const list = history ? JSON.parse(history) : []
			const now = new Date()
			list.unshift({
				category: this.categoryName,
				score: correct,
				total: total,
				percent: percent,
				date: `${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`
			})
			if (list.length > 20) list.length = 20
			uni.setStorageSync('quizHistory', JSON.stringify(list))
			if (this.categoryId && this.groupIndex >= 0) {
				const raw = uni.getStorageSync('groupProgress')
				const progress = raw ? JSON.parse(raw) : {}
				if (!progress[this.categoryId]) {
					progress[this.categoryId] = { current: 0, tested: [] }
				}
				const catProgress = progress[this.categoryId]
				if (!catProgress.tested.includes(this.groupIndex)) {
					catProgress.tested.push(this.groupIndex)
				}
				if (this.groupIndex >= catProgress.current) {
					catProgress.current = this.groupIndex + 1
				}
				uni.setStorageSync('groupProgress', JSON.stringify(progress))
			}
			this.finished = true
		},
		retry() {
			this.current = 0
			this.selectedIndex = null
			this.answers = []
			this.finished = false
		},
		goBack() {
			uni.navigateBack()
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
.quiz-top {
	display: flex;
	align-items: center;
	margin-bottom: 32rpx;
}
.quiz-title {
	font-size: 26rpx;
	color: #263238;
	font-weight: 600;
	width: 150rpx;
}
.quiz-progress-bar {
	flex: 1;
	height: 8rpx;
	background: #B0BEC5;
	border-radius: 9999rpx;
	margin: 0 20rpx;
	overflow: hidden;
}
.quiz-progress-fill {
	height: 100%;
	background: #42A5F5;
	border-radius: 9999rpx;
	transition: width 0.3s;
}
.quiz-counter {
	font-size: 24rpx;
	color: #78909C;
	width: 80rpx;
	text-align: right;
}

.question-card {
	background: #FFE082;
	border-radius: 36rpx;
	padding: 56rpx 40rpx;
	text-align: center;
	color: #263238;
	margin-bottom: 40rpx;
}
.question-label {
	font-size: 26rpx;
	opacity: 0.7;
	display: block;
}
.q-word-row {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 24rpx;
}
.question-word {
	font-size: 52rpx;
	font-weight: 600;
}
.speaker-icon {
	font-size: 36rpx;
	margin-left: 16rpx;
	padding: 4rpx;
}

.options {
	margin-bottom: 32rpx;
}
.option-item {
	display: flex;
	align-items: center;
	background: #ffffff;
	border-radius: 36rpx;
	border: 1rpx solid #B0BEC5;
	padding: 28rpx 30rpx;
	margin-bottom: 16rpx;
}
.option-item.selected {
	border-color: #42A5F5;
	border-width: 2rpx;
	background: #E3F2FD;
}
.option-letter {
	width: 50rpx;
	height: 50rpx;
	background: #CFD8DC;
	border-radius: 9999rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 26rpx;
	font-weight: 600;
	color: #78909C;
	margin-right: 20rpx;
	flex-shrink: 0;
}
.option-item.selected .option-letter {
	background: #42A5F5;
	color: #fff;
}
.option-text {
	font-size: 30rpx;
	color: #263238;
}

.next-btn {
	background: #FF7043;
	padding: 28rpx 0;
	border-radius: 9999rpx;
	text-align: center;
	color: #fff;
	font-size: 30rpx;
	font-weight: 600;
}

.result-area {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 80rpx;
}
.result-icon { font-size: 100rpx; }
.result-score {
	font-size: 64rpx;
	font-weight: 600;
	color: #263238;
	margin-top: 24rpx;
}
.result-msg {
	font-size: 28rpx;
	color: #78909C;
	margin-top: 16rpx;
}
.result-actions {
	display: flex;
	gap: 20rpx;
	margin-top: 64rpx;
	width: 100%;
}
.result-btn {
	flex: 1;
	padding: 28rpx 0;
	border-radius: 9999rpx;
	text-align: center;
	font-size: 28rpx;
	font-weight: 600;
}
.retry {
	background: #FF7043;
	color: #fff;
}
.back {
	background: #CFD8DC;
	color: #263238;
}
</style>
