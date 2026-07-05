# 轻松学英语

基于 uni-app (Vue 3) 的英语单词学习应用，纯前端，无后端依赖。

## 功能

- **每日一句** — 100 条英文名言，可前后翻阅
- **分类学习** — 6 个分类（小学/初中/高中/日常口语/商务英语/餐饮食品），共 8941 词
- **分组学习** — 每 10 词一组，逐组解锁，进度持久化
- **单词闪卡** — 3D 翻转卡片，点击读发音
- **选择题测验** — 看英文选中文，支持随机/分组出题
- **拼写测试** — 看中文写英文，实时判定对错
- **学习统计** — 已学词数、打卡天数、历史成绩

## 技术栈

| 层 | 技术 |
|---|------|
| 框架 | uni-app (Vue 3 + Options API) |
| 样式 | 纯 CSS、rpx 单位、Material 暖色主题 |
| 存储 | `uni.storage` (localStorage) |
| 拼读 | Web Speech API (H5) / 有道 TTS (App) |
| 构建 | HBuilderX 内置 Vite |

## 快速开始

1. 用 [HBuilderX](https://www.dcloud.io/hbuilderx.html) 打开项目
2. 点击"运行" → 选择目标平台（H5 / 微信小程序 / App）
3. H5 指定启动页：`?page=pages/quiz/quiz`

## 项目结构

```
English/
├── App.vue                          # 根组件 + 全局样式
├── pages.json                       # 路由：4 Tab + 4 子页面
├── data/
│   └── words.js                     # 核心数据（8941 词、100 条名言）
├── pages/
│   ├── index/                       # 首页（每日一句、分类网格）
│   ├── vocabulary/                  # 单词本（列表 + 闪卡）
│   ├── practice/                    # 练习入口（选择 + 拼写）
│   ├── quiz/                        # 选择题测验
│   ├── spell/                       # 拼写测试
│   ├── word-detail/                 # 分组学习（10 词/组）
│   ├── result/                      # 结果页
│   └── profile/                     # 我的（统计、打卡）
└── static/tab/                      # 底栏图标（PNG + SVG）
```

## 配色主题

| 角色 | 色值 |
|------|------|
| 主色 | `#42A5F5` |
| CTA | `#FF7043` |
| 标签/提示 | `#FFE082` |
| 背景 | `#FFF9E6` |
| 成功 | `#4CAF50` |
| 危险 | `#EF5350` |
