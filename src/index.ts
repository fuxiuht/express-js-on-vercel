import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { readFileSync } from 'fs'
import { prepare, layout } from '@chenglou/pretext'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Serve static assets (e.g. videos) from /public
app.use(express.static(path.join(__dirname, '../public')))

// ─── Bio credentials ─────────────────────────────────────────────────────────
const credentials = [
  { emoji: '🍈', text: '上海徐汇 Agent开发 \u2502AI growth automation' },
  { emoji: '🍎', text: '红果S级AI仿真人漫剧《国运擂台》承制方' },
  { emoji: '🥥', text: 'AI训练师高级证书项目·超级管理员' },
  { emoji: '🍊', text: 'AI赋能官｜羊伍六 | 年销售额6亿的生鲜公司' },
  { emoji: '🍇', text: '408晓组织 & 408骑士团·创始人' },
]

function buildCredentialHtml(emoji: string, text: string): string {
  return '        <div class="cred-line">' + emoji + '  ' + text + '</div>\n'
}

// ─── Home — dark cinematic page ───────────────────────────────────────────────
app.get('/', (req, res) => {
  const bioItems = credentials.map(c => buildCredentialHtml(c.emoji, c.text)).join('')
  const year = new Date().getFullYear()

  const html = '<!doctype html>\n' +
'<html>\n' +
'<head>\n' +
'  <meta charset="utf-8"/>\n' +
'  <meta name="viewport" content="width=device-width,initial-scale=1"/>\n' +
'  <title>月入万刀的第一步！</title>\n' +
'  <link rel="stylesheet" href="/style.css"/>\n' +
'  <meta name="google-site-verification" content="gUoCvyUkt1i35ZT3_IbhaNOq17srven9LzJiTtB2n6c"/>\n' +
'</head>\n' +
'<body>\n' +
'\n' +
'  <!-- Navigation -->\n' +
'  <header class="site-header">\n' +
'    <div class="site-header-inner">\n' +
'      <div class="brand" aria-label="品牌">\n' +
'        <span class="brand-mark" aria-hidden="true"></span>\n' +
'        <span>First-Website</span>\n' +
'      </div>\n' +
'      <nav aria-label="导航">\n' +
'        <a href="/">首页</a>\n' +
'        <a href="/about">关于</a>\n' +
'        <a href="/api-data">API</a>\n' +
'        <a href="/healthz">健康检查</a>\n' +
'      </nav>\n' +
'    </div>\n' +
'  </header>\n' +
'\n' +
'  <!-- Hero: video background -->\n' +
'  <section class="hero" aria-label="主视觉">\n' +
'    <div class="hero-video-wrap">\n' +
'      <video class="hero-video" autoplay muted loop playsinline id="heroVideo">\n' +
'        <source src="/video.mp4" type="video/mp4"/>\n' +
'      </video>\n' +
'      <div class="hero-overlay"></div>\n' +
'      <div class="sound-btn" id="soundBtn" title="开启声音">\n' +
'        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n' +
'          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>\n' +
'          <line x1="23" y1="9" x2="17" y2="15"></line>\n' +
'          <line x1="17" y1="9" x2="23" y2="15"></line>\n' +
'        </svg>\n' +
'      </div>\n' +
'      <div class="hero-content">\n' +
'        <div class="hero-eyebrow">Portfolio \u00b7 2024</div>\n' +
'        <h1 class="hero-title">月入万刀<br/>的第一步！</h1>\n' +
'        <p class="hero-sub">让每一次展示更有质感</p>\n' +
'      </div>\n' +
'    </div>\n' +
'    <script>\n' +
'      const btn = document.getElementById("soundBtn");\n' +
'      const vid = document.getElementById("heroVideo");\n' +
'      btn.addEventListener("click", () => {\n' +
'        vid.muted = false;\n' +
'        vid.play();\n' +
'        btn.style.display = "none";\n' +
'      });\n' +
'    </script>\n' +
'  </section>\n' +
'\n' +
'  <!-- Bio / Credentials -->\n' +
'  <section class="bio" aria-label="个人简介">\n' +
'    <div class="bio-inner">\n' +
'      <div class="bio-header">\n' +
'        <div class="bio-label">About</div>\n' +
'        <h2 class="bio-heading">身份与项目</h2>\n' +
'      </div>\n' +
'      <div class="cred-list" role="list">\n' +
        bioItems +
'      </div>\n' +
'    </div>\n' +
'  </section>\n' +
'\n' +
'  <!-- Footer -->\n' +
'  <footer class="site-footer">\n' +
'    <div class="footer-inner">\n' +
'      <span>\u00a9 ' + year + ' First-Website</span>\n' +
'      <span class="footer-sep">&middot;</span>\n' +
'      <span>让每一次展示更有质感</span>\n' +
'    </div>\n' +
'  </footer>\n' +
'\n' +
'</body>\n' +
'</html>\n'

  res.type('html').send(html)
})

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, '../components', 'about.htm'))
})

app.get('/api-data', (req, res) => {
  res.json({
    message: 'Here is some sample API data',
    items: ['apple', 'banana', 'cherry'],
  })
})

app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})

export default app

// Local dev server
if (process.argv[1] && process.argv[1].endsWith('index.ts')) {
  app.listen(3000, () => console.log('http://localhost:3000'))
}
