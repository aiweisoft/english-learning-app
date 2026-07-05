# AGENTS.md

## 项目概述

"轻松学英语"是基于 **uni-app (Vue 3)** 的英语单词学习应用。纯前端，`uni.storage` 持久化，无后端，无 `package.json`。

## 项目结构

```
English/
├── App.vue                           # 根组件 + 全局样式（背景 #FFF9E6）
├── main.js                           # 入口（Vue 3）
├── index.html                        # H5 入口（Vite SPA 壳）
├── manifest.json                     # uni-app 清单（vueVersion: "3"）
├── pages.json                        # 路由：4 Tab + 4 子页面
├── .editorconfig                     # Tab 缩进、UTF-8、LF
├── data/
│   ├── words.js                      # 核心数据（8941词×6分类、100条名言、测验生成）
│   ├── generate-words.js             # 词库生成器脚本
│   ├── gen-png-icons.js              # Tab 图标 PNG 生成器
│   └── *-words*.txt                  # 词源文本文件
├── pages/
│   ├── index/index.vue               # 首页：每日一句(100条可翻页)、分类网格、快捷入口
│   ├── vocabulary/vocabulary.vue     # 单词本：分类列表 + 3D 闪卡(带拼读)
│   ├── practice/practice.vue         # 练习：选择题/拼写测试入口 + 历史成绩
│   ├── quiz/quiz.vue                 # 选择题测验（支持分组/随机）
│   ├── spell/spell.vue               # 拼写测试（看中文写英文，带拼读）
│   ├── word-detail/word-detail.vue   # 分组学习（10词/组、进度追踪、选择/拼写测试）
│   ├── result/result.vue             # 独立结果页
│   └── profile/profile.vue           # 我的：统计、打卡、重置
└── static/
    └── tab/                          # 底栏图标（PNG + SVG，各态 4 个）
```

## 构建 / 运行 / 测试

### 运行
- **HBuilderX IDE**：点击"运行" → 选择目标平台（H5 / 微信小程序 / App）
- **H5 指定启动页**：URL 参数 `?page=pages/quiz/quiz`
- **HBuilderX CLI**：`D:\HBuilderX.5.01.2026021122-alpha\HBuilderX\cli.exe`
- **开发服务器**：HBuilderX 内置 Vite，入口 `index.html` → `/main.js`

### 测试
- **无自动化测试**，依赖 IDE 模拟器 / 浏览器手动验证

### Lint / 格式化
- 无 ESLint / Prettier，遵循 `.editorconfig`
- HBuilderX 内置格式化：`Ctrl+Shift+F`

## 代码风格

### 技术栈
- **Vue 3 + Options API**（不用 Composition API）
- 所有 `.vue` 组件使用 `<style scoped>` + 纯 CSS
- 无第三方 npm 依赖

### 组件结构顺序
```vue
<template><!-- 模板 --></template>
<script>
export default {
  data() { return { ... } },
  computed: { ... },
  methods: { ... },
  onLoad(options) { ... },
  onShow() { ... }
}
</script>
<style scoped>/* 样式 */</style>
```

### Imports
- uni API（`uni.navigateTo`、`uni.getStorageSync` 等）全局可用，无需导入
- 数据层通过 ES module 导出：`import { fn } from '@/data/words.js'`
- `@/` 别名指向项目根目录

### 命名规范
| 类别 | 风格 | 示例 |
|------|------|------|
| 文件 | kebab-case | `word-detail.vue`、`words.js` |
| CSS 类名 | kebab-case | `daily-card`、`quiz-progress-bar` |
| CSS 状态 | 语义修饰 | `.selected`、`.flipped`、`.learned`、`.active`、`.good`/`.bad` |
| JS 变量/方法 | camelCase | `dailySentence`、`learnedCount`、`startQuiz` |
| Storage 键 | camelCase | `learnedWordIds`、`quizHistory`、`groupProgress` |

### 颜色主题（Material 暖色）
| 角色 | 色值 | 用途 |
|------|------|------|
| 主色 | `#42A5F5` | 导航选中、Tab 激活、闪卡正面 |
| CTA 按钮 | `#FF7043` | 主要操作按钮 |
| 二级按钮 | `#FFD54F` | 复习/收藏，搭配深色文字 |
| 背景 | `#FFF9E6` | 页面背景 |
| 卡片 | `#ffffff` | 配合 `1rpx solid #B0BEC5` 细线边 |
| 标题/深色面 | `#263238` | 主要文字、深色块 |
| 次要文字 | `#78909C` | 副标题、说明文字 |
| 分割线 | `#CFD8DC` | 次要背景、分割 |
| 成功 | `#4CAF50` | 正确、已学、进度 |
| 危险 | `#EF5350` | 错误 |
| 标签 | `#FFE082` | 每日一句、提示卡背景 |

### CSS 规则
- **统一 `rpx`**（750rpx = 屏幕宽度），禁止 `px`
- **无渐变、无阴影**，纯色填充 + hairline 细线边
- 按钮圆角 `9999rpx`（胶囊），卡片圆角 `36rpx`
- 常见间距：`20rpx`、`32rpx`、`40rpx`
- **禁止**对 `input`/`textarea` 设置 `box-sizing: border-box`

### 路由与导航
- 所有页面必须在 `pages.json` → `pages[]` 中注册
- Tab 切换：`uni.switchTab({ url })`
- 子页面跳转：`uni.navigateTo({ url })`，参数通过 URL query string 传递
- 中文参数须 `encodeURIComponent` / `decodeURIComponent`
- 页面目录下 vue 文件须与目录同名（`quiz/quiz.vue`）

### 数据流
- **无 Vuex/Pinia**，跨页面状态全部通过 `uni.storage`（localStorage）共享
- 数据层 `data/words.js` 为纯函数工具层，不依赖 Vue 或 uni API
- 读取：`uni.getStorageSync('key') || default`，写入：`uni.setStorageSync('key', value)`

### Storage 键（勿随意增删）
| 键 | 类型 | 说明 |
|----|------|------|
| `learnedWordIds` | Array | 已学单词 ID 列表 |
| `learnedWords` | Number | 已学单词总数 |
| `streakDays` | Number | 连续打卡天数 |
| `checkedInToday` | String | 当日打卡日期 |
| `quizHistory` | Array | 最近 20 条测验记录（含选择/拼写） |
| `groupProgress` | Object | `{ [categoryId]: { current: N, tested: [0,1,...] } }` 分组学习进度 |

### 拼读（TTS）策略
- H5：优先 `window.speechSynthesis`（Web Speech API）
- App：降级到有道词典 TTS（`dict.youdao.com/dictvoice`）+ `uni.createInnerAudioContext`
- 三处使用：`word-detail.vue`、`vocabulary.vue`、`quiz.vue`、`spell.vue`
- 方法签名：`speakWord(text)`，须 `try-catch` + `typeof window` 检查

### 错误处理
- 短提示：`uni.showToast({ title, icon: 'none'/'success'/'error' })`
- 危险操作确认：`uni.showModal({ title, content })` → 用户确认后才执行

### 平台兼容
- Tab 图标：同时提供 PNG 和 SVG，App 端需 PNG（`static/tab/*.png`），H5 可用 SVG
- 条件编译：`// #ifdef VUE3` / `// #ifdef VUE2`
- 页面生命周期：`onLoad` / `onShow` / `onHide`，组件用 Vue 标准生命周期
