<template>
	<view class="container">
		<view class="result-hero">
			<text class="result-emoji">{{ emoji }}</text>
			<text class="result-score-text">{{ score }} 分</text>
			<text class="result-detail">正确 {{ correct }} / {{ total }} 题</text>
		</view>

		<view class="result-stat">
			<view class="stat-ring">
				<text class="ring-value">{{ percent }}%</text>
				<text class="ring-label">正确率</text>
			</view>
			<view class="stat-detail">
				<view class="detail-row">
					<text class="detail-label">正确</text>
					<text class="detail-value correct">{{ correct }}</text>
				</view>
				<view class="detail-row">
					<text class="detail-label">错误</text>
					<text class="detail-value wrong">{{ total - correct }}</text>
				</view>
				<view class="detail-row">
					<text class="detail-label">用时</text>
					<text class="detail-value">{{ duration }}</text>
				</view>
			</view>
		</view>

		<view class="result-actions">
			<view class="action-primary" @click="retryQuiz">再来一次</view>
			<view class="action-secondary" @click="goHome">返回首页</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			score: 0,
			correct: 0,
			total: 0,
			percent: 0,
			duration: '--'
		}
	},
	computed: {
		emoji() {
			if (this.percent >= 90) return '🏆'
			if (this.percent >= 70) return '🌟'
			if (this.percent >= 50) return '👍'
			return '💪'
		}
	},
	onLoad(options) {
		this.correct = parseInt(options.correct) || 0
		this.total = parseInt(options.total) || 0
		this.percent = this.total > 0 ? Math.round((this.correct / this.total) * 100) : 0
		this.score = this.correct * 10
		if (options.duration) {
			this.duration = options.duration
		}
	},
	methods: {
		retryQuiz() {
			uni.navigateBack()
		},
		goHome() {
			uni.switchTab({ url: '/pages/index/index' })
		}
	}
}
</script>

<style scoped>
.container {
	padding: 32rpx 32rpx;
}

.result-hero {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 64rpx 0 48rpx;
}
.result-emoji { font-size: 120rpx; }
.result-score-text {
	font-size: 72rpx;
	font-weight: 600;
	color: #42A5F5;
	margin-top: 20rpx;
}
.result-detail {
	font-size: 28rpx;
	color: #78909C;
	margin-top: 10rpx;
}

.result-stat {
	display: flex;
	align-items: center;
	background: #ffffff;
	border-radius: 36rpx;
	border: 1rpx solid #B0BEC5;
	padding: 40rpx;
	margin-bottom: 40rpx;
}
.stat-ring {
	width: 160rpx;
	height: 160rpx;
	border-radius: 50%;
	border: 8rpx solid #42A5F5;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-right: 40rpx;
}
.ring-value {
	font-size: 40rpx;
	font-weight: 600;
	color: #42A5F5;
}
.ring-label {
	font-size: 24rpx;
	color: #78909C;
}
.stat-detail { flex: 1; }
.detail-row {
	display: flex;
	justify-content: space-between;
	padding: 12rpx 0;
}
.detail-label { font-size: 28rpx; color: #78909C; }
.detail-value { font-size: 28rpx; font-weight: 600; }
.detail-value.correct { color: #4CAF50; }
.detail-value.wrong { color: #EF5350; }

.result-actions {
	display: flex;
	flex-direction: column;
	gap: 20rpx;
}
.action-primary {
	background: #FF7043;
	padding: 28rpx 0;
	border-radius: 9999rpx;
	text-align: center;
	color: #ffffff;
	font-size: 30rpx;
	font-weight: 600;
}
.action-secondary {
	padding: 28rpx 0;
	border-radius: 9999rpx;
	text-align: center;
	color: #263238;
	font-size: 28rpx;
	font-weight: 600;
	background: #FFD54F;
}
</style>
