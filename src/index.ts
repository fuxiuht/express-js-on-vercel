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
        <title>月入万刀的第一步！</title>
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
          /* --- Hero 大色块版式：经典色系，纯视觉表达 --- */
          .hero-stage{
            display: grid;
            grid-template-columns: 1fr;
            gap: 18px;
            align-items: stretch;
          }
          .panel{
            border-radius: 26px;
            border: 1px solid var(--line);
            box-shadow: var(--shadow);
            overflow: hidden;
            position: relative;
          }
          .panel-navy{
            background: linear-gradient(135deg, rgba(15,42,67,.98), rgba(15,42,67,.78));
            border-color: rgba(212,175,55,.38);
            min-height: 420px;
          }
          .panel-navy::before{
            content: "";
            position: absolute;
            inset: -40%;
            background:
              radial-gradient(circle at 25% 25%, rgba(212,175,55,.34), transparent 55%),
              radial-gradient(circle at 75% 70%, rgba(176,137,104,.28), transparent 55%),
              radial-gradient(circle at 60% 10%, rgba(255,255,255,.10), transparent 55%);
            transform: rotate(10deg);
            pointer-events: none;
          }
          .panel-navy::after{
            content: "";
            position: absolute;
            left: -70px;
            top: 44px;
            width: 240px;
            height: 240px;
            border-radius: 30px;
            background: linear-gradient(180deg, rgba(212,175,55,.26), rgba(212,175,55,.08));
            border: 1px solid rgba(212,175,55,.44);
            transform: rotate(12deg);
            pointer-events: none;
          }
          .core-title{
            position: relative;
            margin: 0;
            padding: 54px 26px 34px;
            font-weight: 950;
            letter-spacing: -0.03em;
            font-size: clamp(40px, 6vw, 76px);
            line-height: 1.03;
            color: #f7e9b0;
            text-shadow: 0 26px 70px rgba(0,0,0,.32);
            text-wrap: balance;
          }
          .panel-taupe{
            background:
              linear-gradient(180deg, rgba(176,137,104,.36), rgba(176,137,104,.20)),
              linear-gradient(135deg, rgba(255,253,248,.80), rgba(255,253,248,.34));
            border-color: rgba(15,42,67,.16);
            min-height: 220px;
          }
          .panel-taupe::before{
            content: "";
            position: absolute;
            inset: 0;
            background:
              linear-gradient(90deg, rgba(212,175,55,.26), transparent 45%),
              repeating-linear-gradient(135deg, rgba(15,42,67,.12) 0, rgba(15,42,67,.12) 1px, transparent 1px, transparent 12px);
            opacity: .35;
            pointer-events: none;
          }
          @media (min-width: 900px){
            .hero-stage{
              grid-template-columns: 1.35fr .65fr;
            }
            .panel-taupe{
              min-height: 420px;
            }
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
            <section class="hero" aria-label="主视觉">
              <div class="hero-stage">
                <div class="panel panel-navy">
                  <h1 class="core-title">月入万刀的第一步！</h1>
                </div>
                <div class="panel panel-taupe" aria-hidden="true"></div>
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
