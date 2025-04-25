# Strapi + Nuxt 博客系统

这是一个基于Strapi（后端）和Nuxt.js（前端）构建的多语言博客系统，采用monorepo结构组织代码。

## 功能特点

- 基于Strapi v5的内容管理系统
- 基于Nuxt 3的现代前端
- 使用UnoCSS构建样式系统
- 支持中英文双语切换（国际化）
- 响应式设计，支持移动端和桌面端
- 博客文章、分类和标签管理
- SEO友好

## 技术栈

- **后端**：
  - Strapi v5：强大的Headless CMS
  - GraphQL：API查询语言
  - SQLite：轻量级数据库

- **前端**：
  - Nuxt.js 3：基于Vue.js的SSR框架
  - UnoCSS：原子化CSS引擎
  - Vue I18n：国际化解决方案

## 项目结构

```
strapi-nuxt-blog/
├── backend/           # Strapi后端
├── frontend/          # Nuxt.js前端
└── package.json       # 项目根package.json
```

## 开始使用

### 准备工作

确保您已安装：
- Node.js >= 18
- PNPM >= 8

### 安装

```bash
# 克隆项目
git clone https://your-repo-url/strapi-nuxt-blog.git
cd strapi-nuxt-blog

# 安装依赖
pnpm install
```

### 开发环境运行

```bash
# 同时运行前端和后端
pnpm dev

# 仅运行后端
pnpm dev:backend

# 仅运行前端
pnpm dev:frontend
```

前端将在 http://localhost:3000 运行
后端将在 http://localhost:1337 运行

### 建立生产版本

```bash
# 构建前端和后端
pnpm build

# 仅构建后端
pnpm build:backend

# 仅构建前端
pnpm build:frontend
```

### 生产环境运行

```bash
# 同时运行前端和后端
pnpm start

# 仅运行后端
pnpm start:backend

# 仅运行前端
pnpm start:frontend
```

## 国际化支持

该项目支持中英文双语：
- 中文 (zh-Hans): 默认语言
- 英文 (en): 可通过语言切换访问

## 贡献指南

欢迎贡献代码，请遵循以下步骤：
1. Fork项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交变更 (`git commit -m 'Add some amazing feature'`)
4. 推送分支 (`git push origin feature/amazing-feature`)
5. 打开Pull Request

## 许可证

MIT
