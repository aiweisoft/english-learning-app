<template>
	<view class="container">
		<view class="hero-tile">
			<text class="hero-title">单词拼写</text>
			<text class="hero-desc">根据中文写出对应英文单词</text>
		</view>

		<view v-if="!finished" class="quiz-body">
			<view class="progress-wrap">
				<view class="progress-track">
					<view class="progress-fill" :style="{ width: progress + '%' }"></view>
				</view>
				<text class="progress-text">{{ current + 1 }} / {{ questions.length }}</text>
			</view>

			<view v-if="questions.length > 0" class="question-card">
				<view class="q-header">
					<text class="q-zh">{{ currentQuestion.zh }}</text>
					<text class="speaker-icon" @click="speakWord(currentQuestion.en)">🔊</text>
				</view>
				<text v-if="currentQuestion.phonetic" class="q-phonetic">{{ currentQuestion.phonetic }}</text>

				<view class="input-wrap">
					<input
						v-model="userInput"
						class="spell-input"
						placeholder="输入英文单词..."
						:disabled="answered"
						:focus="!answered"
						@confirm="checkAnswer"
					/>
				</view>

				<view v-if="answered" class="feedback-area">
					<view :class="['feedback-badge', isCorrect ? 'correct' : 'wrong']">
						{{ isCorrect ? '✓ 正确' : '✗ 错误' }}
					</view>
					<view v-if="!isCorrect" class="correct-answer">
						<text class="correct-label">正确答案：</text>
						<text class="correct-en">{{ currentQuestion.en }}</text>
					</view>
				</view>

				<view class="action-btn" @click="handleNext">{{ isLastQuestion ? '查看结果' : '下一题' }}</view>
			</view>

			<view v-else class="empty-tip">暂无题目</view>
		</view>

		<view v-if="finished" class="result-area">
			<text class="result-icon">{{ resultEmoji }}</text>
			<text class="result-score">{{ correctCount }} / {{ questions.length }}</text>
			<text class="result-msg">{{ resultMsg }}</text>
			<view class="result-actions">
				<view class="result-btn retry" @click="retry">再来一次</view>
				<view class="result-btn back" @click="goBack">返回</view>
			</view>
		</view>
	</view>
</template>

<script>
import { generateSpellQuiz, generateSpellQuizByWords } from '@/data/words.js'

export default {
	data() {
		return {
			categoryName: '',
			categoryId: 0,
			groupIndex: -1,
			questions: [],
			current: 0,
			userInput: '',
			answered: false,
			isCorrect: false,
			answers: [],
			finished: false
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
		isLastQuestion() {
			return this.current >= this.questions.length - 1
		},
		correctCount() {
			return this.answers.filter(a => a).length
		},
		resultEmoji() {
			const rate = this.scorePercent
			if (rate >= 90) return '🏆'
			if (rate >= 70) return '🌟'
			if (rate >= 50) return '👍'
			return '💪'
		},
		scorePercent() {
			return this.questions.length > 0 ? Math.round((this.correctCount / this.questions.length) * 100) : 0
		},
		resultMsg() {
			const rate = this.scorePercent
			if (rate >= 90) return '太棒了！拼写达人！'
			if (rate >= 70) return '表现不错，继续加油！'
			if (rate >= 50) return '还有提升空间，再接再厉！'
			return '别灰心，多多练习就会进步！'
		}
	},
	onLoad(options) {
		this.categoryId = parseInt(options.categoryId) || 0
		this.groupIndex = parseInt(options.groupIndex)
		if (isNaN(this.groupIndex)) this.groupIndex = -1
		this.categoryName = decodeURIComponent(options.categoryName || '随机拼写')
		if (options.wordIds) {
			const ids = options.wordIds.split(',').map(Number)
			this.questions = generateSpellQuizByWords(ids)
		} else {
			this.questions = generateSpellQuiz(this.categoryId || 0, 10)
		}
		this.answers = new Array(this.questions.length).fill(false)
	},
	methods: {
		checkAnswer() {
			if (this.answered || !this.userInput.trim()) return
			this.answered = true
			const userAnswer = this.userInput.trim().toLowerCase()
			const correctAnswer = this.currentQuestion.en.toLowerCase()
			this.isCorrect = userAnswer === correctAnswer
			this.answers[this.current] = this.isCorrect
		},
		handleNext() {
			if (!this.answered) {
				this.checkAnswer()
				return
			}
			if (this.isLastQuestion) {
				this.finishQuiz()
			} else {
				this.current++
				this.userInput = ''
				this.answered = false
				this.isCorrect = false
			}
		},
		finishQuiz() {
			const correct = this.correctCount
			const total = this.questions.length
			const percent = this.scorePercent
			const history = uni.getStorageSync('quizHistory')
			const list = history ? JSON.parse(history) : []
			const now = new Date()
			list.unshift({
				category: '拼写-' + this.categoryName,
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
				uni.setStorageSync('groupProgress', JSON.stringify(progress))
			}
			this.finished = true
		},
		retry() {
			if (this.categoryId || this.categoryName.includes('第')) {
				const ids = this.questions.map(q => q.id).join(',')
				this.questions = generateSpellQuizByWords(this.questions.map(q => q.id))
			} else {
				this.questions = generateSpellQuiz(this.categoryId || 0, 10)
			}
			this.current = 0
			this.userInput = ''
			this.answered = false
			this.isCorrect = false
			this.answers = new Array(this.questions.length).fill(false)
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
	padding-bottom: 64rpx;
}

.hero-tile {
	background: #FFE082;
	border-radius: 36rpx;
	padding: 48rpx 40rpx;
	margin-bottom: 32rpx;
}
.hero-title {
	font-size: 40rpx;
	font-weight: 600;
	color: #263238;
	display: block;
	line-height: 1.1;
}
.hero-desc {
	font-size: 24rpx;
	color: #5D4037;
	margin-top: 12rpx;
	display: block;
}

.quiz-body {
	background: #ffffff;
	border-radius: 36rpx;
	border: 1rpx solid #B0BEC5;
	padding: 32rpx;
}

.progress-wrap {
	display: flex;
	align-items: center;
	margin-bottom: 32rpx;
}
.progress-track {
	flex: 1;
	height: 8rpx;
	background: #CFD8DC;
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
	margin-left: 16rpx;
	white-space: nowrap;
}

.question-card {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.q-header {
	display: flex;
	align-items: center;
	margin-bottom: 8rpx;
}
.q-zh {
	font-size: 44rpx;
	font-weight: 600;
	color: #263238;
}
.speaker-icon {
	font-size: 36rpx;
	margin-left: 14rpx;
	padding: 4rpx;
}
.q-phonetic {
	font-size: 26rpx;
	color: #78909C;
	margin-bottom: 32rpx;
}

.input-wrap {
	width: 100%;
	margin-bottom: 24rpx;
}
.spell-input {
	width: 100%;
	height: 80rpx;
	border: 2rpx solid #B0BEC5;
	border-radius: 16rpx;
	font-size: 32rpx;
	padding: 0 24rpx;
	color: #263238;
	background: #ffffff;
}
.spell-input[disabled] {
	background: #f0ece8;
	color: #78909C;
}

.feedback-area {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 24rpx;
}
.feedback-badge {
	font-size: 28rpx;
	font-weight: 600;
	padding: 10rpx 32rpx;
	border-radius: 9999rpx;
	margin-bottom: 12rpx;
}
.feedback-badge.correct {
	background: #4CAF50;
	color: #ffffff;
}
.feedback-badge.wrong {
	background: #EF5350;
	color: #ffffff;
}
.correct-answer {
	font-size: 28rpx;
	color: #263238;
}
.correct-label {
	color: #78909C;
}
.correct-en {
	font-weight: 600;
	color: #4CAF50;
}

.action-btn {
	width: 100%;
	background: #FF7043;
	padding: 28rpx 0;
	border-radius: 9999rpx;
	text-align: center;
	color: #ffffff;
	font-size: 30rpx;
	font-weight: 600;
}
.empty-tip {
	text-align: center;
	color: #B0BEC5;
	padding: 48rpx 0;
	font-size: 26rpx;
}

.result-area {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 64rpx 32rpx;
	background: #ffffff;
	border-radius: 36rpx;
	border: 1rpx solid #B0BEC5;
}
.result-icon {
	font-size: 100rpx;
}
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
	margin-top: 48rpx;
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
	color: #ffffff;
}
.back {
	background: #CFD8DC;
	color: #263238;
}
</style>
