import * as builtin from './words.js'
import { hasCustomWordData, getCustomWordData } from './custom-words.js'

function getActiveData() {
	if (hasCustomWordData()) {
		return getCustomWordData() || builtin.wordData
	}
	return builtin.wordData
}

function getAllWords() {
	const data = getActiveData()
	const allWords = []
	data.forEach(category => {
		category.words.forEach(word => {
			allWords.push({ ...word, category: category.category })
		})
	})
	return allWords
}

function getCategories() {
	const data = getActiveData()
	return data.map(cat => ({
		id: cat.id,
		category: cat.category,
		icon: cat.icon,
		count: cat.words.length
	}))
}

function getWordsByCategory(categoryId) {
	const data = getActiveData()
	const category = data.find(cat => cat.id === categoryId)
	return category ? category.words.map(w => ({ ...w, category: category.category })) : []
}

function getGroupCount(categoryId, size) {
	size = size || 10
	const words = getWordsByCategory(categoryId)
	return Math.ceil(words.length / size)
}

function getWordsByGroup(categoryId, group, size) {
	size = size || 10
	const words = getWordsByCategory(categoryId)
	const start = group * size
	return words.slice(start, start + size)
}

function generateQuiz(categoryId, count) {
	count = count || 10
	let pool = []
	if (categoryId) {
		pool = getWordsByCategory(categoryId)
	} else {
		pool = getAllWords()
	}
	const shuffled = pool.sort(function () { return Math.random() - 0.5 })
	const selected = shuffled.slice(0, Math.min(count, shuffled.length))
	const allWords = getAllWords()

	return selected.map(function (word) {
		var options = [word.zh]
		var others = allWords.filter(function (w) { return w.id !== word.id && w.zh !== word.zh })
		while (options.length < 4 && options.length < others.length + 1) {
			var randomOther = others[Math.floor(Math.random() * others.length)]
			if (options.indexOf(randomOther.zh) === -1) {
				options.push(randomOther.zh)
			}
		}
		options = options.sort(function () { return Math.random() - 0.5 })
		return {
			id: word.id,
			en: word.en,
			correct: word.zh,
			options: options
		}
	})
}

function generateQuizByWords(wordIds, categoryId) {
	const pool = categoryId ? getWordsByCategory(categoryId) : getAllWords()
	const selected = wordIds.map(function (id) { return pool.find(function (w) { return w.id === id }) }).filter(Boolean)
	if (selected.length === 0) return []
	const allWords = getAllWords()

	return selected.map(function (word) {
		var options = [word.zh]
		var others = allWords.filter(function (w) { return w.id !== word.id && w.zh !== word.zh })
		while (options.length < 4 && options.length < others.length + 1) {
			var randomOther = others[Math.floor(Math.random() * others.length)]
			if (options.indexOf(randomOther.zh) === -1) {
				options.push(randomOther.zh)
			}
		}
		options = options.sort(function () { return Math.random() - 0.5 })
		return {
			id: word.id,
			en: word.en,
			correct: word.zh,
			options: options
		}
	})
}

function generateSpellQuiz(categoryId, count) {
	count = count || 10
	let pool = []
	if (categoryId) {
		pool = getWordsByCategory(categoryId)
	} else {
		pool = getAllWords()
	}
	const shuffled = pool.sort(function () { return Math.random() - 0.5 })
	return shuffled.slice(0, Math.min(count, shuffled.length)).map(function (w) {
		return {
			id: w.id,
			en: w.en,
			zh: w.zh,
			phonetic: w.phonetic || ''
		}
	})
}

function generateSpellQuizByWords(wordIds, categoryId) {
	const pool = categoryId ? getWordsByCategory(categoryId) : getAllWords()
	return wordIds.map(function (id) {
		var w = pool.find(function (word) { return word.id === id })
		return w ? { id: w.id, en: w.en, zh: w.zh, phonetic: w.phonetic || '' } : null
	}).filter(Boolean)
}

const getRandomSentence = builtin.getRandomSentence
const getAllSentences = builtin.getAllSentences

export {
	getAllWords,
	getCategories,
	getWordsByCategory,
	getGroupCount,
	getWordsByGroup,
	getRandomSentence,
	getAllSentences,
	generateQuiz,
	generateQuizByWords,
	generateSpellQuiz,
	generateSpellQuizByWords
}
