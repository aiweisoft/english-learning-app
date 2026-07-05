const fs = require('fs')
const s = fs.readFileSync('D:/Users/Administrator/Documents/HBuilderProjects/English/data/words.js','utf-8')
const start = s.indexOf('const dailySentences')
const end = s.indexOf(']', start)
const arr = s.slice(start, end + 1)
const count = arr.split('"en"').length - 1
console.log('Daily sentences count:', count)
