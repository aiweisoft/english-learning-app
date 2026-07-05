<template>
	<view class="container">
		<view class="profile-header">
			<view class="avatar">🎓</view>
			<text class="username">英语学习者</text>
			<text class="motto">每天进步一点点</text>
		</view>

		<view class="stats-grid">
			<view class="stat-box">
				<text class="stat-value">{{ learnedWords }}</text>
				<text class="stat-label">已学单词</text>
			</view>
			<view class="stat-box">
				<text class="stat-value">{{ totalWords }}</text>
				<text class="stat-label">总词汇量</text>
			</view>
			<view class="stat-box">
				<text class="stat-value">{{ streakDays }}</text>
				<text class="stat-label">连续打卡</text>
			</view>
			<view class="stat-box">
				<text class="stat-value">{{ quizCount }}</text>
				<text class="stat-label">测验次数</text>
			</view>
		</view>

		<text class="section-head">学习进度</text>
		<view
			v-for="cat in categoriesWithProgress"
			:key="cat.id"
			class="progress-item"
		>
			<view class="progress-header">
				<text class="progress-cat">{{ cat.icon }} {{ cat.category }}</text>
				<text class="progress-num">{{ cat.learned }}/{{ cat.total }}</text>
			</view>
			<view class="progress-bar">
				<view class="progress-fill" :style="{ width: cat.percent + '%' }"></view>
			</view>
		</view>

		<view class="checkin-btn" @click="checkIn">
			<text>{{ checkedIn ? '今日已打卡' : '今日打卡签到' }}</text>
		</view>

		<view class="reset-btn" @click="resetData">
			<text>重置学习数据</text>
		</view>
	</view>
</template>

<script>
import { getAllWords, getCategories, getWordsByCategory } from '@/data/words.js'

export default {
	data() {
		return {
			learnedWords: 0,
			totalWords: 0,
			streakDays: 0,
			quizCount: 0,
			categoriesWithProgress: [],
			checkedIn: false
		}
	},
	onShow() {
		this.loadData()
	},
	methods: {
		loadData() {
			this.totalWords = getAllWords().length
			const learnedIds = uni.getStorageSync('learnedWordIds')
			const ids = learnedIds ? JSON.parse(learnedIds) : []
			this.learnedWords = ids.length
			this.streakDays = uni.getStorageSync('streakDays') || 0
			const history = uni.getStorageSync('quizHistory')
			this.quizCount = history ? JSON.parse(history).length : 0
			this.checkedIn = uni.getStorageSync('checkedInToday') === new Date().toDateString()

			const categories = getCategories()
			this.categoriesWithProgress = categories.map(cat => {
				const words = getWordsByCategory(cat.id)
				const learned = words.filter(w => ids.includes(w.id)).length
				return {
					id: cat.id,
					icon: cat.icon,
					category: cat.category,
					total: words.length,
					learned: learned,
					percent: words.length > 0 ? Math.round((learned / words.length) * 100) : 0
				}
			})
		},
		checkIn() {
			if (this.checkedIn) return
			this.checkedIn = true
			this.streakDays++
			uni.setStorageSync('checkedInToday', new Date().toDateString())
			uni.setStorageSync('streakDays', this.streakDays)
			uni.showToast({ title: '打卡成功！继续加油！', icon: 'success' })
		},
		resetData() {
			uni.showModal({
				title: '确认重置',
				content: '确定要清除所有学习数据吗？此操作不可恢复。',
				success: (res) => {
					if (res.confirm) {
						uni.removeStorageSync('learnedWordIds')
						uni.removeStorageSync('learnedWords')
						uni.removeStorageSync('streakDays')
						uni.removeStorageSync('quizHistory')
						uni.removeStorageSync('checkedInToday')
						this.loadData()
						uni.showToast({ title: '已重置', icon: 'success' })
					}
				}
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

.profile-header {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 64rpx 0 48rpx;
}
.avatar { font-size: 80rpx; }
.username {
	font-size: 34rpx;
	font-weight: 600;
	color: #263238;
	margin-top: 20rpx;
}
.motto {
	font-size: 28rpx;
	color: #78909C;
	margin-top: 8rpx;
	font-weight: 400;
}

.stats-grid {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-bottom: 40rpx;
}
.stat-box {
	width: 48%;
	background: #ffffff;
	border-radius: 36rpx;
	border: 1rpx solid #B0BEC5;
	padding: 32rpx 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 16rpx;
}
.stat-value {
	font-size: 44rpx;
	font-weight: 600;
	color: #263238;
}
.stat-label {
	font-size: 24rpx;
	color: #78909C;
	margin-top: 8rpx;
}

.section-head {
	font-size: 30rpx;
	font-weight: 600;
	color: #263238;
	margin-bottom: 20rpx;
	display: block;
}
.progress-item {
	background: #ffffff;
	border-radius: 36rpx;
	border: 1rpx solid #B0BEC5;
	padding: 24rpx 32rpx;
	margin-bottom: 16rpx;
}
.progress-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16rpx;
}
.progress-cat { font-size: 28rpx; color: #263238; font-weight: 600; }
.progress-num { font-size: 24rpx; color: #78909C; }
.progress-bar {
	height: 8rpx;
	background: #B0BEC5;
	border-radius: 9999rpx;
	overflow: hidden;
}
.progress-fill {
	height: 100%;
	background: #42A5F5;
	border-radius: 9999rpx;
	transition: width 0.5s;
}

.checkin-btn {
	margin-top: 40rpx;
	background: #FF7043;
	padding: 28rpx 0;
	border-radius: 9999rpx;
	text-align: center;
	color: #fff;
	font-size: 30rpx;
	font-weight: 600;
}
.reset-btn {
	margin-top: 20rpx;
	padding: 20rpx 0;
	text-align: center;
	color: #78909C;
	font-size: 26rpx;
}
</style>
