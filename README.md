# 求职追踪 - Vercel 部署指南

## 部署步骤

### 1. 注册账号
- GitHub：https://github.com
- Vercel：https://vercel.com（用GitHub登录）

### 2. 获取 DeepSeek API Key
- 访问：https://platform.deepseek.com
- 注册账号（新用户有免费额度）
- 进入 API Keys → 创建新Key

### 3. 上传代码到 GitHub
- GitHub 新建仓库，名字随意如 job-tracker
- 把 job-tracker 文件夹里所有文件上传

### 4. 部署到 Vercel
- 登录 Vercel → New Project → 选择仓库 → Deploy

### 5. 设置 API Key（关键）
- 部署完后进入项目 Settings → Environment Variables
- 添加变量：
  - Name:  DEEPSEEK_API_KEY
  - Value: 你的Key（sk-开头）
- 保存后点 Redeploy

### 6. 完成！
访问 Vercel 给你的网址即可，手机电脑都能用。
