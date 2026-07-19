<template>
	<view class="container">
		<view class="status-card">
			<text class="status-label">{{ isCustom ? '当前使用：自定义词库' : '当前使用：内置词库' }}</text>
			<text class="status-detail">{{ categoryCount }} 个分类 · {{ totalWords }} 个单词</text>
		</view>

		<view class="action-btn template-btn" @click="downloadTemplate">
			<text class="btn-text">下载导入模板</text>
		</view>

		<text class="section-head">整库导入</text>
		<view class="import-card">
			<textarea
				class="import-textarea"
				v-model="importText"
				placeholder="请粘贴词表内容（格式：英文|中文|词性|分类）"
				:maxlength="50000"
			/>
			<view v-if="preview" class="preview-bar">
				<text class="preview-info">预览：{{ preview.totalWords }} 个单词，{{ preview.categories.length }} 个分类</text>
				<view class="preview-cats">
					<text v-for="cat in preview.categories" :key="cat.id" class="preview-cat-tag">{{ cat.category }} ({{ cat.words.length }}词)</text>
				</view>
			</view>
			<view v-if="importErrors && importErrors.length > 0" class="error-bar">
				<text v-for="(err, idx) in importErrors.slice(0, 5)" :key="idx" class="error-text">{{ err }}</text>
				<text v-if="importErrors.length > 5" class="error-text">... 还有 {{ importErrors.length - 5 }} 条错误</text>
			</view>
			<view class="import-btn-wrap">
				<view class="action-btn preview-btn" @click="previewImport">
					<text class="btn-text">预览</text>
				</view>
				<view class="action-btn confirm-btn" @click="confirmImport">
					<text class="btn-text">确认导入并替换词库</text>
				</view>
			</view>
		</view>

		<view class="action-btn export-btn" @click="exportWordLib">
			<text class="btn-text">导出当前词库</text>
		</view>

		<view v-if="isCustom" class="action-btn restore-btn" @click="restoreBuiltin">
			<text class="btn-text">恢复内置词库</text>
		</view>

		<text class="section-head">分类管理</text>
		<view class="category-list">
			<view
				v-for="cat in categories"
				:key="cat.id"
				class="cat-row"
			>
				<view class="cat-info">
					<text class="cat-icon">{{ cat.icon }}</text>
					<view class="cat-meta">
						<text class="cat-name">{{ cat.category }}</text>
						<text class="cat-word-count">{{ cat.count }} 词</text>
					</view>
				</view>
				<view class="cat-actions">
					<view class="cat-btn" @click="exportCategory(cat)">
						<text class="cat-btn-text">导出</text>
					</view>
					<view class="cat-btn cat-btn-manage" @click="manageCategory(cat)">
						<text class="cat-btn-text">管理</text>
					</view>
					<view v-if="cat.count === 0 && categories.length > 1" class="cat-btn cat-btn-del" @click="removeCategory(cat)">
						<text class="cat-btn-text">删</text>
					</view>
				</view>
			</view>

			<view class="add-cat-btn" @click="showAddCategory">
				<text class="add-cat-text">+ 新增分类</text>
			</view>
		</view>
	</view>
</template>

<script>
import { getCategories } from '@/data/word-service.js'
import {
	hasCustomWordData,
	getCustomWordData,
	saveCustomWordData,
	clearCustomWordData,
	parseImportText,
	generateExportText,
	generateTemplate,
	addCategory,
	deleteCategory,
	exportCategoryText
} from '@/data/custom-words.js'

export default {
	data() {
		return {
			isCustom: false,
			categoryCount: 0,
			totalWords: 0,
			categories: [],
			importText: '',
			preview: null,
			importErrors: null
		}
	},
	onShow() {
		this.refreshStatus()
	},
	methods: {
		refreshStatus() {
			this.isCustom = hasCustomWordData()
			const cats = getCategories()
			this.categories = cats
			this.categoryCount = cats.length
			let total = 0
			cats.forEach(c => { total += c.count })
			this.totalWords = total
		},
		previewImport() {
			if (!this.importText.trim()) {
				uni.showToast({ title: '请先粘贴词表内容', icon: 'none' })
				return
			}
			const result = parseImportText(this.importText)
			if (result.success) {
				this.preview = result
				this.importErrors = result.errors
			} else {
				this.preview = null
				this.importErrors = [result.error]
				uni.showToast({ title: result.error, icon: 'none' })
			}
		},
		confirmImport() {
			if (!this.importText.trim()) {
				uni.showToast({ title: '请先粘贴词表内容', icon: 'none' })
				return
			}
			const result = parseImportText(this.importText)
			if (!result.success) {
				uni.showToast({ title: result.error, icon: 'none' })
				return
			}
			uni.showModal({
				title: '确认替换词库',
				content: '将用 ' + result.totalWords + ' 个单词（' + result.categories.length + ' 个分类）替换当前词库。原有自定义词库将被覆盖，学习数据不受影响。是否继续？',
				success: (res) => {
					if (res.confirm) {
						saveCustomWordData(result.categories)
						this.importText = ''
						this.preview = null
						this.importErrors = null
						this.refreshStatus()
						uni.showToast({ title: '词库已导入', icon: 'success' })
					}
				}
			})
		},
		downloadTemplate() {
			const text = generateTemplate()
			this.downloadOrCopy(text, '词库导入模板.txt')
		},
		exportWordLib() {
			const data = getCustomWordData()
			if (!data) {
				uni.showToast({ title: '暂无自定义词库，请先导入', icon: 'none' })
				return
			}
			const text = generateExportText(data)
			this.downloadOrCopy(text, '轻松学英语词库导出.txt')
		},
		downloadOrCopy(text, filename) {
			// #ifdef H5
			if (typeof document !== 'undefined' && typeof Blob !== 'undefined') {
				const blob = new Blob([text], { type: 'text/plain;charset=utf-8' })
				const url = URL.createObjectURL(blob)
				const a = document.createElement('a')
				a.href = url
				a.download = filename
				document.body.appendChild(a)
				a.click()
				document.body.removeChild(a)
				URL.revokeObjectURL(url)
				uni.showToast({ title: '下载中…', icon: 'success' })
				return
			}
			// #endif
			uni.setClipboardData({
				data: text,
				success: () => {
					uni.showToast({ title: '已复制到剪贴板', icon: 'success' })
				},
				fail: () => {
					uni.showToast({ title: '复制失败，请重试', icon: 'none' })
				}
			})
		},
		restoreBuiltin() {
			uni.showModal({
				title: '确认恢复',
				content: '将删除自定义词库，恢复使用内置词库。是否继续？',
				success: (res) => {
					if (res.confirm) {
						clearCustomWordData()
						this.importText = ''
						this.preview = null
						this.importErrors = null
						this.refreshStatus()
						uni.showToast({ title: '已恢复内置词库', icon: 'success' })
					}
				}
			})
		},
		manageCategory(cat) {
			uni.navigateTo({
				url: '/pages/word-list/word-list?categoryId=' + cat.id + '&categoryName=' + encodeURIComponent(cat.category)
			})
		},
		exportCategory(cat) {
			const text = exportCategoryText(cat.id)
			if (!text) {
				uni.showToast({ title: '导出失败', icon: 'none' })
				return
			}
			this.downloadOrCopy(text, cat.category + '_导出.txt')
		},
		showAddCategory() {
			uni.showModal({
				title: '新增分类',
				content: '请输入分类名称',
				editable: true,
				placeholderText: '例如：医学英语',
				success: (res) => {
					if (res.confirm && res.content && res.content.trim()) {
						const name = res.content.trim()
						if (addCategory(name)) {
							this.refreshStatus()
							uni.showToast({ title: '分类已添加', icon: 'success' })
						} else {
							uni.showToast({ title: '分类已存在或添加失败', icon: 'none' })
						}
					}
				}
			})
		},
		removeCategory(cat) {
			uni.showModal({
				title: '删除分类',
				content: '确定要删除分类「' + cat.category + '」吗？此操作不可恢复。',
				success: (res) => {
					if (res.confirm) {
						if (deleteCategory(cat.id)) {
							this.refreshStatus()
							uni.showToast({ title: '已删除', icon: 'success' })
						} else {
							uni.showToast({ title: '删除失败', icon: 'none' })
						}
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

.status-card {
	background: #ffffff;
	border-radius: 36rpx;
	border: 1rpx solid #B0BEC5;
	padding: 32rpx 40rpx;
	margin-bottom: 32rpx;
	display: flex;
	flex-direction: column;
}
.status-label {
	font-size: 28rpx;
	color: #263238;
	font-weight: 600;
}
.status-detail {
	font-size: 24rpx;
	color: #78909C;
	margin-top: 12rpx;
}

.section-head {
	font-size: 30rpx;
	font-weight: 600;
	color: #263238;
	margin-bottom: 20rpx;
	margin-top: 40rpx;
	display: block;
}

.action-btn {
	padding: 28rpx 0;
	border-radius: 9999rpx;
	text-align: center;
	margin-bottom: 20rpx;
}
.btn-text {
	font-size: 28rpx;
	font-weight: 600;
	color: #fff;
}

.template-btn {
	background: #42A5F5;
}

.import-card {
	background: #ffffff;
	border-radius: 36rpx;
	border: 1rpx solid #B0BEC5;
	padding: 24rpx 32rpx;
	margin-bottom: 20rpx;
}
.import-textarea {
	width: 100%;
	min-height: 240rpx;
	font-size: 26rpx;
	color: #263238;
	line-height: 1.6;
	padding: 16rpx;
	background: #FFF9E6;
	border-radius: 16rpx;
}
.preview-bar {
	margin-top: 20rpx;
	padding: 20rpx;
	background: #E8F5E9;
	border-radius: 16rpx;
}
.preview-info {
	font-size: 26rpx;
	color: #2E7D32;
	font-weight: 600;
}
.preview-cats {
	display: flex;
	flex-wrap: wrap;
	margin-top: 12rpx;
}
.preview-cat-tag {
	font-size: 22rpx;
	background: #C8E6C9;
	color: #2E7D32;
	padding: 6rpx 16rpx;
	border-radius: 9999rpx;
	margin-right: 12rpx;
	margin-bottom: 8rpx;
}

.error-bar {
	margin-top: 20rpx;
	padding: 20rpx;
	background: #FFF3E0;
	border-radius: 16rpx;
}
.error-text {
	font-size: 22rpx;
	color: #E65100;
	display: block;
	line-height: 1.6;
}

.import-btn-wrap {
	display: flex;
	gap: 16rpx;
	margin-top: 24rpx;
}
.preview-btn {
	flex: 1;
	background: #78909C;
	padding: 24rpx 0;
	margin-bottom: 0;
}
.confirm-btn {
	flex: 2;
	background: #FF7043;
	padding: 24rpx 0;
	margin-bottom: 0;
}

.export-btn {
	background: #4CAF50;
	margin-top: 32rpx;
}

.restore-btn {
	background: #EF5350;
	margin-top: 32rpx;
}

.category-list {
	background: #ffffff;
	border-radius: 36rpx;
	border: 1rpx solid #B0BEC5;
	padding: 8rpx 0;
	overflow: hidden;
}

.cat-row {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 24rpx 32rpx;
	border-bottom: 1rpx solid #CFD8DC;
}
.cat-row:last-of-type {
	border-bottom: none;
}
.cat-info {
	display: flex;
	align-items: center;
	flex: 1;
}
.cat-icon {
	font-size: 40rpx;
	margin-right: 20rpx;
}
.cat-meta {
	display: flex;
	flex-direction: column;
}
.cat-name {
	font-size: 28rpx;
	color: #263238;
	font-weight: 600;
}
.cat-word-count {
	font-size: 22rpx;
	color: #78909C;
	margin-top: 4rpx;
}
.cat-actions {
	display: flex;
	gap: 12rpx;
}
.cat-btn {
	padding: 12rpx 24rpx;
	border-radius: 9999rpx;
	background: #42A5F5;
}
.cat-btn-text {
	font-size: 24rpx;
	color: #fff;
	font-weight: 600;
}
.cat-btn-manage {
	background: #FF7043;
}
.cat-btn-del {
	background: #EF5350;
}

.add-cat-btn {
	padding: 28rpx 32rpx;
	text-align: center;
}
.add-cat-text {
	font-size: 28rpx;
	color: #42A5F5;
	font-weight: 600;
}
</style>
