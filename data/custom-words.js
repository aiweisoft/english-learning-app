import { wordData as builtinWordData } from './words.js'

const CUSTOM_DATA_KEY = 'customWordData'

const nounExamples = [
	['This is an important {word}.', '这是一个重要的{zh}。'],
	['I really like the {word}.', '我真的很喜欢这个{zh}。'],
	['The {word} is very useful.', '{zh}非常有用。'],
	['Do you understand this {word}?', '你理解这个{zh}吗？'],
	['{word} plays a key role in our life.', '{zh}在我们的生活中起着关键作用。']
]

const verbExamples = [
	['We should {word} more carefully.', '我们应该更仔细地{zh}。'],
	['She wants to {word} this task.', '她想{zh}这个任务。'],
	['Let\'s {word} together.', '让我们一起{zh}吧。'],
	['They decided to {word} the plan.', '他们决定{zh}这个计划。'],
	['I need to {word} before the deadline.', '我需要在截止日期前{zh}。']
]

const adjExamples = [
	['This is very {word}.', '这非常{zh}。'],
	['She looks {word} today.', '她今天看起来很{zh}。'],
	['It\'s a {word} idea.', '这是一个{zh}的主意。'],
	['The result is quite {word}.', '结果是相当{zh}的。'],
	['He found the task {word}.', '他发现这个任务是{zh}的。']
]

const advExamples = [
	['He spoke {word} to the audience.', '他{zh}地对观众说话。'],
	['She {word} agreed with us.', '她{zh}地同意了我们的意见。'],
	['They worked {word} on the project.', '他们{zh}地在这个项目上工作。']
]

const defaultExamples = [
	['Let\'s talk about {word}.', '让我们来谈谈{zh}吧。'],
	['I think {word} is important.', '我认为{zh}很重要。']
]

function generatePhonetic(word) {
	const rules = [
		[/tion$/, '/ʃən/'], [/(t|s)sion$/, '/ʃən/'], [/sion$/, '/ʒən/'],
		[/cious$/, '/ʃəs/'], [/tious$/, '/ʃəs/'],
		[/ture$/, '/tʃər/'], [/sure$/, '/ʒər/'], [/dure$/, '/dʒər/'],
		[/tial$/, '/ʃəl/'], [/cial$/, '/ʃəl/'], [/sial$/, '/ʒəl/'],
		[/ough$/, '/ʌf/'], [/augh$/, '/ɔː/'], [/ight$/, '/aɪt/'],
		[/tion/, '/ʃən/'], [/sion/, '/ʒən/'], [/ment/, '/mənt/'],
		[/ence/, '/əns/'], [/ance/, '/əns/'], [/able/, '/əbəl/'],
		[/ible/, '/ɪbəl/'], [/ious/, '/iəs/'], [/eous/, '/iəs/'],
		[/ous$/, '/əs/'], [/ed$/, '/d/'], [/ing$/, '/ɪŋ/'],
		[/ly$/, '/li/'], [/ness$/, '/nəs/'], [/ful$/, '/fəl/'],
		[/less$/, '/ləs/'], [/er$/, '/ər/'], [/or$/, '/ər/'],
		[/ar$/, '/ɑːr/'], [/ee$/, '/iː/'], [/oo$/, '/uː/'],
		[/ea$/, '/iː/'], [/sh$/, '/ʃ/'], [/ch$/, '/tʃ/'],
		[/th$/, '/θ/'], [/ph$/, '/f/'], [/gh$/, '/f/'],
		[/ck$/, '/k/'], [/qu/, '/kw/'], [/wh/, '/w/'],
		[/wr/, '/r/'], [/ee/, '/iː/'], [/ea/, '/iː/'],
		[/oo/, '/uː/'], [/ai/, '/eɪ/'], [/ay/, '/eɪ/'],
		[/oa/, '/oʊ/'], [/ow/, '/aʊ/'], [/ou/, '/aʊ/'],
		[/oi/, '/ɔɪ/'], [/oy/, '/ɔɪ/'], [/au/, '/ɔː/'],
		[/aw/, '/ɔː/']
	]
	const lower = word.toLowerCase()
	for (const [pattern, replacement] of rules) {
		if (pattern.test(lower)) return replacement
	}
	return '/.../'
}

function getExamples(type) {
	if (type === 'n') return nounExamples
	if (type === 'v') return verbExamples
	if (type === 'a' || type === 'adj') return adjExamples
	if (type === 'adv') return advExamples
	return defaultExamples
}

function hasCustomWordData() {
	const raw = uni.getStorageSync(CUSTOM_DATA_KEY)
	return !!raw
}

function getCustomWordData() {
	const raw = uni.getStorageSync(CUSTOM_DATA_KEY)
	if (!raw) return null
	try {
		return JSON.parse(raw)
	} catch (e) {
		return null
	}
}

function saveCustomWordData(data) {
	uni.setStorageSync(CUSTOM_DATA_KEY, JSON.stringify(data))
}

function clearCustomWordData() {
	uni.removeStorageSync(CUSTOM_DATA_KEY)
}

function parseImportText(text) {
	if (!text || !text.trim()) return { success: false, categories: [], totalWords: 0, error: '文本为空' }

	const lines = text.split(/\r?\n/).filter(line => {
		const trimmed = line.trim()
		return trimmed && !trimmed.startsWith('#')
	})

	if (lines.length === 0) return { success: false, categories: [], totalWords: 0, error: '未识别到有效单词行' }

	const categoryMap = new Map()
	const seen = new Set()
	let nextId = 9001
	const errors = []

	lines.forEach((line, idx) => {
		const parts = line.split('|')
		if (parts.length < 2) {
			errors.push(`第 ${idx + 1} 行格式错误（至少需要 英文|中文）：${line}`)
			return
		}

		const en = parts[0].trim()
		const zh = parts[1].trim()
		const type = parts[2] ? parts[2].trim().split(';')[0] : ''
		const catName = parts[3] ? parts[3].trim() : '自定义词库'

		if (!en || !zh) {
			errors.push(`第 ${idx + 1} 行内容不完整：${line}`)
			return
		}

		const key = en.toLowerCase()
		if (seen.has(key)) return
		seen.add(key)

		if (!categoryMap.has(catName)) {
			categoryMap.set(catName, { name: catName, words: [], icon: getIcon(catName) })
		}

		const phonetic = generatePhonetic(en)
		const examples = getExamples(type)
		const [exampleEn, exampleZh] = examples[idx % examples.length]

		categoryMap.get(catName).words.push({
			id: nextId++,
			en: en,
			zh: zh,
			phonetic: phonetic,
			example: exampleEn.replace('{word}', en).replace('{zh}', zh),
			exampleZh: exampleZh.replace('{word}', en).replace('{zh}', zh)
		})
	})

	if (categoryMap.size === 0) {
		return { success: false, categories: [], totalWords: 0, error: '解析后无有效单词' }
	}

	const categories = []
	let catId = 1
	for (const [name, info] of categoryMap) {
		categories.push({
			id: catId++,
			category: name,
			icon: info.icon,
			words: info.words
		})
	}

	return {
		success: true,
		categories: categories,
		totalWords: Array.from(categoryMap.values()).reduce((sum, c) => sum + c.words.length, 0),
		errors: errors.length > 0 ? errors : null
	}
}

function getIcon(categoryName) {
	const iconMap = {
		'小学': '🏫', '初中': '📚', '高中': '🎓',
		'大学': '🏛️', '四级': '📝', '六级': '🏆',
		'考研': '📖', '雅思': '🌍', '托福': '✈️',
		'商务': '💼', '日常': '🗣️', '餐饮': '🍽️',
		'水果': '🍎', '动物': '🐾', '颜色': '🎨',
		'数字': '🔢', '身体': '💪', '家庭': '👨‍👩‍👧',
		'旅行': '✈️', '医学': '🏥', '法律': '⚖️',
		'科技': '💻', '音乐': '🎵', '运动': '⚽'
	}
	for (const [key, icon] of Object.entries(iconMap)) {
		if (categoryName.includes(key)) return icon
	}
	return '📝'
}

function generateExportText(data) {
	const lines = ['# 轻松学英语 - 词库导出']
	lines.push('# 格式：英文单词|中文释义|词性|分类名称')
	lines.push('# 导出时间：' + new Date().toLocaleString())
	lines.push('')

	for (const cat of data) {
		lines.push('# ' + cat.category + ' (共 ' + cat.words.length + ' 词)')
		for (const w of cat.words) {
			lines.push(w.en + '|' + w.zh + '|' + '|' + cat.category)
		}
		lines.push('')
	}

	return lines.join('\n')
}

function generateTemplate() {
	const lines = [
		'# 轻松学英语 - 词库导入模板',
		'# 格式：英文单词|中文释义|词性(可选)|分类名称(可选)',
		'# 词性代码：n=名词 v=动词 a/adj=形容词 adv=副词 prep=介词 conj=连词 pron=代词 num=数词 interj=感叹词 art=冠词',
		'# 以 # 开头的行为注释，空行会被跳过',
		'# 未指定分类的单词将归入 "自定义词库"',
		'#',
		'# 示例：',
		'apple|苹果|n|水果',
		'beautiful|美丽的|a|',
		'run|跑步;运行|v|',
		'book|书;预订|n;v|日常',
		'sunshine|阳光|n|自然',
		'brilliant|杰出的;明亮的|a|',
		'#',
		'# 请在下方按格式输入你的单词：'
	].join('\n')

	return lines
}

function ensureCustomData() {
	if (hasCustomWordData()) return
	const data = JSON.parse(JSON.stringify(builtinWordData))
	saveCustomWordData(data)
}

function getMaxWordId(data) {
	let maxId = 9000
	for (const cat of data) {
		for (const w of cat.words) {
			if (w.id > maxId) maxId = w.id
		}
	}
	return maxId
}

function addWordToCategory(catId, en, zh, type) {
	ensureCustomData()
	const data = getCustomWordData()
	if (!data) return false
	const cat = data.find(c => c.id === catId)
	if (!cat) return false

	const existingKey = en.toLowerCase()
	const dup = cat.words.find(w => w.en.toLowerCase() === existingKey)
	if (dup) return false

	const newId = getMaxWordId(data) + 1
	const phonetic = generatePhonetic(en)
	const examples = getExamples(type)
	const idx = cat.words.length
	const [exampleEn, exampleZh] = examples[idx % examples.length]

	cat.words.push({
		id: newId,
		en: en,
		zh: zh,
		phonetic: phonetic,
		example: exampleEn.replace('{word}', en).replace('{zh}', zh),
		exampleZh: exampleZh.replace('{word}', en).replace('{zh}', zh)
	})

	saveCustomWordData(data)
	return true
}

function deleteWordsFromCategory(catId, wordIds) {
	ensureCustomData()
	const data = getCustomWordData()
	if (!data) return 0
	const cat = data.find(c => c.id === catId)
	if (!cat) return 0
	const before = cat.words.length
	cat.words = cat.words.filter(w => !wordIds.includes(w.id))
	const removed = before - cat.words.length
	saveCustomWordData(data)
	return removed
}

function importToCategory(catId, text, mode) {
	ensureCustomData()
	const data = getCustomWordData()
	if (!data) return { success: false, error: '词库数据异常' }

	const cat = data.find(c => c.id === catId)
	if (!cat) return { success: false, error: '分类不存在' }

	const result = parseImportText(text)
	if (!result.success) return result

	const incomingWords = []
	for (const icat of result.categories) {
		incomingWords.push(...icat.words)
	}

	if (mode === 'replace') {
		cat.words = incomingWords
		saveCustomWordData(data)
		return { success: true, totalWords: incomingWords.length, mode: 'replace' }
	}

	const existingKeys = new Set(cat.words.map(w => w.en.toLowerCase()))
	let nextId = getMaxWordId(data) + 1
	let added = 0

	for (const w of incomingWords) {
		const key = w.en.toLowerCase()
		if (existingKeys.has(key)) continue
		existingKeys.add(key)
		cat.words.push({ ...w, id: nextId++ })
		added++
	}

	saveCustomWordData(data)
	return { success: true, totalWords: added, mode: 'append' }
}

function exportCategoryText(catId) {
	const data = getCustomWordData()
	if (!data) {
		ensureCustomData()
		const d2 = getCustomWordData()
		if (!d2) return ''
		const cat = d2.find(c => c.id === catId)
		if (!cat) return ''
		const lines = ['# ' + cat.category + ' (共 ' + cat.words.length + ' 词)']
		lines.push('# 格式：英文单词|中文释义|词性|分类名称')
		lines.push('')
		for (const w of cat.words) {
			lines.push(w.en + '|' + w.zh + '|' + '|' + cat.category)
		}
		return lines.join('\n')
	}
	const cat = data.find(c => c.id === catId)
	if (!cat) return ''
	const lines = ['# ' + cat.category + ' (共 ' + cat.words.length + ' 词)']
	lines.push('# 格式：英文单词|中文释义|词性|分类名称')
	lines.push('')
	for (const w of cat.words) {
		lines.push(w.en + '|' + w.zh + '|' + '|' + cat.category)
	}
	return lines.join('\n')
}

function addCategory(name, icon) {
	ensureCustomData()
	const data = getCustomWordData()
	if (!data) return false
	const existing = data.find(c => c.category === name)
	if (existing) return false
	const maxCatId = data.reduce((max, c) => Math.max(max, c.id), 0)
	data.push({
		id: maxCatId + 1,
		category: name,
		icon: icon || getIcon(name),
		words: []
	})
	saveCustomWordData(data)
	return true
}

function deleteCategory(catId) {
	ensureCustomData()
	const data = getCustomWordData()
	if (!data || data.length <= 1) return false
	const idx = data.findIndex(c => c.id === catId)
	if (idx === -1) return false
	data.splice(idx, 1)
	saveCustomWordData(data)
	return true
}

export {
	hasCustomWordData,
	getCustomWordData,
	saveCustomWordData,
	clearCustomWordData,
	parseImportText,
	generateExportText,
	generateTemplate,
	ensureCustomData,
	addWordToCategory,
	deleteWordsFromCategory,
	importToCategory,
	exportCategoryText,
	addCategory,
	deleteCategory
}
