# 个人网站

基于 Astro 构建的静态个人网站，包含「关于 / 经历 / 项目 / 联系」四个页面，适配 Windows 桌面浏览器与手机浏览器。

> 📚 想了解这个项目是怎么做出来的、每行代码什么意思、如何一步步学会维护它？请看 [技术文档包](docs/README.md)（从背景知识讲起，零基础可读）。

## 常用命令

```bash
npm install    # 首次使用：安装依赖
npm run dev    # 本地开发预览（浏览器打开 http://localhost:4321）
npm run build  # 生成静态网站文件（输出到 dist/）
npm run preview # 本地预览构建产物
```

## 如何更新内容（不需要改代码）

所有个人信息都在 `src/content/` 文件夹里，用 Markdown 编写：

| 文件 | 内容 |
|------|------|
| `src/content/site/info.md` | 姓名、一句话介绍、联系方式 |
| `src/content/about.md` | 「关于我」正文、技能、教育背景 |
| `src/content/experience/` | 经历条目，一个文件一条 |
| `src/content/projects/` | 项目条目，一个文件一个项目 |

- 每个文件顶部的 `---` 之间是结构化字段（YAML 格式），下方是正文
- 留空的字段（如 `github: ""`）会被网站自动隐藏
- 新增经历/项目：复制文件夹里的示例文件，改文件名和内容即可
- 排序：`order` 数字越大，排得越靠前
- 想换头像：把图片放到 `public/` 文件夹，并把 `info.md` 中的 `avatar` 改成图片路径（如 `/avatar.jpg`）

## 如何调整外观

- 配色、圆角、阴影：改 `src/styles/global.css` 顶部的 CSS 变量
- 整体结构：`src/layouts/` 与 `src/components/`

## 如何部署（上线让所有人访问）

待定 —— 需要时与 Claude 讨论选择部署平台（如 Cloudflare Pages / GitHub Pages / Vercel）。
