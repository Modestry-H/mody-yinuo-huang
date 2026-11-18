# 黄依诺 · 个人网站

一个单页静态网站，不用安装任何东西：双击 `index.html` 就能看。

## 文件结构

```
index.html      页面内容
style.css       样式（配色、字体、布局）
script.js       滚动出现动画 + 证书灯箱
assets/         图片（证件照、两张生活照、十张证书）
```

## 本地打开

双击 `index.html` 即可。字体从 Google Fonts 加载；没有网络时会自动回退到 Georgia / 系统字体，版式不变。

## 发布到网上（免费，约两分钟）

- **Netlify Drop**：打开 app.netlify.com/drop，把整个文件夹拖进去，立刻得到一个网址
- **GitHub Pages**：新建仓库 → 上传这些文件 → Settings → Pages → 选择分支
- **Vercel**：同样支持拖拽部署

> 注意：要把 `index.html`、`style.css`、`script.js`、`assets/` 一起上传，只传 HTML 图片会丢。

## 想改内容

| 想改什么 | 去哪里 |
| --- | --- |
| 公众号 / 抖音链接 | `index.html` 搜索 `mp.weixin` 或 `douyin` |
| 证书标题和说明 | 每个 `<figcaption>` 里的 `card__title` / `card__meta` |
| 加一张证书 | 复制一个 `<figure class="card reveal">` 整块，改 `data-full`、`data-title`、`data-meta` 和 `img src` |
| 换照片 | 同名覆盖 `assets/` 里的文件即可 |
| 主色 | `style.css` 顶部 `--accent`（现在是深古铜 #6B4A22） |
| 字体大小 | `style.css` 里 `body` 的 `font-size`，以及各区块的 `font-size` |

## 设计说明

- 暖纸色背景、近黑正文、深古铜点缀；**正文全部为近黑色，没有灰字**
- 标题 Cormorant Garamond，正文 Inter，正文基准 18px（手机 17px）
- 十张证书用瀑布流排布，点开可放大，支持 ← → 翻页、Esc 关闭
- 手机端自动单列；导航固定在顶部

## 隐私说明

- 实习证明、四六级成绩单上的身份证号已用色块遮盖后再上传
- 身份证、护照、在读证明等文件没有放进来
- 建议公开发布前再检查一遍图片里的学号等个人信息

## 素材来源

- 证件照：`公众号图片/微信图片_20250102202015.jpg`（与简历同一张）
- 生活照：`微信图片_20261118133220_237_16.jpg`、`微信图片_20261118133226_238_16.jpg`
- 证书：证书照片 + 实习证明 / 四六级 PDF 渲染
