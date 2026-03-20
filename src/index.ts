import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Serve static assets (e.g. videos) from /public
app.use(express.static(path.join(__dirname, 'public')))

// Home route - HTML
app.get('/', (req, res) => {
  res.type('html').send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <title>这是我月入万刀的第一步</title>
        <style>
          :root{
            --bg: #f7f2ea;
            --paper: #fffdf8;
            --ink: #18212b;
            --muted: rgba(24,33,43,.72);
            --line: rgba(15,42,67,.12);
            --navy: #0f2a43;
            --gold: #d4af37;
            --accent: #b08968; /* warm taupe */
            --shadow: 0 24px 60px rgba(15,42,67,.14);
          }
          *{ box-sizing: border-box; }
          html,body{ height: 100%; }
          body{
            margin: 0;
            color: var(--ink);
            font-family: ui-serif, "Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif;
            background:
              radial-gradient(1000px 600px at 20% 0%, rgba(212,175,55,.16), transparent 55%),
              radial-gradient(900px 520px at 90% 12%, rgba(176,137,104,.18), transparent 60%),
              radial-gradient(780px 520px at 50% 100%, rgba(15,42,67,.10), transparent 60%),
              linear-gradient(180deg, var(--bg), #f6f0e7 60%, #f3ecdf);
          }
          a{ color: inherit; text-decoration: none; }
          .wrap{
            width: min(1120px, calc(100% - 40px));
            margin: 0 auto;
          }
          .site-header{
            position: sticky;
            top: 0;
            z-index: 10;
            backdrop-filter: blur(10px);
            background: linear-gradient(180deg, rgba(247,242,234,.78), rgba(247,242,234,.62));
            border-bottom: 1px solid var(--line);
          }
          .site-header-inner{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px 0;
          }
          .brand{
            display: flex;
            align-items: center;
            gap: 12px;
            font-weight: 800;
            letter-spacing: .06em;
          }
          .brand-mark{
            width: 34px;
            height: 34px;
            border-radius: 10px;
            background:
              radial-gradient(circle at 30% 30%, rgba(255,255,255,.75), transparent 38%),
              linear-gradient(135deg, rgba(212,175,55,.95), rgba(176,137,104,.92));
            box-shadow: 0 10px 25px rgba(212,175,55,.22);
            border: 1px solid rgba(15,42,67,.12);
          }
          nav{
            display: flex;
            gap: 18px;
            align-items: center;
            font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial;
            font-size: 14px;
            color: var(--muted);
          }
          nav a{
            padding: 8px 10px;
            border-radius: 999px;
            border: 1px solid transparent;
            transition: transform .15s ease, background .15s ease, border-color .15s ease;
          }
          nav a:hover{
            background: rgba(255,255,255,.55);
            border-color: rgba(15,42,67,.10);
            transform: translateY(-1px);
          }

          main{ padding: 48px 0 64px; }

          .hero{
            display: grid;
            grid-template-columns: 1fr;
            gap: 18px;
            align-items: start;
          }
          .hero-topline{
            font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial;
            color: var(--muted);
            font-size: 13px;
            letter-spacing: .22em;
            text-transform: uppercase;
            margin: 0;
          }
          .card{
            background: linear-gradient(180deg, rgba(255,253,248,.92), rgba(255,253,248,.78));
            border: 1px solid var(--line);
            border-radius: 18px;
            box-shadow: var(--shadow);
            overflow: hidden;
          }
          .hero-video{
            padding: 22px;
          }
          .video-slot{
            border-radius: 14px;
            border: 1px solid rgba(15,42,67,.16);
            background:
              radial-gradient(900px 220px at 50% 0%, rgba(212,175,55,.20), transparent 55%),
              linear-gradient(180deg, rgba(255,255,255,.65), rgba(255,255,255,.35));
            box-shadow: inset 0 1px 0 rgba(255,255,255,.6);
            aspect-ratio: 16 / 9;
            display: grid;
            place-items: center;
            position: relative;
          }
          .video-slot:before{
            content: "";
            position: absolute;
            inset: 10px;
            border-radius: 12px;
            border: 1px dashed rgba(15,42,67,.20);
            pointer-events: none;
          }
          .video-slot video{
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            border-radius: 14px;
          }
          .video-placeholder{
            text-align: center;
            padding: 18px;
            position: relative;
            z-index: 1;
          }
          .play{
            width: 58px;
            height: 58px;
            margin: 0 auto 12px;
            border-radius: 999px;
            border: 1px solid rgba(15,42,67,.18);
            background: rgba(255,255,255,.62);
            display: grid;
            place-items: center;
            box-shadow: 0 12px 30px rgba(15,42,67,.10);
          }
          .video-placeholder-title{
            font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial;
            font-weight: 700;
            letter-spacing: .02em;
            margin: 0 0 6px;
            color: rgba(24,33,43,.88);
          }
          .video-placeholder-sub{
            margin: 0;
            font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial;
            color: var(--muted);
            font-size: 14px;
          }
          .hero-caption{
            padding: 0 22px 22px;
            display: grid;
            gap: 10px;
          }
          .hero-caption .headline{
            margin: 0;
            font-size: clamp(22px, 3vw, 30px);
            line-height: 1.25;
            letter-spacing: .01em;
          }
          .hero-caption .tagline{
            margin: 0;
            font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial;
            font-size: 18px;
            font-weight: 750;
            color: rgba(15,42,67,.92);
          }
          .hero-caption .tagline strong{
            color: var(--navy);
            background: linear-gradient(90deg, rgba(212,175,55,.25), rgba(176,137,104,.25));
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid rgba(212,175,55,.35);
          }
          .hero-caption .lead{
            margin: 0;
            font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial;
            color: var(--muted);
            line-height: 1.7;
            font-size: 15px;
            max-width: 70ch;
          }

          footer{
            padding: 18px 0 32px;
            color: rgba(24,33,43,.55);
            font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial;
            font-size: 13px;
          }

          @media (min-width: 900px){
            main{ padding: 64px 0 84px; }
            .hero{
              grid-template-columns: 1fr;
            }
          }
        </style>
      </head>
      <body>
        <header class="site-header">
          <div class="wrap site-header-inner">
            <div class="brand" aria-label="品牌">
              <span class="brand-mark" aria-hidden="true"></span>
              <span>First-Website</span>
            </div>
            <nav aria-label="导航">
              <a href="/">首页</a>
              <a href="/about">关于</a>
              <a href="/api-data">API</a>
              <a href="/healthz">健康检查</a>
            </nav>
          </div>
        </header>

        <main>
          <div class="wrap">
            <section class="hero" aria-label="开场视频">
              <p class="hero-topline">Web 出海 · 经典美学</p>
              <div class="card">
                <div class="hero-video">
                  <div class="video-slot" id="videoSlot">
                    <video controls playsinline preload="metadata" aria-label="开场视频">
                      <source src="/video.mp4" type="video/mp4" />
                      <!-- 如果你的视频不是 video.mp4，把 src 改成你的文件名 -->
                    </video>
                  </div>
                </div>
                <div class="hero-caption">
                  <p class="headline">“先建立可信度，再谈结果。”</p>
                  <p class="tagline">这是我月入万到的第一步！</p>
                  <p class="lead">
                    用更清晰的叙事、更高级的视觉，让你的出海页面从“能看”变成“值得点开”。
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>

        <footer>
          <div class="wrap">© ${new Date().getFullYear()} First-Website · 让每一次展示更有质感</div>
        </footer>
      </body>
    </html>
  `)
})

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'components', 'about.htm'))
})

// Example API endpoint - JSON
app.get('/api-data', (req, res) => {
  res.json({
    message: 'Here is some sample API data',
    items: ['apple', 'banana', 'cherry'],
  })
})

// Health check
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})

export default app
