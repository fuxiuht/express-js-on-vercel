<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>福秀 · 专注AI信息差</title>
  <meta name="google-site-verification" content="gUoCvyUkt1i35ZT3_IbhaNOq17srven9LzJiTtB2n6c"/>
  <style>
    :root {
      --bg:        #08080d;
      --surface:   #0f0f18;
      --surface2:   #16161f;
      --border:    rgba(255,255,255,.08);
      --gold:      #d4a843;
      --gold-dim:  rgba(212,168,67,.18);
      --text:      #e8e0d0;
      --muted:     rgba(232,224,208,.45);
      --muted2:    rgba(232,224,208,.25);
    }

    *,*::before,*::after { box-sizing: border-box; margin: 0; padding: 0; }

    html { scroll-behavior: smooth; }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      min-height: 100vh;
      overflow-x: hidden;
    }

    a { color: inherit; text-decoration: none; }

    /* ─── Nav ────────────────────────────────────────────────────── */
    nav { display: flex; gap: 18px; align-items: center; font-size: 14px; color: var(--muted); }
    nav a { padding: 6px 12px; border-radius: 999px; border: 1px solid transparent; transition: all .2s; }
    nav a:hover { background: rgba(255,255,255,.06); border-color: var(--border); color: var(--text); }

    .site-header {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      backdrop-filter: blur(12px); background: rgba(8,8,13,.72);
      border-bottom: 1px solid var(--border);
      padding: 14px clamp(24px, 6vw, 80px);
    }
    .site-header-inner { display: flex; align-items: center; justify-content: space-between; max-width: 1200px; margin: 0 auto; }
    .brand { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 15px; letter-spacing: .04em; }
    .brand-mark {
      width: 30px; height: 30px; border-radius: 8px;
      background: linear-gradient(135deg, var(--gold), #b8892a);
      border: 1px solid rgba(255,255,255,.15);
    }

    /* ─── Hero title section ─────────────────────────────────────── */
    .hero-title-section {
      position: relative;
      width: 100%;
      height: 100vh;
      min-height: 600px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .hero-bg {
      position: absolute; inset: 0;
      background:
        radial-gradient(ellipse 90% 60% at 50% 40%, rgba(212,168,67,.18) 0%, transparent 55%),
        radial-gradient(ellipse 70% 50% at 30% 60%, rgba(212,168,67,.08) 0%, transparent 45%),
        radial-gradient(ellipse 50% 40% at 80% 20%, rgba(212,168,67,.06) 0%, transparent 40%),
        linear-gradient(180deg, #08080d 0%, #0a0a12 40%, #08080d 100%);
    }

    .hero-grid {
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
      background-size: 50px 50px;
      mask-image: radial-gradient(ellipse 90% 80% at 50% 50%, black 0%, transparent 65%);
    }

    /* ─── Floating orbs ──────────────────────────────────────────── */
    .orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(60px);
      pointer-events: none;
    }
    .orb-1 {
      width: 400px; height: 400px;
      background: radial-gradient(circle, rgba(212,168,67,.2) 0%, transparent 70%);
      top: 15%; left: 20%;
      animation: float1 8s ease-in-out infinite;
    }
    .orb-2 {
      width: 300px; height: 300px;
      background: radial-gradient(circle, rgba(184,137,42,.15) 0%, transparent 70%);
      bottom: 25%; right: 15%;
      animation: float2 10s ease-in-out infinite;
    }
    .orb-3 {
      width: 200px; height: 200px;
      background: radial-gradient(circle, rgba(255,255,255,.06) 0%, transparent 70%);
      top: 60%; left: 60%;
      animation: float3 12s ease-in-out infinite;
    }

    @keyframes float1 {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -20px) scale(1.05); }
      66% { transform: translate(-20px, 15px) scale(0.97); }
    }
    @keyframes float2 {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(-25px, 30px) scale(1.08); }
    }
    @keyframes float3 {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(20px, -25px); }
    }

    /* ─── Title canvas ───────────────────────────────────────────── */
    .title-wrap {
      position: relative;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    #title-canvas {
      display: block;
      height: 200px;
      cursor: crosshair;
      touch-action: none;
    }


    /* ─── Bio section ────────────────────────────────────────────── */
    .bio-section {
      background: var(--bg);
      padding: clamp(60px, 10vh, 100px) clamp(24px, 6vw, 80px);
    }

    .bio-inner { max-width: 860px; margin: 0 auto; }

    /* ─── Interactive bio canvas ─────────────────────────────────── */
    #bio-canvas {
      display: block;
      width: 100%;
      max-width: 800px;
      height: 240px;
      cursor: crosshair;
      touch-action: none;
    }

    .bio-hint {
      margin-top: 20px;
      font-size: 13px;
      color: var(--muted2);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .bio-hint::before {
      content: '';
      display: inline-block;
      width: 6px; height: 6px;
      border-radius: 50%;
      background: var(--gold);
      opacity: .6;
      animation: blink 2s ease-in-out infinite;
    }

    @keyframes blink {
      0%, 100% { opacity: .6; }
      50% { opacity: .2; }
    }

    /* ─── Footer ─────────────────────────────────────────────────── */
    .site-footer { border-top: 1px solid var(--border); padding: 28px clamp(24px, 6vw, 80px); }
    .footer-inner { max-width: 860px; margin: 0 auto; display: flex; gap: 12px; align-items: center; font-size: 13px; color: var(--muted2); }
    .footer-sep { opacity: .4; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(18px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--bg); }
    ::-webkit-scrollbar-thumb { background: rgba(255,255,255,.12); border-radius: 3px; }
  </style>
</head>
<body>

  <!-- Navigation -->
  <header class="site-header">
    <div class="site-header-inner">
      <div class="brand" aria-label="品牌">
        <span class="brand-mark" aria-hidden="true"></span>
        <span>First-Website</span>
      </div>
      <nav aria-label="导航">
        <a href="/about">关于</a>
        <a href="/api-data">API</a>
        <a href="/healthz">健康检查</a>
      </nav>
    </div>
  </header>

  <!-- Hero title section -->
  <section class="hero-title-section" aria-label="主标题">
    <div class="hero-bg"></div>
    <div class="hero-grid"></div>
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
    <div class="title-wrap">
      <canvas id="title-canvas"></canvas>
    </div>
  </section>

  <!-- Bio section with pretext -->
  <section class="bio-section" aria-label="个人介绍">
    <div class="bio-inner">
      <canvas id="bio-canvas"></canvas>
      <p class="bio-hint">移动鼠标，文字会自然避开</p>
    </div>
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="footer-inner">
      <span>© 2026 First-Website</span>
      <span class="footer-sep">·</span>
      <span>让每一次展示更有质感</span>
    </div>
  </footer>

  <script>
    // ═══════════════════════════════════════════════════════════════════
    //  Pretext Engine — mouse-repulsion text layout
    // ═══════════════════════════════════════════════════════════════════
    ;(() => {
      const REPEL_RADIUS   = 90
      const REPEL_STRENGTH = 0.55
      const RETURN_SPEED   = 0.08
      const DAMPING        = 0.82

      // ── Shared helpers ─────────────────────────────────────────────
      function makeChars(text, font, lineH) {
        const ctx = document.createElement('canvas').getContext('2d')
        ctx.font = font
        const chars = []
        let y = 0
        for (const line of text.split('\n')) {
          if (line.trim() === '') { y += lineH * 0.6; continue }
          let x = 0
          for (const ch of line) {
            const w = ctx.measureText(ch).width
            chars.push({ ch, x, y, baseX: x, baseY: y, w, vx: 0, vy: 0 })
            x += w
          }
          y += lineH
        }
        return chars
      }

      function updateChars(chars, mx, my, lineH) {
        for (const c of chars) {
          const dx = c.x + c.w / 2 - mx
          const dy = c.y + lineH / 2 - my
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < REPEL_RADIUS && dist > 0.1) {
            const force = (REPEL_RADIUS - dist) / REPEL_RADIUS * REPEL_STRENGTH
            c.vx += (dx / dist) * force
            c.vy += (dy / dist) * force
          }
          c.vx += (c.baseX - c.x) * RETURN_SPEED
          c.vy += (c.baseY - c.y) * RETURN_SPEED
          c.vx *= DAMPING
          c.vy *= DAMPING
          c.x += c.vx
          c.y += c.vy
        }
      }

      function setupMouse(canvas) {
        let mx = -9999, my = -9999
        canvas.addEventListener('mousemove', e => {
          const r = canvas.getBoundingClientRect()
          mx = e.clientX - r.left
          my = e.clientY - r.top
        })
        canvas.addEventListener('mouseleave', () => { mx = -9999; my = -9999 })
        canvas.addEventListener('touchmove', e => {
          e.preventDefault()
          const r = canvas.getBoundingClientRect()
          mx = e.touches[0].clientX - r.left
          my = e.touches[0].clientY - r.top
        }, { passive: false })
        canvas.addEventListener('touchend', () => { mx = -9999; my = -9999 })
        return () => [mx, my]
      }

      // ═══════════════════════════════════════════════════════════════
      //  TITLE — iridescent rainbow shimmer
      // ═══════════════════════════════════════════════════════════════
      const TITLE_TEXT = '福秀，\n专注AI信息差'
      const TITLE_FONT  = 'bold 52px "PingFang SC", "Microsoft YaHei", "Segoe UI", sans-serif'
      const TITLE_LINE_H = 72

      const titleChars = makeChars(TITLE_TEXT, TITLE_FONT, TITLE_LINE_H)

      const titleCanvas = document.getElementById('title-canvas')
      const titleCtx = titleCanvas.getContext('2d')
      let titleW, titleH
      const titleDpr = window.devicePixelRatio || 1
      let t = 0

      // Iridescent color palette
      const IRIDESCENT = [
        [255, 100, 100],   // red
        [255, 160, 80],    // orange
        [240, 220, 60],    // yellow
        [100, 220, 120],   // green
        [80,  200, 255],   // cyan
        [120, 100, 255],   // purple
        [255, 100, 200],   // pink
      ]

      function iridescentColor(offset, speed) {
        const idx = (offset + t * speed) % IRIDESCENT.length
        const i0 = Math.floor(idx)
        const i1 = (i0 + 1) % IRIDESCENT.length
        const frac = idx - i0
        const r = Math.round(IRIDESCENT[i0][0] + (IRIDESCENT[i1][0] - IRIDESCENT[i0][0]) * frac)
        const g = Math.round(IRIDESCENT[i0][1] + (IRIDESCENT[i1][1] - IRIDESCENT[i0][1]) * frac)
        const b = Math.round(IRIDESCENT[i0][2] + (IRIDESCENT[i1][2] - IRIDESCENT[i0][2]) * frac)
        return `rgb(${r},${g},${b})`
      }

      function resizeTitle() {
        const rect = titleCanvas.getBoundingClientRect()
        titleW = titleCanvas.width  = rect.width  * titleDpr
        titleH = titleCanvas.height = rect.height * titleDpr
        titleCtx.scale(titleDpr, titleDpr)
        const totalH = titleChars.length ? Math.max(...titleChars.map(c => c.baseY)) + TITLE_LINE_H : 0
        const offsetY = (rect.height - totalH) / 2
        for (const c of titleChars) {
          c.baseY = c.y + offsetY
          c.y = c.baseY
        }
      }

      function loopTitle() {
        t += 0.02
        titleCtx.clearRect(0, 0, titleW, titleH)
        updateChars(titleChars, titleMx, titleMy, TITLE_LINE_H)

        titleCtx.textBaseline = 'top'
        titleCtx.font = TITLE_FONT

        for (let i = 0; i < titleChars.length; i++) {
          const c = titleChars[i]
          const speed = Math.sqrt(c.vx * c.vx + c.vy * c.vy)

          // Iridescent color per character with wave
          const color = iridescentColor(i * 0.4, 0.3)
          const highlight = Math.sin(t * 2 + i * 0.5) * 0.5 + 0.5

          // Glow
          titleCtx.shadowColor = color
          titleCtx.shadowBlur = 16 + speed * 10 + highlight * 8

          // Main fill
          titleCtx.fillStyle = color
          titleCtx.fillText(c.ch, c.x, c.y)

          // Specular shine on peaks
          if (highlight > 0.75) {
            titleCtx.shadowBlur = 4
            titleCtx.fillStyle = `rgba(255,255,255,${highlight * 0.5})`
            titleCtx.fillText(c.ch, c.x, c.y)
          }
        }
        titleCtx.shadowBlur = 0
        requestAnimationFrame(loopTitle)
      }

      let titleMx = -9999, titleMy = -9999
      titleCanvas.addEventListener('mousemove', e => {
        const r = titleCanvas.getBoundingClientRect()
        titleMx = e.clientX - r.left
        titleMy = e.clientY - r.top
      })
      titleCanvas.addEventListener('mouseleave', () => { titleMx = -9999; titleMy = -9999 })
      titleCanvas.addEventListener('touchmove', e => {
        e.preventDefault()
        const r = titleCanvas.getBoundingClientRect()
        titleMx = e.touches[0].clientX - r.left
        titleMy = e.touches[0].clientY - r.top
      }, { passive: false })
      titleCanvas.addEventListener('touchend', () => { titleMx = -9999; titleMy = -9999 })

      window.addEventListener('resize', resizeTitle)
      resizeTitle()
      loopTitle()

      // ═══════════════════════════════════════════════════════════════
      //  BIO — one continuous paragraph
      // ═══════════════════════════════════════════════════════════════
      const BIO_TEXT = '我是来自上海的 AI 开发者，专注 Agent 开发与 AI growth automation。\n曾实习于年销售额 6 亿的生鲜公司，负责 AI 赋能业务。\n徐汇区教育局 AI 工具赋能课程主讲老师。\n408 晓组织 & 408 骑士团创始人，致力于消弭 AI 信息差。'

      const BIO_FONT    = '19px "PingFang SC", "Microsoft YaHei", "Segoe UI", ui-sans-serif, system-ui, sans-serif'
      const BIO_LINE_H  = 34
      const BIO_MAX_W   = 800

      const bioChars = makeChars(BIO_TEXT, BIO_FONT, BIO_LINE_H)

      const bioCanvas = document.getElementById('bio-canvas')
      const bioCtx = bioCanvas.getContext('2d')
      let bioW, bioH, bioMx = -9999, bioMy = -9999
      const bioDpr = window.devicePixelRatio || 1

      function resizeBio() {
        const rect = bioCanvas.getBoundingClientRect()
        bioW = bioCanvas.width  = rect.width  * bioDpr
        bioH = bioCanvas.height = rect.height * bioDpr
        bioCtx.scale(bioDpr, bioDpr)
        const totalH = bioChars.length ? Math.max(...bioChars.map(c => c.baseY)) + BIO_LINE_H : 0
        const offsetY = (rect.height - totalH) / 2
        for (const c of bioChars) {
          c.baseY = c.y + offsetY
          c.y = c.baseY
        }
      }

      function drawBio() {
        bioCtx.clearRect(0, 0, bioW, bioH)
        updateChars(bioChars, bioMx, bioMy, BIO_LINE_H)
        bioCtx.font = BIO_FONT
        bioCtx.fillStyle = 'rgba(232,224,208,0.92)'
        bioCtx.textBaseline = 'top'
        for (const c of bioChars) {
          const speed = Math.sqrt(c.vx * c.vx + c.vy * c.vy)
          const alpha = 0.78 + Math.min(speed * 0.6, 0.22)
          bioCtx.globalAlpha = Math.min(alpha, 1)
          bioCtx.fillText(c.ch, c.x, c.y)
        }
        bioCtx.globalAlpha = 1
      }

      function loopBio() {
        drawBio()
        requestAnimationFrame(loopBio)
      }

      bioCanvas.addEventListener('mousemove', e => {
        const r = bioCanvas.getBoundingClientRect()
        bioMx = e.clientX - r.left
        bioMy = e.clientY - r.top
      })
      bioCanvas.addEventListener('mouseleave', () => { bioMx = -9999; bioMy = -9999 })
      bioCanvas.addEventListener('touchmove', e => {
        e.preventDefault()
        const r = bioCanvas.getBoundingClientRect()
        bioMx = e.touches[0].clientX - r.left
        bioMy = e.touches[0].clientY - r.top
      }, { passive: false })
      bioCanvas.addEventListener('touchend', () => { bioMx = -9999; bioMy = -9999 })

      window.addEventListener('resize', resizeBio)
      resizeBio()
      loopBio()
    })()
  </script>

</body>
</html>
