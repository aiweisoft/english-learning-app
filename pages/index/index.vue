<template>
	<view class="container">
		<view class="hero-tile">
			<view class="sentence-nav">
				<text class="nav-arrow" @click="prevSentence">‹</text>
				<text class="hero-kicker">每日一句</text>
				<text class="nav-arrow" @click="nextSentence">›</text>
			</view>
			<text class="hero-headline">{{ dailySentence.en }}</text>
			<text class="hero-subcopy">{{ dailySentence.zh }}</text>
			<text class="hero-author">—— {{ dailySentence.author }}</text>
		</view>

		<view class="stats-row">
			<view class="stat-item">
				<text class="stat-value">{{ learnedCount }}</text>
				<text class="stat-label">已学单词</text>
			</view>
			<view class="stat-item">
				<text class="stat-value">{{ totalWords }}</text>
				<text class="stat-label">总词汇量</text>
			</view>
			<view class="stat-item">
				<text class="stat-value">{{ streakDays }}</text>
				<text class="stat-label">连续天数</text>
			</view>
		</view>

		<text class="section-head">分类学习</text>
		<view class="category-grid">
			<view
				v-for="cat in categories"
				:key="cat.id"
				class="category-card"
				@click="goToCategory(cat.id, cat.category)"
			>
				<text class="cat-icon">{{ cat.icon }}</text>
				<text class="cat-name">{{ cat.category }}</text>
				<text class="cat-count">{{ cat.count }} 词</text>
			</view>
		</view>

		<text class="section-head">快捷入口</text>
		<view class="quick-actions">
			<view class="action-btn action-quiz" @click="startQuiz(0)">
				<text class="action-label">随机测验</text>
			</view>
			<view class="action-btn action-review" @click="goToVocabulary">
				<text class="action-label">复习单词</text>
			</view>
		</view>
	</view>
</template>

<script>
import { getAllWords, getCategories, getAllSentences } from '@/data/word-service.js'

export default {
	data() {
		return {
			dailySentence: {},
			sentenceIndex: 0,
			allSentences: [],
			categories: [],
			totalWords: 0,
			learnedCount: 0,
			streakDays: 0
		}
	},
	onShow() {
		this.initData()
	},
	methods: {
		initData() {
			this.allSentences = getAllSentences()
			const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000)
			this.sentenceIndex = dayOfYear % this.allSentences.length
			this.dailySentence = this.allSentences[this.sentenceIndex]
			this.categories = getCategories()
			this.totalWords = getAllWords().length
			this.learnedCount = uni.getStorageSync('learnedWords') || 0
			this.streakDays = uni.getStorageSync('streakDays') || 0
		},
		nextSentence() {
			this.sentenceIndex = (this.sentenceIndex + 1) % this.allSentences.length
			this.dailySentence = this.allSentences[this.sentenceIndex]
		},
		prevSentence() {
			this.sentenceIndex = (this.sentenceIndex - 1 + this.allSentences.length) % this.allSentences.length
			this.dailySentence = this.allSentences[this.sentenceIndex]
		},
		goToCategory(id, name) {
			uni.navigateTo({
				url: `/pages/word-detail/word-detail?categoryId=${id}&categoryName=${encodeURIComponent(name)}`
			})
		},
		goToVocabulary() {
			uni.switchTab({ url: '/pages/vocabulary/vocabulary' })
		},
		startQuiz(categoryId) {
			uni.navigateTo({
				url: `/pages/quiz/quiz?categoryId=${categoryId}`
			})
		}
	}
}
</script>

<style scoped>
.container {
	padding: 32rpx 32rpx;
	padding-bottom: 32rpx;
}

.hero-tile {
	background: #FFE082;
	border-radius: 36rpx;
	padding: 48rpx 40rpx;
	margin-bottom: 32rpx;
}
.sentence-nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16rpx;
}
.nav-arrow {
	font-size: 40rpx;
	color: #263238;
	padding: 8rpx 12rpx;
	line-height: 1;
}
.hero-kicker {
	font-size: 24rpx;
	color: #263238;
	font-weight: 600;
	letter-spacing: 1rpx;
}
.hero-headline {
	font-size: 40rpx;
	font-weight: 600;
	color: #263238;
	line-height: 1.15;
	display: block;
	margin-top: 24rpx;
}
.hero-subcopy {
	font-size: 28rpx;
	color: #5D4037;
	margin-top: 20rpx;
	display: block;
	line-height: 1.5;
}
.hero-author {
	font-size: 24rpx;
	color: #5D4037;
	margin-top: 20rpx;
	display: block;
	font-style: italic;
}

.stats-row {
	display: flex;
	justify-content: space-around;
	background: #ffffff;
	border-radius: 36rpx;
	border: 1rpx solid #B0BEC5;
	padding: 40rpx 0;
	margin-bottom: 40rpx;
}
.stat-item {
	display: flex;
	flex-direction: column;
	align-items: center;
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
	font-size: 34rpx;
	font-weight: 600;
	color: #263238;
	margin-bottom: 24rpx;
	display: block;
}

.category-grid {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-bottom: 40rpx;
}
.category-card {
	width: 31%;
	background: #ffffff;
	border-radius: 36rpx;
	border: 1rpx solid #B0BEC5;
	padding: 32rpx 10rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20rpx;
}
.cat-icon {
	font-size: 48rpx;
}
.cat-name {
	font-size: 24rpx;
	color: #263238;
	margin-top: 12rpx;
	font-weight: 600;
}
.cat-count {
	font-size: 20rpx;
	color: #78909C;
	margin-top: 6rpx;
}

.quick-actions {
	display: flex;
	gap: 20rpx;
}
.action-btn {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 34rpx 0;
	border-radius: 9999rpx;
}
.action-quiz {
	background: #FF7043;
}
.action-review {
	background: #FFD54F;
	color: #263238;
}
.action-label {
	font-size: 28rpx;
	font-weight: 600;
	color: #fff;
}
.action-review .action-label {
	color: #263238;
}
</style>
