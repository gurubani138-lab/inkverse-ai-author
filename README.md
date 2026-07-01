# 墨界 AI 小说创作工作台

一个可直接发布的中文 AI 小说创作网站，包含落地页、作品与章节管理、八个写作 Agent、角色/世界观/长期记忆、版本快照和 Markdown 导出。

## 本地运行

无需安装依赖。使用任意静态服务器打开项目目录，例如：

```powershell
python -m http.server 4173
```

然后访问 `http://localhost:4173`。

## 接入真实 AI

进入工作台右上角“设置”，填写 OpenAI 兼容的 Chat Completions 接口、API Key 和模型名。默认未配置时使用内置演示结果，确保产品可以完整体验。

生产环境不建议让浏览器直接持有服务端密钥。正式商用时应增加后端代理、用户账户、数据库、用量计费和内容安全审核。

## 发布

这是纯静态项目，可直接部署到 Cloudflare Pages、Vercel、Netlify、GitHub Pages 或任意对象存储/CDN。发布目录就是项目根目录。
