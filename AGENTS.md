# AGENTS.md

## 项目概述

"轻松学英语"是一个基于 **uni-app (Vue 3)** 的轻量级英语单词学习应用。纯前端项目，使用 `uni.storage` (localStorage) 进行数据持久化，无后端依赖，无 `package.json`。

## 项目结构

```
English/
├── App.vue                          # 根组件（生命周期日志 + 全局样式）
├── main.js                          # 入口（Vue 2/3 条件编译，当前使用 Vue 3）
├── index.html                       # H5 入口 HTML（Vite SPA 壳）
├── manifest.json                    # uni-app 应用清单（appid、权限、vueVersion: 3）
├── pages.json                       # 路由配置：4 个 Tab 页 + 3 个子页面
├── uni.scss                         # uni-app 内置 SCSS 变量（组件中未实际引用）
├── .editorconfig                    # 编辑器配置
├── data/
│   └── words.js                     # 核心数据层：50 个单词(5 分类×10)、8 条名言、测验生成
├── pages/
│   ├── index/index.vue              # 首页 Tab：每日一句、分类列表、统计行
│   ├── vocabulary/vocabulary.vue    # 单词本 Tab：列表模式 + 3D 闪卡翻转模式
│   ├── practice/practice.vue        # 练习 Tab：测验入口卡片 + 历史成绩
│   ├── quiz/quiz.vue                # 测验页：选择题作答，内部展示结果
│   ├── result/result.vue            # 独立测验结果页（当前未被任何页面跳转）
│   ├── word-detail/word-detail.vue  # 分类单词详情，点击标记已学
│   └── profile/profile.vue          # 我的 Tab：统计网格、打卡、重置
└── static/
    ├── logo.png                     # 默认模板资源（项目未使用）
    └── tab/                         # tabBar 图标（home/word/practice/profile 各两态）
```

## 构建 / 运行 / 测试

### 运行与预览
- **HBuilderX IDE 内置运行**：在 HBuilderX 中点击"运行"→ 选择目标平台（H5/微信小程序/App）
- **H5 开发预览**：`D:\HBuilderX.5.01.2026021122-alpha\HBuilderX\cli.exe` 可用于命令行启动
- **开发服务器**：由 HBuilderX 内置 Vite 驱动，入口为 `index.html` → `/main.js`
- 运行到特定页面：添加 `?page=pages/quiz/quiz` 参数可指定启动页

### 测试
- **本项目当前无自动化测试**。功能验证依赖 HBuilderX IDE 运行到模拟器/浏览器手动测试。
- 若需添加测试，建议使用 uni-app 官方测试方案或通过 HBuilderX 的 test 插件。

### Lint / 格式化
- 无 ESLint / Prettier 配置。遵循 `.editorconfig`：Tab 缩进、UTF-8、LF 行尾。
- HBuilderX 内置代码格式化工具，可直接使用 `Ctrl+Shift+F`。

## 代码风格与协作规则

### 技术栈约定
- **Vue 3**（`manifest.json` 中 `vueVersion: "3"`），但 **全部使用 Options API**，不使用 Composition API
- 所有 `.vue` 组件使用 `<style scoped>` 隔离样式
- 纯 CSS 编写（项目虽提供 `uni.scss` 变量文件，但组件中未启用 SCSS 预处理）

### 组件结构顺序
```vue
<template>
  <!-- 模板 -->
</template>

<script>
  export default {
    data() { return { ... } },
    computed: { ... },
    methods: { ... },
    onLoad(options) { ... },   // 接收路由参数
    onShow() { ... }           // 页面显示时刷新数据
  }
</script>

<style scoped>
  /* 样式 */
</style>
```

### Imports 约定
- uni-app 平台 API（`uni.navigateTo`、`uni.getStorageSync` 等）为全局可用，无需导入
- 项目内部数据模块使用 **CommonJS** 导出：`data/words.js` 通过 `module.exports` 导出，页面中通过 `import { fn } from '@/data/words.js'` 导入
- `@/` 别名指向项目根目录
- 无第三方 npm 依赖

### 命名规范
- **文件**：kebab-case（`word-detail.vue`、`words.js`）
- **CSS 类名**：kebab-case，近似 BEM 风格单连字符（`daily-card`、`card-front`、`quiz-progress-bar`、`stat-num`、`cat-icon`）
- **CSS 状态修饰符**：`.selected`、`.flipped`、`.learned`、`.active`、`.good` / `.bad`
- **Vue data/computed/methods**：camelCase（`dailySentence`、`learnedCount`、`goToCategory`）
- **localStorage 键**：camelCase（`learnedWordIds`、`streakDays`、`quizHistory`）

### CSS 单位与样式规则
- **统一使用 `rpx` 单位**（响应式像素，750rpx = 屏幕宽度），禁止使用 `px`
- 常见间距：`20rpx`、`30rpx`、`40rpx`；圆角：`16rpx`、`20rpx`、`24rpx`
- **颜色主题**：
  - 主蓝色 `#4A90D9`（导航栏、按钮、统计数字）
  - 蓝色渐变 `linear-gradient(135deg, #4A90D9, #357ABD)`
  - 紫色渐变 `linear-gradient(135deg, #7B68EE, #6A5ACD)`（闪卡背面、详情页头）
  - 红色渐变 `linear-gradient(135deg, #FF6B6B, #FF8E53)`（测验入口）
  - 绿色渐变 `linear-gradient(135deg, #4ECDC4, #44B09E)`（复习按钮）
  - 全局背景 `#F5F7FA`，卡片 `#fff`，文字 `#333` / `#999` / `#ccc`

### 路由与导航
- **页面注册**：所有页面必须在 `pages.json` 的 `pages[]` 中声明
- **Tab 切换**：`uni.switchTab({ url: '/pages/xxx/xxx' })`
- **子页面跳转**：`uni.navigateTo({ url: '/pages/xxx/xxx?key=value' })`
- **返回**：`uni.navigateBack()`
- **路由参数传递**：URL query string，接收方在 `onLoad(options)` 中解析
- **参数编码**：中文参数使用 `encodeURIComponent` / `decodeURIComponent`
- **页面路径规则**：每个页面目录下的 vue 文件必须与目录同名（如 `quiz/quiz.vue`）

### 数据流与状态管理
- **无 Vuex / Pinia**，所有跨页面状态通过 `uni.storage`（localStorage）共享
- 数据读写模式：
  ```js
  // 读取（同步）
  const data = uni.getStorageSync('key') || defaultValue
  // 写入（同步）
  uni.setStorageSync('key', value)
  // 删除
  uni.removeStorageSync('key')
  ```
- **数据层独立**：`data/words.js` 作为纯函数工具层，不依赖 Vue 或 uni API
- 用户状态键（不要随意增删，保持兼容）：
  - `learnedWordIds` (Array) - 已学单词 ID 列表
  - `learnedWords` (Number) - 已学单词总数
  - `streakDays` (Number) - 连续打卡天数
  - `checkedInToday` (String) - 当日打卡日期字符串
  - `quizHistory` (Array) - 最近 20 条测验记录
  - `groupProgress` (Object) - 分组学习进度，格式：`{ [categoryId]: { current: 0, tested: [0,1,2] } }`

### uni-app 平台注意事项
- **H5 输入框**：不要对 `input` / `textarea` 设置 `box-sizing: border-box`，否则可能导致无法获得焦点
- **条件编译**：使用 `// #ifdef VUE3` / `// #ifdef VUE2` 区分 Vue 版本代码
- **生命周期**：页面使用 `onLoad` / `onShow` / `onHide`（uni-app 页面生命周期），组件使用 Vue 标准生命周期
- `uniIdRouter: {}` 在 `pages.json` 中已预留，未来如需接入 uni-id 用户系统可直接配置

### 错误处理与用户反馈
- 使用 `uni.showToast({ title: '...', icon: 'none/success/error' })` 提示简短信息
- 使用 `uni.showModal({ title: '...', content: '...' })` 确认危险操作（如重置数据）
- 重操作（数据重置等）必须有模态确认，不可直接执行
