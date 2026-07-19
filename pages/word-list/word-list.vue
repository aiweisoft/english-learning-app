<template>
	<view class="container">
		<view class="header-bar">
			<view class="header-left">
				<text class="back-btn" @click="goBack">‹ 返回</text>
			</view>
			<text class="header-title">{{ categoryName }}</text>
			<text class="header-count">{{ words.length }} 词</text>
		</view>

		<view class="top-actions">
			<view class="top-btn top-btn-add" @click="toggleAddForm">
				<text class="top-btn-text">{{ showAddForm ? '收起' : '添加单词' }}</text>
			</view>
			<view class="top-btn top-btn-import" @click="toggleImportForm">
				<text class="top-btn-text">{{ showImportForm ? '收起' : '导入' }}</text>
			</view>
			<view class="top-btn top-btn-export" @click="exportCurrentCategory">
				<text class="top-btn-text">导出</text>
			</view>
		</view>

		<view v-if="showAddForm" class="add-form">
			<view class="form-row">
				<input class="form-input" v-model="newEn" placeholder="英文单词" />
				<input class="form-input" v-model="newZh" placeholder="中文释义" />
				<input class="form-input form-input-short" v-model="newType" placeholder="词性" />
			</view>
			<view class="form-btns">
				<view class="form-btn form-btn-cancel" @click="cancelAdd">
					<text class="form-btn-text">取消</text>
				</view>
				<view class="form-btn form-btn-confirm" @click="confirmAddWord">
					<text class="form-btn-text">确认添加</text>
				</view>
			</view>
		</view>

		<view v-if="showImportForm" class="import-form">
			<textarea
				class="import-textarea"
				v-model="importText"
				placeholder="粘贴词表内容（英文|中文|词性）每行一词"
				:maxlength="20000"
			/>
			<view class="import-actions">
				<view class="form-btn form-btn-cancel" @click="cancelImport">
					<text class="form-btn-text">取消</text>
				</view>
				<view class="form-btn form-btn-confirm" @click="promptImportMode">
					<text class="form-btn-text">确认导入</text>
				</view>
			</view>
		</view>

		<view class="select-bar">
			<view class="select-left">
				<view class="select-check" @click="toggleAll">
					<text class="check-mark">{{ allSelected ? '☑' : '☐' }}</text>
					<text class="check-label">{{ allSelected ? '取消全选' : '全选' }}</text>
				</view>
			</view>
		</view>

		<scroll-view class="word-scroll" scroll-y>
			<view
				v-for="word in words"
				:key="word.id"
				class="word-row"
				@click="toggleWord(word.id)"
			>
				<text class="word-check">{{ selectedIds.indexOf(word.id) !== -1 ? '☑' : '☐' }}</text>
				<view class="word-info">
					<text class="word-en">{{ word.en }}</text>
					<text class="word-zh">{{ word.zh }}</text>
				</view>
			</view>
			<view v-if="words.length === 0" class="empty-hint">
				<text>该分类暂无单词</text>
			</view>
		</scroll-view>

		<view v-if="selectedIds.length > 0" class="bottom-bar">
			<text class="selected-count">已选 {{ selectedIds.length }} 个</text>
			<view class="delete-btn" @click="confirmBatchDelete">
				<text class="delete-btn-text">批量删除</text>
			</view>
		</view>
	</view>
</template>

<script>
import { getWordsByCategory } from '@/data/word-service.js'
import {
	addWordToCategory,
	deleteWordsFromCategory,
	importToCategory,
	exportCategoryText
} from '@/data/custom-words.js'

export default {
	data() {
		return {
			categoryId: 0,
			categoryName: '',
			words: [],
			selectedIds: [],
			showAddForm: false,
			showImportForm: false,
			newEn: '',
			newZh: '',
			newType: '',
			importText: ''
		}
	},
	computed: {
		allSelected() {
			return this.words.length > 0 && this.selectedIds.length === this.words.length
		}
	},
	onLoad(options) {
		this.categoryId = parseInt(options.categoryId) || 0
		this.categoryName = decodeURIComponent(options.categoryName || '')
		this.loadWords()
	},
	onShow() {
		this.loadWords()
	},
	methods: {
		loadWords() {
			this.words = getWordsByCategory(this.categoryId)
		},
		toggleWord(id) {
			const idx = this.selectedIds.indexOf(id)
			if (idx === -1) {
				this.selectedIds.push(id)
			} else {
				this.selectedIds.splice(idx, 1)
			}
		},
		toggleAll() {
			if (this.allSelected) {
				this.selectedIds = []
			} else {
				this.selectedIds = this.words.map(w => w.id)
			}
		},
		toggleAddForm() {
			this.showAddForm = !this.showAddForm
			this.showImportForm = false
			this.newEn = ''
			this.newZh = ''
			this.newType = ''
		},
		cancelAdd() {
			this.showAddForm = false
			this.newEn = ''
			this.newZh = ''
			this.newType = ''
		},
		confirmAddWord() {
			const en = this.newEn.trim()
			const zh = this.newZh.trim()
			if (!en || !zh) {
				uni.showToast({ title: '英文和中文不能为空', icon: 'none' })
				return
			}
			const type = this.newType.trim()
			if (addWordToCategory(this.categoryId, en, zh, type)) {
				uni.showToast({ title: '添加成功', icon: 'success' })
				this.cancelAdd()
				this.loadWords()
			} else {
				uni.showToast({ title: '单词已存在或添加失败', icon: 'none' })
			}
		},
		toggleImportForm() {
			this.showImportForm = !this.showImportForm
			this.showAddForm = false
			this.importText = ''
		},
		cancelImport() {
			this.showImportForm = false
			this.importText = ''
		},
		promptImportMode() {
			if (!this.importText.trim()) {
				uni.showToast({ title: '请先粘贴词表内容', icon: 'none' })
				return
			}
			uni.showActionSheet({
				itemList: ['追加合并（保留旧词，新增不重复的词）', '替换覆盖（清空旧词，仅保留导入内容）'],
				success: (res) => {
					const mode = res.tapIndex === 0 ? 'append' : 'replace'
					const result = importToCategory(this.categoryId, this.importText, mode)
					if (result.success) {
						uni.showToast({
							title: mode === 'append' ? '已追加 ' + result.totalWords + ' 词' : '已替换为 ' + result.totalWords + ' 词',
							icon: 'success'
						})
						this.cancelImport()
						this.loadWords()
						this.selectedIds = []
					} else {
						uni.showToast({ title: result.error || '导入失败', icon: 'none' })
					}
				}
			})
		},
		exportCurrentCategory() {
			const text = exportCategoryText(this.categoryId)
			if (!text) {
				uni.showToast({ title: '导出失败', icon: 'none' })
				return
			}
			// #ifdef H5
			if (typeof document !== 'undefined' && typeof Blob !== 'undefined') {
				const blob = new Blob([text], { type: 'text/plain;charset=utf-8' })
				const url = URL.createObjectURL(blob)
				const a = document.createElement('a')
				a.href = url
				a.download = this.categoryName + '_导出.txt'
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
					uni.showToast({ title: '复制失败', icon: 'none' })
				}
			})
		},
		confirmBatchDelete() {
			uni.showModal({
				title: '确认删除',
				content: '将删除选中的 ' + this.selectedIds.length + ' 个单词，此操作不可恢复。是否继续？',
				success: (res) => {
					if (res.confirm) {
						const removed = deleteWordsFromCategory(this.categoryId, this.selectedIds)
						if (removed > 0) {
							uni.showToast({ title: '已删除 ' + removed + ' 个单词', icon: 'success' })
							this.selectedIds = []
							this.loadWords()
						} else {
							uni.showToast({ title: '删除失败', icon: 'none' })
						}
					}
				}
			})
		},
		goBack() {
			uni.navigateBack()
		}
	}
}
</script>

<style scoped>
.container {
	padding: 32rpx 32rpx;
	padding-bottom: 0;
	display: flex;
	flex-direction: column;
	height: 100vh;
}

.header-bar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 24rpx;
}
.header-left {
	flex: 1;
}
.back-btn {
	font-size: 28rpx;
	color: #42A5F5;
	font-weight: 600;
}
.header-title {
	font-size: 34rpx;
	color: #263238;
	font-weight: 600;
	flex: 1;
	text-align: center;
}
.header-count {
	font-size: 24rpx;
	color: #78909C;
	flex: 1;
	text-align: right;
}

.top-actions {
	display: flex;
	gap: 16rpx;
	margin-bottom: 20rpx;
}
.top-btn {
	flex: 1;
	padding: 20rpx 0;
	border-radius: 9999rpx;
	text-align: center;
}
.top-btn-text {
	font-size: 26rpx;
	color: #fff;
	font-weight: 600;
}
.top-btn-add {
	background: #4CAF50;
}
.top-btn-import {
	background: #42A5F5;
}
.top-btn-export {
	background: #78909C;
}

.add-form {
	background: #ffffff;
	border-radius: 24rpx;
	border: 1rpx solid #B0BEC5;
	padding: 24rpx;
	margin-bottom: 20rpx;
}
.form-row {
	display: flex;
	gap: 12rpx;
	margin-bottom: 20rpx;
}
.form-input {
	flex: 1;
	border: 1rpx solid #CFD8DC;
	border-radius: 16rpx;
	padding: 16rpx 20rpx;
	font-size: 26rpx;
	color: #263238;
	background: #FFF9E6;
}
.form-input-short {
	flex: none;
	width: 100rpx;
}
.form-btns {
	display: flex;
	gap: 16rpx;
}
.form-btn {
	flex: 1;
	padding: 20rpx 0;
	border-radius: 9999rpx;
	text-align: center;
}
.form-btn-text {
	font-size: 26rpx;
	font-weight: 600;
}
.form-btn-cancel {
	background: #CFD8DC;
}
.form-btn-cancel .form-btn-text {
	color: #78909C;
}
.form-btn-confirm {
	background: #FF7043;
}
.form-btn-confirm .form-btn-text {
	color: #fff;
}

.import-form {
	background: #ffffff;
	border-radius: 24rpx;
	border: 1rpx solid #B0BEC5;
	padding: 24rpx;
	margin-bottom: 20rpx;
}
.import-textarea {
	width: 100%;
	min-height: 180rpx;
	font-size: 26rpx;
	color: #263238;
	line-height: 1.6;
	padding: 16rpx;
	background: #FFF9E6;
	border-radius: 16rpx;
	margin-bottom: 20rpx;
}
.import-actions {
	display: flex;
	gap: 16rpx;
}

.select-bar {
	margin-bottom: 16rpx;
}
.select-check {
	display: flex;
	align-items: center;
}
.check-mark {
	font-size: 36rpx;
	margin-right: 12rpx;
}
.check-label {
	font-size: 26rpx;
	color: #42A5F5;
	font-weight: 600;
}

.word-scroll {
	flex: 1;
	margin-bottom: 16rpx;
}
.word-row {
	display: flex;
	align-items: center;
	background: #ffffff;
	border-radius: 20rpx;
	border: 1rpx solid #B0BEC5;
	padding: 24rpx 24rpx;
	margin-bottom: 12rpx;
}
.word-check {
	font-size: 36rpx;
	margin-right: 20rpx;
}
.word-info {
	display: flex;
	flex-direction: column;
	flex: 1;
}
.word-en {
	font-size: 30rpx;
	color: #263238;
	font-weight: 600;
}
.word-zh {
	font-size: 24rpx;
	color: #78909C;
	margin-top: 6rpx;
}
.empty-hint {
	text-align: center;
	padding: 80rpx 0;
	font-size: 28rpx;
	color: #78909C;
}

.bottom-bar {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background: #ffffff;
	border-top: 1rpx solid #CFD8DC;
	padding: 20rpx 32rpx;
	padding-bottom: calc(20rpx + env(safe-area-inset-bottom));
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.selected-count {
	font-size: 26rpx;
	color: #78909C;
}
.delete-btn {
	background: #EF5350;
	padding: 16rpx 40rpx;
	border-radius: 9999rpx;
}
.delete-btn-text {
	font-size: 26rpx;
	color: #fff;
	font-weight: 600;
}
</style>
