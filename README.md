# 未动姐姐 - 个人网站

一个基于小红书内容展示的个人网站，采用暗色主题设计。

## 网站预览

- 首页：个人简介和热门笔记
- 笔记：全部笔记内容展示
- 收藏：分类收藏内容
- 关于：详细个人介绍

## 技术栈

- HTML5
- CSS3
- JavaScript (原生)
- Google Fonts (Noto Sans SC)

## 本地运行

1. 克隆或下载此仓库
2. 直接在浏览器中打开 `index.html`

## 部署到 GitHub Pages

1. 在 GitHub 上创建新仓库（如 `weidong-jiejie`）
2. 将此项目所有文件推送到仓库
3. 进入仓库 Settings > Pages
4. Source 选择 "main branch"
5. 保存后即可通过 `https://你的用户名.github.io/weidong-jiejie` 访问

## 自定义修改

### 修改个人信息

编辑 `index.html` 和 `about.html` 中的以下内容：
- 昵称
- 小红书号
- 个人简介
- 头像图片链接
- 笔记内容

### 修改主题颜色

编辑 `css/style.css` 中的 `:root` 变量：
```css
:root {
    --bg-primary: #0d0d0d;
    --accent: #ff2442;
    /* ... */
}
```

## 注意事项

- 图片使用小红书CDN链接，建议下载到本地以提高加载速度
- 网站内容仅供个人展示使用
- 如需商业用途，请确保已获得相关授权

## 许可证

MIT License
