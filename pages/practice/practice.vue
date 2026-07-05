<template>
	<view class="container">
		<view class="hero-tile">
			<text class="hero-title">测验练习</text>
			<text class="hero-desc">选择题 + 拼写，巩固单词记忆</text>
		</view>

		<view class="quiz-grid">
			<view class="quiz-card spell-card" @click="startSpell(0, '随机拼写')">
				<text class="quiz-icon">✏️</text>
				<text class="quiz-label">拼写测试</text>
				<text class="quiz-desc">看中文写英文，练拼写</text>
			</view>
			<view class="quiz-card" @click="startQuiz(0, '随机测验')">
				<text class="quiz-icon">🎲</text>
				<text class="quiz-label">随机测验</text>
				<text class="quiz-desc">从所有单词中随机出题</text>
			</view>
			<view
				v-for="cat in categories"
				:key="cat.id"
				class="quiz-card"
				@click="startQuiz(cat.id, cat.category)"
			>
				<text class="quiz-icon">{{ cat.icon }}</text>
				<text class="quiz-label">{{ cat.category }}</text>
				<text class="quiz-desc">{{ cat.count }} 个单词</text>
			</view>
		</view>

		<view class="history-section">
			<text class="section-head">最近成绩</text>
			<view v-if="history.length === 0" class="empty-tip">还没有测验记录，快来试试吧</view>
			<view
				v-for="(item, index) in history"
				:key="index"
				class="history-item"
			>
				<view class="history-left">
					<text class="history-name">{{ item.category }}</text>
					<text class="history-date">{{ item.date }}</text>
				</view>
				<view class="history-right">
					<text :class="['history-score', item.percent >= 60 ? 'good' : 'bad']">{{ item.score }}/{{ item.total }}</text>
					<text class="history-percent">{{ item.percent }}%</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { getCategories } from '@/data/words.js'

export default {
	data() {
		return {
			categories: [],
			history: []
		}
	},
	onShow() {
		this.categories = getCategories()
		const savedHistory = uni.getStorageSync('quizHistory')
		this.history = savedHistory ? JSON.parse(savedHistory) : []
	},
	methods: {
		startQuiz(categoryId, categoryName) {
			uni.navigateTo({
				url: `/pages/quiz/quiz?categoryId=${categoryId}&categoryName=${encodeURIComponent(categoryName)}`
			})
		},
		startSpell(categoryId, categoryName) {
			uni.navigateTo({
				url: `/pages/spell/spell?categoryId=${categoryId}&categoryName=${encodeURIComponent(categoryName)}`
			})
		}
	}
}
</script>

<style scoped>
.container {
	padding: 32rpx 32rpx;
	padding-bottom: 40rpx;
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

.quiz-grid {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-bottom: 40rpx;
}
.quiz-card {
	width: 48%;
	background: #ffffff;
	border-radius: 36rpx;
	border: 1rpx solid #B0BEC5;
	padding: 32rpx 20rpx;
	margin-bottom: 20rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.quiz-icon { font-size: 48rpx; }
.quiz-label {
	font-size: 28rpx;
	font-weight: 600;
	color: #263238;
	margin-top: 12rpx;
}
.quiz-desc {
	font-size: 22rpx;
	color: #78909C;
	margin-top: 6rpx;
}

.history-section {
	background: #ffffff;
	border-radius: 36rpx;
	border: 1rpx solid #B0BEC5;
	padding: 32rpx;
}
.section-head {
	font-size: 30rpx;
	font-weight: 600;
	color: #263238;
	margin-bottom: 24rpx;
	display: block;
}
.empty-tip {
	text-align: center;
	color: #B0BEC5;
	padding: 48rpx 0;
	font-size: 26rpx;
}
.history-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20rpx 0;
	border-bottom: 1rpx solid #CFD8DC;
}
.history-item:last-child { border-bottom: none; }
.history-name { font-size: 28rpx; color: #263238; display: block; font-weight: 600; }
.history-date { font-size: 22rpx; color: #78909C; margin-top: 6rpx; display: block; }
.history-right { text-align: right; }
.history-score { font-size: 30rpx; font-weight: 600; }
.history-score.good { color: #4CAF50; }
.history-score.bad { color: #EF5350; }
.history-percent {
	font-size: 22rpx;
	color: #78909C;
	margin-left: 10rpx;
}
</style>
