<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quarters2Crypto — Turn Curiosity Into Coin</title>
  <meta name="description" content="Real-world experiments in Web3 income — without hype, without guru nonsense. App reviews, DeFi breakdowns, airdrop tracking, and more by Flaveon.">
  <style>
    :root {
      --bg-0:       #0a0118;
      --bg-1:       #1a0b2e;
      --bg-2:       #2d1b4e;
      --pink:       #ff6ec7;
      --violet:     #a855f7;
      --indigo:     #6366f1;
      --gold:       #fbbf24;
      --gold-dim:   #f59e0b;
      --blue:       #4da6ff;
      --white:      #ffffff;
      --text:       #e2d9f3;
      --muted:      #9d8ec4;
      --card:       rgba(45,27,78,0.5);
      --border:     rgba(168,85,247,0.18);
      --nav-h:      68px;
      --glow-v:     0 0 22px rgba(168,85,247,0.4);
      --glow-p:     0 0 22px rgba(255,110,199,0.4);
      --glow-g:     0 0 22px rgba(251,191,36,0.35);
      --ease:       0.3s ease;
      --radius:     16px;
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      background: var(--bg-0);
      color: var(--text);
      line-height: 1.75;
      overflow-x: hidden;
    }
    a { color: var(--violet); text-decoration: none; transition: color var(--ease); }
    a:hover { color: var(--pink); }
    img { max-width: 100%; display: block; }

    /* ── STARFIELD ─────────────────────────────────── */
    #starfield {
      position: fixed; inset: 0;
      pointer-events: none; z-index: 0;
    }

    /* ── NAV ───────────────────────────────────────── */
    #nav {
      position: fixed; top: 0; left: 0; right: 0;
      height: var(--nav-h);
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 2rem;
      background: rgba(10,1,24,0.82);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border-bottom: 1px solid rgba(168,85,247,0.12);
      z-index: 999;
      transition: background var(--ease);
    }
    #nav.scrolled { background: rgba(10,1,24,0.97); }
    .nav-brand {
      display: flex; align-items: center; gap: 0.7rem;
      text-decoration: none; flex-shrink: 0;
    }
    .nav-brand img { height: 38px; width: auto; }
    .nav-brand-text {
      font-size: 0.9rem; font-weight: 700;
      letter-spacing: 0.04em;
      background: linear-gradient(90deg, var(--pink), var(--violet));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
      display: none;
    }
    .nav-links {
      list-style: none; display: flex;
      align-items: center; gap: 1.75rem;
    }
    .nav-links a {
      font-size: 0.8rem; font-weight: 500;
      letter-spacing: 0.08em; text-transform: uppercase;
      color: var(--muted); transition: color var(--ease);
    }
    .nav-links a:hover, .nav-links a.active { color: var(--pink); }
    .nav-sub {
      padding: 0.45rem 1.2rem;
      background: linear-gradient(135deg, var(--violet), var(--pink));
      border-radius: 999px; font-size: 0.8rem; font-weight: 700;
      color: #fff !important; letter-spacing: 0.04em;
      box-shadow: var(--glow-v);
      transition: box-shadow var(--ease), transform var(--ease);
    }
    .nav-sub:hover { box-shadow: var(--glow-p); transform: translateY(-1px); color: #fff !important; }
    .hamburger {
      display: none; flex-direction: column;
      gap: 5px; cursor: pointer; padding: 4px;
    }
    .hamburger span {
      display: block; width: 22px; height: 2px;
      background: var(--text); border-radius: 2px;
      transition: all var(--ease);
    }

    /* ── LAYOUT HELPERS ────────────────────────────── */
    .wrap { max-width: 1080px; margin: 0 auto; padding: 0 2rem; }
    section { position: relative; z-index: 1; }
    .eyebrow {
      display: inline-block; font-size: 0.68rem; font-weight: 800;
      letter-spacing: 0.22em; text-transform: uppercase;
      color: var(--pink); margin-bottom: 0.7rem;
    }
    .divider {
      width: 52px; height: 2px; border-radius: 2px;
      background: linear-gradient(90deg, var(--pink), var(--violet));
      margin: 1.25rem 0;
    }
    .divider.c { margin: 1.25rem auto; }
    h1 { font-size: clamp(2.4rem,6vw,4.4rem); line-height: 1.12; font-weight: 800; }
    h2 { font-size: clamp(1.7rem,4vw,2.4rem); line-height: 1.2; font-weight: 700; }
    h3 { font-size: 1.1rem; font-weight: 700; }
    .grad-text {
      background: linear-gradient(135deg, #fff 0%, var(--pink) 55%, var(--violet) 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .pink { color: var(--pink); }
    .gold { color: var(--gold); }
    .violet { color: var(--violet); }

    /* reveal animation */
    .rv { opacity: 0; transform: translateY(22px); transition: opacity 0.65s ease, transform 0.65s ease; }
    .rv.in { opacity: 1; transform: none; }

    /* ── HERO ──────────────────────────────────────── */
    #hero {
      min-height: 100vh;
      display: flex; align-items: center;
      padding-top: var(--nav-h);
      overflow: hidden;
    }
    .hero-bg {
      position: absolute; inset: 0;
      background: url("Quarters2Crypto/Q2C%20Pics/ChatGPT%20Image%20Feb%2014%2C%202026%2C%2001_02_49%20PM.png") center 28% / cover no-repeat;
      opacity: 0.28; z-index: 0;
    }
    .hero-bg::after {
      content: '';
      position: absolute; inset: 0;
      background: linear-gradient(to bottom,
        rgba(10,1,24,0.15) 0%,
        rgba(10,1,24,0.5) 50%,
        rgba(10,1,24,1) 100%);
    }
    .hero-inner {
      position: relative; z-index: 2;
      max-width: 780px;
    }
    .hero-icon {
      width: 84px; height: 84px;
      margin-bottom: 2rem;
      animation: levitate 7s ease-in-out infinite;
      filter: drop-shadow(0 0 18px rgba(168,85,247,0.5));
    }
    @keyframes levitate {
      0%,100% { transform: translateY(0) rotate(0deg); }
      50%      { transform: translateY(-11px) rotate(2deg); }
    }
    .hero-alias {
      font-size: 0.75rem; font-weight: 700;
      letter-spacing: 0.22em; text-transform: uppercase;
      color: var(--gold); margin-bottom: 0.9rem;
    }
    .hero-sub {
      font-size: 1.15rem; color: var(--muted);
      max-width: 580px; margin: 1.5rem 0 2.5rem;
      line-height: 1.8;
    }
    .hero-ctas { display: flex; gap: 1rem; flex-wrap: wrap; }
    .btn {
      display: inline-block; padding: 0.8rem 1.9rem;
      border-radius: 999px; font-weight: 700;
      font-size: 0.9rem; transition: all var(--ease);
    }
    .btn-fill {
      background: linear-gradient(135deg, var(--violet), var(--pink));
      color: #fff; box-shadow: var(--glow-v);
    }
    .btn-fill:hover { color: #fff; box-shadow: var(--glow-p); transform: translateY(-2px); }
    .btn-outline {
      border: 1px solid rgba(168,85,247,0.45);
      color: var(--violet);
      background: rgba(168,85,247,0.07);
      backdrop-filter: blur(8px);
    }
    .btn-outline:hover { color: var(--pink); border-color: rgba(255,110,199,0.5); background: rgba(255,110,199,0.07); }

    /* ── STORY ─────────────────────────────────────── */
    #story { padding: 8rem 0 6rem; }
    .story-grid {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 5rem; align-items: center;
    }
    .story-orb-wrap { display: flex; justify-content: center; align-items: center; }
    .story-orb {
      width: 270px; height: 270px; border-radius: 50%;
      background: radial-gradient(circle at 38% 32%, var(--bg-2), var(--bg-0));
      border: 1px solid rgba(168,85,247,0.28);
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 0 70px rgba(168,85,247,0.15),
                  0 0 140px rgba(255,110,199,0.06),
                  inset 0 0 50px rgba(10,1,24,0.6);
      position: relative;
    }
    .story-orb::after {
      content: ''; position: absolute; inset: -3px;
      border-radius: 50%;
      background: conic-gradient(var(--pink), var(--violet), var(--indigo), var(--pink));
      z-index: -1; opacity: 0.35; filter: blur(6px);
      animation: spin 12s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .story-orb img { width: 155px; height: 155px; }
    .story-copy h2 { margin-bottom: 0.25rem; }
    .story-copy p { color: var(--muted); font-size: 1.02rem; margin-bottom: 1.1rem; }
    .story-copy strong { color: var(--white); }
    .pull-quote {
      padding: 0.7rem 1.1rem;
      border-left: 3px solid var(--gold);
      background: rgba(251,191,36,0.07);
      border-radius: 0 8px 8px 0;
      color: var(--gold); font-style: italic;
      font-size: 1rem; margin: 1.25rem 0;
      line-height: 1.6;
    }
    .story-tag {
      display: inline-flex; align-items: center; gap: 0.4rem;
      margin-top: 0.5rem;
      font-size: 0.78rem; font-weight: 700;
      letter-spacing: 0.1em; text-transform: uppercase;
      color: var(--violet);
    }
    .story-tag::before { content: '◈'; font-size: 0.65rem; }

    /* ── WHAT'S HERE ───────────────────────────────── */
    #what-here {
      padding: 6rem 0;
      background: linear-gradient(180deg, transparent, rgba(45,27,78,0.22), transparent);
    }
    .sec-head { text-align: center; margin-bottom: 3.5rem; }
    .sec-head h2 { margin-bottom: 0.3rem; }
    .sec-sub { color: var(--muted); margin-top: 0.6rem; font-size: 1rem; }
    .features {
      display: grid; grid-template-columns: repeat(3, 1fr);
      gap: 1.4rem;
    }
    .f-card {
      padding: 1.8rem;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      backdrop-filter: blur(12px);
      transition: all var(--ease);
      position: relative; overflow: hidden;
    }
    .f-card::after {
      content: ''; position: absolute;
      top: 0; left: 0; right: 0; height: 2px;
      background: linear-gradient(90deg, transparent, var(--violet), transparent);
      opacity: 0; transition: opacity var(--ease);
    }
    .f-card:hover { border-color: rgba(168,85,247,0.38); transform: translateY(-4px); box-shadow: 0 14px 42px rgba(10,1,24,0.5); }
    .f-card:hover::after { opacity: 1; }
    .f-icon { font-size: 1.9rem; margin-bottom: 0.85rem; display: block; }
    .f-card h3 { color: var(--white); margin-bottom: 0.4rem; font-size: 1rem; }
    .f-card p { color: var(--muted); font-size: 0.88rem; line-height: 1.65; }
    .badge {
      display: inline-block; margin-top: 0.8rem;
      font-size: 0.66rem; font-weight: 800;
      letter-spacing: 0.12em; text-transform: uppercase;
      padding: 0.18rem 0.55rem; border-radius: 999px;
    }
    .b-free { background: rgba(99,102,241,0.15); color: var(--indigo); border: 1px solid rgba(99,102,241,0.28); }
    .b-sub  { background: rgba(251,191,36,0.12);  color: var(--gold);   border: 1px solid rgba(251,191,36,0.28); }
    .features-note {
      text-align: center; margin-top: 2.25rem;
      font-size: 0.88rem; color: var(--muted); font-style: italic;
      letter-spacing: 0.04em;
    }

    /* ── HOW IT WORKS ──────────────────────────────── */
    #how-it-works { padding: 6rem 0; }
    .tiers { display: grid; grid-template-columns: 1fr 1fr; gap: 1.75rem; margin-top: 3rem; }
    .tier {
      padding: 2.25rem; border-radius: 20px;
      border: 1px solid var(--border);
      backdrop-filter: blur(12px);
      position: relative; overflow: hidden;
    }
    .tier.t-free { background: rgba(45,27,78,0.42); }
    .tier.t-sub  {
      background: linear-gradient(145deg, rgba(168,85,247,0.09), rgba(255,110,199,0.04));
      border-color: rgba(255,110,199,0.28);
    }
    .tier-label {
      display: inline-block; margin-bottom: 1.1rem;
      font-size: 0.68rem; font-weight: 800;
      letter-spacing: 0.15em; text-transform: uppercase;
      padding: 0.28rem 0.75rem; border-radius: 999px;
    }
    .t-free .tier-label { background: rgba(99,102,241,0.18); color: var(--indigo); border: 1px solid rgba(99,102,241,0.28); }
    .t-sub  .tier-label { background: linear-gradient(135deg,var(--violet),var(--pink)); color: #fff; }
    .tier h3 { font-size: 1.35rem; color: var(--white); margin-bottom: 0.4rem; }
    .tier-desc { color: var(--muted); font-size: 0.9rem; margin-bottom: 1.4rem; }
    .tier-list { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; }
    .tier-list li {
      display: flex; align-items: flex-start; gap: 0.6rem;
      font-size: 0.93rem; color: var(--text);
    }
    .tier-list li::before {
      content: '◆'; font-size: 0.5rem;
      color: var(--violet); margin-top: 0.55em; flex-shrink: 0;
    }
    .t-sub .tier-list li::before { color: var(--pink); }
    .tier-note {
      margin-top: 1.5rem; font-size: 0.78rem;
      color: var(--muted); font-style: italic;
    }

    /* ── REBECCA'S PICK ────────────────────────────── */
    #rebeccas-pick { padding: 6rem 0; }
    .pick-wrap {
      max-width: 780px; margin: 0 auto;
      padding: 3rem 2.5rem;
      border-radius: 24px;
      background: linear-gradient(145deg, rgba(45,27,78,0.65), rgba(10,1,24,0.85));
      border: 1px solid rgba(255,110,199,0.22);
      text-align: center;
      backdrop-filter: blur(18px);
      position: relative; overflow: hidden;
    }
    .pick-wrap::before {
      content: ''; position: absolute; inset: 0;
      background: radial-gradient(ellipse at 50% 0%, rgba(255,110,199,0.07), transparent 65%);
      pointer-events: none;
    }
    .pick-icon { font-size: 2.2rem; display: block; margin-bottom: 1rem; }
    .pick-wrap h2 { margin-bottom: 0.65rem; }
    .pick-wrap h2 span {
      background: linear-gradient(90deg, var(--pink), var(--gold));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .pick-wrap p { color: var(--muted); font-size: 1rem; max-width: 480px; margin: 0 auto 1.75rem; }
    .pick-badges { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem; }
    .pick-badge {
      padding: 0.32rem 0.9rem; border-radius: 999px;
      font-size: 0.75rem; font-weight: 700;
    }
    .pb-free { background: rgba(99,102,241,0.14); border: 1px solid rgba(99,102,241,0.28); color: var(--indigo); }
    .pb-paid { background: rgba(255,110,199,0.12); border: 1px solid rgba(255,110,199,0.32); color: var(--pink); }
    .pick-disclaimer {
      margin-top: 1.5rem; font-size: 0.75rem;
      color: rgba(157,142,196,0.55); font-style: italic;
    }

    /* ── COMING ────────────────────────────────────── */
    #coming { padding: 6rem 0; }
    .roadmap {
      display: grid; grid-template-columns: repeat(3,1fr);
      gap: 1.25rem; margin-top: 3rem;
    }
    .rm-card {
      padding: 1.4rem 1.5rem;
      background: rgba(26,11,46,0.6);
      border: 1px solid rgba(99,102,241,0.14);
      border-radius: 14px; backdrop-filter: blur(8px);
      transition: all var(--ease);
    }
    .rm-card:hover { border-color: rgba(168,85,247,0.3); transform: translateY(-3px); }
    .rm-num {
      font-size: 0.65rem; font-weight: 800;
      letter-spacing: 0.16em; text-transform: uppercase;
      color: var(--violet); margin-bottom: 0.45rem;
    }
    .rm-card h3 { font-size: 0.98rem; color: var(--white); margin-bottom: 0.3rem; }
    .rm-card p { font-size: 0.83rem; color: var(--muted); line-height: 1.55; }
    .rm-status {
      display: inline-block; margin-top: 0.7rem;
      font-size: 0.62rem; font-weight: 800;
      letter-spacing: 0.1em; text-transform: uppercase;
      padding: 0.18rem 0.55rem; border-radius: 999px;
      background: rgba(251,191,36,0.09);
      color: var(--gold-dim);
      border: 1px solid rgba(251,191,36,0.2);
    }

    /* ── FINAL CTA ─────────────────────────────────── */
    #cta-final {
      padding: 8rem 0; text-align: center;
    }
    .cta-glow {
      position: absolute;
      width: 520px; height: 520px; border-radius: 50%;
      background: radial-gradient(circle, rgba(168,85,247,0.13), transparent 70%);
      top: 50%; left: 50%; transform: translate(-50%,-50%);
      pointer-events: none;
    }
    #cta-final h2 span {
      background: linear-gradient(135deg, var(--pink), var(--gold));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    #cta-final p { color: var(--muted); font-size: 1.05rem; margin: 1rem 0 2.25rem; }
    .cta-row { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

    /* ── LEGAL ─────────────────────────────────────── */
    #legal {
      padding: 5rem 0 4rem;
      background: rgba(10,1,24,0.75);
      border-top: 1px solid rgba(168,85,247,0.1);
    }
    #legal .sec-head h2 { color: var(--muted); font-size: 1.4rem; }
    .legal-grid {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 1.5rem; margin-bottom: 1.5rem;
    }
    .l-block {
      padding: 1.6rem;
      background: rgba(26,11,46,0.5);
      border: 1px solid rgba(168,85,247,0.1);
      border-radius: 12px;
    }
    .l-block h3 {
      font-size: 0.72rem; font-weight: 800;
      letter-spacing: 0.18em; text-transform: uppercase;
      color: var(--violet); margin-bottom: 0.65rem;
      display: flex; align-items: center; gap: 0.45rem;
    }
    .l-block h3::before { content: '§'; color: var(--pink); font-style: italic; }
    .l-block p { font-size: 0.83rem; color: var(--muted); line-height: 1.85; }
    .l-full {
      padding: 1.75rem 2rem; margin-bottom: 1.5rem;
      background: rgba(10,1,24,0.55);
      border: 1px solid rgba(255,110,199,0.1);
      border-radius: 12px;
    }
    .l-full h3 {
      font-size: 0.7rem; font-weight: 800;
      letter-spacing: 0.2em; text-transform: uppercase;
      color: var(--pink); margin-bottom: 0.85rem;
    }
    .l-full p { font-size: 0.8rem; color: var(--muted); line-height: 1.95; }
    .legal-stamp {
      text-align: center; padding-top: 2rem;
      border-top: 1px solid rgba(168,85,247,0.08);
      font-size: 0.73rem;
      color: rgba(157,142,196,0.45);
      line-height: 1.8;
    }

    /* ── FOOTER ────────────────────────────────────── */
    footer {
      padding: 3rem 0 2rem;
      border-top: 1px solid rgba(168,85,247,0.1);
      position: relative; z-index: 1;
    }
    .footer-grid {
      display: grid; grid-template-columns: 2fr 1fr 1fr;
      gap: 3rem; margin-bottom: 2rem;
    }
    .footer-brand img { height: 38px; width: auto; }
    .footer-brand p {
      color: var(--muted); font-size: 0.87rem;
      margin-top: 0.7rem; max-width: 280px; line-height: 1.7;
    }
    .footer-col h4 {
      font-size: 0.68rem; font-weight: 800;
      letter-spacing: 0.18em; text-transform: uppercase;
      color: var(--muted); margin-bottom: 1rem;
    }
    .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 0.55rem; }
    .footer-col ul a { font-size: 0.87rem; color: var(--muted); transition: color var(--ease); }
    .footer-col ul a:hover { color: var(--pink); }
    .footer-bottom {
      display: flex; justify-content: space-between; align-items: center;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(168,85,247,0.07);
      font-size: 0.76rem; color: rgba(157,142,196,0.45);
      flex-wrap: wrap; gap: 0.75rem;
    }
    .footer-tag { color: var(--violet); opacity: 0.6; font-style: italic; }

    /* ── RESPONSIVE ────────────────────────────────── */
    @media (max-width: 900px) {
      .story-grid    { grid-template-columns: 1fr; gap: 3rem; }
      .story-orb-wrap { order: -1; }
      .features      { grid-template-columns: repeat(2,1fr); }
      .tiers         { grid-template-columns: 1fr; }
      .roadmap       { grid-template-columns: repeat(2,1fr); }
      .footer-grid   { grid-template-columns: 1fr 1fr; }
      .footer-brand  { grid-column: 1/-1; }
      .legal-grid    { grid-template-columns: 1fr; }
    }
    @media (max-width: 600px) {
      .nav-links { display: none; }
      .hamburger { display: flex; }
      .nav-links.open {
        display: flex; flex-direction: column;
        position: fixed; top: var(--nav-h); left: 0; right: 0;
        background: rgba(10,1,24,0.98);
        backdrop-filter: blur(18px);
        padding: 2rem; gap: 1.5rem;
        border-bottom: 1px solid rgba(168,85,247,0.14);
        z-index: 998;
      }
      .features    { grid-template-columns: 1fr; }
      .roadmap     { grid-template-columns: 1fr; }
      .footer-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

<canvas id="starfield"></canvas>

<!-- ═══════════════════════════════════════════════
     NAV
════════════════════════════════════════════════ -->
<nav id="nav">
  <a href="#hero" class="nav-brand">
    <img src="Quarters2Crypto/Q2C%20Pics/quarter2crypto_icon_v2.svg" alt="Q2C Icon">
    <span class="nav-brand-text">Quarters2Crypto</span>
  </a>
  <ul class="nav-links" id="nav-links">
    <li><a href="#story">My Story</a></li>
    <li><a href="#what-here">What's Here</a></li>
    <li><a href="#how-it-works">How It Works</a></li>
    <li><a href="#coming">Coming</a></li>
    <li><a href="#legal">Legal</a></li>
    <li><a href="https://substack.com/@quarters2crypto" target="_blank" rel="noopener" class="nav-sub">Subscribe</a></li>
  </ul>
  <div class="hamburger" id="hamburger" role="button" tabindex="0" aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </div>
</nav>

<!-- ═══════════════════════════════════════════════
     HERO
════════════════════════════════════════════════ -->
<section id="hero">
  <div class="hero-bg"></div>
  <div class="wrap">
    <div class="hero-inner">
      <p class="hero-alias">Quarters2Crypto · Field Notes from the Frontier</p>
      <img src="Quarters2Crypto/Q2C%20Pics/quarter2crypto_icon_v2.svg" alt="Q2C Emblem" class="hero-icon">
      <h1 class="grad-text">Turn Curiosity<br>Into Coin.</h1>
      <p class="hero-sub">
        Real-world experiments in Web3 income — without hype, without guru nonsense.
        A regular person navigating crypto so you don't have to make every mistake alone.
      </p>
      <div class="hero-ctas">
        <a href="#story" class="btn btn-fill">Start Here</a>
        <a href="https://substack.com/@quarters2crypto" target="_blank" rel="noopener" class="btn btn-outline">Join the Newsletter</a>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════
     STORY
════════════════════════════════════════════════ -->
<section id="story">
  <div class="wrap">
    <div class="story-grid">
      <div class="story-copy rv">
        <span class="eyebrow">The Origin</span>
        <h2>From <span class="pink">Pocket Change</span><br>to the Blockchain</h2>
        <div class="divider"></div>
        <p>
          I heard about Bitcoin in 2011. Tech nerd that I am — I thought it sounded cool,
          then did exactly nothing about it. By 2014, some kid at work was practically begging
          me to buy in. I handed him $100 and told him to figure it out. He couldn't.
          Neither of us did.
        </p>
        <p>
          Then 2017 hit. You know that feeling — <em>what am I doing with my life?</em>
          I deep-dived into crypto. Convinced I'd missed Bitcoin, I chased games and
          earn-to-play platforms instead. And then I discovered gas fees on Ethereum.
        </p>
        <div class="pull-quote">
          "The moment someone said 'Ethereum Killer' — I was all in like Flynn."
        </div>
        <p>
          Long story short: I landed on STEPN — a move-to-earn platform on Solana.
          Made some decent SOL. Still do. Not retirement money, but proof the plays are
          real when you find the right ones early.
        </p>
        <p>
          <strong>That's what this is.</strong> I'm Flaveon. I try things. I waste time
          on the wrong ones so you don't have to. Only I make the mistakes here.
        </p>
        <span class="story-tag">No finance degree. No guru status. Just field work.</span>
      </div>
      <div class="story-orb-wrap rv">
        <div class="story-orb">
          <img src="Quarters2Crypto/Q2C%20Pics/quarter2crypto_icon_v2.svg" alt="Q2C Emblem">
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════
     WHAT'S HERE
════════════════════════════════════════════════ -->
<section id="what-here">
  <div class="wrap">
    <div class="sec-head rv">
      <span class="eyebrow">The Field</span>
      <h2>What You'll Find <span class="pink">Here</span></h2>
      <div class="divider c"></div>
      <p class="sec-sub">No basics. No hand-holding. We focus on what you're actually being exposed to.</p>
    </div>
    <div class="features">
      <div class="f-card rv">
        <span class="f-icon">🔬</span>
        <h3>App Reviews</h3>
        <p>Projects promoted by major wallets and blockchains — what's being pushed to real users right now, evaluated honestly.</p>
        <span class="badge b-free">Free</span>
      </div>
      <div class="f-card rv">
        <span class="f-icon">📊</span>
        <h3>DeFi & Yield Strategy</h3>
        <p>Breakdowns of DeFi platforms, yield mechanics, and market strategies — with an honest read on real risk.</p>
        <span class="badge b-free">Free</span>
      </div>
      <div class="f-card rv">
        <span class="f-icon">📰</span>
        <h3>News & Market Editorial</h3>
        <p>We editorialize crypto news and related TradFi developments. What it actually means — not just what happened.</p>
        <span class="badge b-free">Free</span>
      </div>
      <div class="f-card rv">
        <span class="f-icon">🪂</span>
        <h3>Legitimate Airdrop Tracking</h3>
        <p>Upcoming drops we've vetted — real opportunities, not scams. Early access for subscribers before they go wide.</p>
        <span class="badge b-sub">Newsletter</span>
      </div>
      <div class="f-card rv">
        <span class="f-icon">🎲</span>
        <h3>Responsible Betting Analysis</h3>
        <p>Crypto gambling exists in this space whether we like it or not. We analyze platforms and strategies with full risk framing.</p>
        <span class="badge b-free">Free</span>
      </div>
      <div class="f-card rv">
        <span class="f-icon">💎</span>
        <h3>Deeper Cuts</h3>
        <p>Little-known tools, projects, and opportunities that don't make the front page. Subscriber-only research and insights.</p>
        <span class="badge b-sub">Newsletter</span>
      </div>
    </div>
    <p class="features-note">No hype. Just field notes.</p>
  </div>
</section>

<!-- ═══════════════════════════════════════════════
     HOW IT WORKS
════════════════════════════════════════════════ -->
<section id="how-it-works">
  <div class="wrap">
    <div class="sec-head rv">
      <span class="eyebrow">The Model</span>
      <h2>How This <span class="pink">Works</span></h2>
      <div class="divider c"></div>
    </div>
    <div class="tiers">
      <div class="tier t-free rv">
        <span class="tier-label">Free</span>
        <h3>Public Access</h3>
        <p class="tier-desc">The foundation — always available, always honest.</p>
        <ul class="tier-list">
          <li>Blockchain &amp; wallet-featured app reviews</li>
          <li>Beginner walkthroughs and guides</li>
          <li>Market commentary and news editorial</li>
          <li>Crypto betting platform analysis</li>
          <li>Weekly experiments and results</li>
        </ul>
      </div>
      <div class="tier t-sub rv">
        <span class="tier-label">Newsletter</span>
        <h3>Subscriber Access</h3>
        <p class="tier-desc">Deeper research. Earlier signals. Subscriber-only intelligence.</p>
        <ul class="tier-list">
          <li>Early airdrop tracking — vetted opportunities</li>
          <li>Advanced DeFi strategy breakdowns</li>
          <li>Little-known tools and projects before they surface</li>
          <li>Rebecca's Pick — curated weekly find</li>
          <li>Deeper cuts ahead of public release</li>
        </ul>
        <p class="tier-note">Paid tier launches once the foundation is built. Free subscribers get first access.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════
     REBECCA'S PICK
════════════════════════════════════════════════ -->
<section id="rebeccas-pick">
  <div class="wrap">
    <div class="pick-wrap rv">
      <span class="pick-icon">✦</span>
      <h2><span>Rebecca's Pick</span></h2>
      <p>
        One standout app, tool, or opportunity per cycle — selected by our AI research assistant Rebecca
        and reviewed by Flaveon. Free and subscriber variants each release. No filler. Just what's
        worth paying attention to this week.
      </p>

      <!-- AI Disclosure -->
      <div style="
        margin: 0 auto 1.25rem;
        max-width: 560px;
        padding: 0.75rem 1.1rem;
        border-radius: 10px;
        background: rgba(99,102,241,0.1);
        border: 1px solid rgba(99,102,241,0.25);
        font-size: 0.78rem;
        color: var(--muted);
        line-height: 1.7;
        text-align: left;
      ">
        <strong style="color:var(--indigo); letter-spacing:0.08em; text-transform:uppercase; font-size:0.66rem;">⚙ AI-Generated Content</strong><br>
        Rebecca's Pick is researched and drafted by an AI assistant. All picks are reviewed but not professionally verified.
        <strong style="color:var(--text)">This is not financial advice.</strong> Not a recommendation to buy, sell, or use any product.
        All opinions are for informational purposes only. Do your own research before acting on anything here.
      </div>

      <!-- Win / Loss Tracker -->
      <div style="
        margin: 0 auto 1.75rem;
        max-width: 560px;
        border-radius: 12px;
        border: 1px solid rgba(255,110,199,0.18);
        overflow: hidden;
        font-size: 0.85rem;
      ">
        <div style="
          background: rgba(45,27,78,0.7);
          padding: 0.65rem 1.1rem;
          font-size: 0.68rem; font-weight: 800;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--muted);
          border-bottom: 1px solid rgba(168,85,247,0.12);
          text-align: left;
        ">Rebecca's Pick — All-Time Record</div>
        <div style="display:grid; grid-template-columns: repeat(3,1fr);">
          <div style="padding:1rem; text-align:center; border-right:1px solid rgba(168,85,247,0.1);">
            <div style="font-size:1.6rem; font-weight:800; color:#4ade80;" id="rp-wins">—</div>
            <div style="font-size:0.7rem; color:var(--muted); text-transform:uppercase; letter-spacing:0.1em; margin-top:0.2rem;">Wins</div>
          </div>
          <div style="padding:1rem; text-align:center; border-right:1px solid rgba(168,85,247,0.1);">
            <div style="font-size:1.6rem; font-weight:800; color:#f87171;" id="rp-losses">—</div>
            <div style="font-size:0.7rem; color:var(--muted); text-transform:uppercase; letter-spacing:0.1em; margin-top:0.2rem;">Losses</div>
          </div>
          <div style="padding:1rem; text-align:center;">
            <div style="font-size:1.6rem; font-weight:800; color:var(--gold);" id="rp-pending">—</div>
            <div style="font-size:0.7rem; color:var(--muted); text-transform:uppercase; letter-spacing:0.1em; margin-top:0.2rem;">Pending</div>
          </div>
        </div>
        <div style="
          padding: 0.5rem 1.1rem;
          background: rgba(10,1,24,0.4);
          font-size: 0.7rem; color: rgba(157,142,196,0.5);
          font-style: italic; text-align: left;
          border-top: 1px solid rgba(168,85,247,0.08);
        ">Tracker launches with first pick. Win/loss defined by stated criteria at time of pick — not financial performance.</div>
      </div>

      <div class="pick-badges">
        <span class="pick-badge pb-free">Free Variant</span>
        <span class="pick-badge pb-paid">Subscriber Variant</span>
      </div>
      <a href="https://substack.com/@quarters2crypto" target="_blank" rel="noopener" class="btn btn-fill">Subscribe for Early Access</a>
      <p class="pick-disclaimer">
        AI-researched. Human-reviewed. Not financial advice. Not a fiduciary. For informational purposes only.
        All picks represent personal opinion. Do your own research.
      </p>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════
     COMING
════════════════════════════════════════════════ -->
<section id="coming">
  <div class="wrap">
    <div class="sec-head rv">
      <span class="eyebrow">The Universe</span>
      <h2>What's <span class="violet">Coming</span></h2>
      <div class="divider c"></div>
      <p class="sec-sub">Quarters2Crypto is a launchpad. These are the projects we're building toward.</p>
    </div>
    <div class="roadmap">
      <div class="rm-card rv">
        <div class="rm-num">Phase 01</div>
        <h3>Media &amp; Content</h3>
        <p>Comics, YouTube, and social presence. The Q2C voice, expanded beyond text.</p>
        <span class="rm-status">In Motion</span>
      </div>
      <div class="rm-card rv">
        <div class="rm-num">Phase 02</div>
        <h3>AI Infrastructure</h3>
        <p>Public AI built for people, not corporations. Includes a legislative support initiative.</p>
        <span class="rm-status">Coming Soon</span>
      </div>
      <div class="rm-card rv">
        <div class="rm-num">Phase 03</div>
        <h3>Gnosis</h3>
        <p>Civic participation rebuilt from scratch. Transparent AI. 60 seconds a day. Collective decision-making that respects your time.</p>
        <span class="rm-status">In Design</span>
      </div>
      <div class="rm-card rv">
        <div class="rm-num">Phase 04</div>
        <h3>EpicOS</h3>
        <p>Privacy-first home intelligence. Local-first. Your devices, your data, your rules. Running on PinkPerfection — our home server node.</p>
        <span class="rm-status">In Development</span>
      </div>
      <div class="rm-card rv">
        <div class="rm-num">Phase 05</div>
        <h3>Market Integration</h3>
        <p>Etsy, eBay, and marketplace connectivity — where crypto meets everyday commerce.</p>
        <span class="rm-status">Planned</span>
      </div>
      <div class="rm-card rv">
        <div class="rm-num">Phase 06</div>
        <h3>BCI Compression</h3>
        <p>Memory compression for AI agents. 90% token reduction. Human-like recall patterns.</p>
        <span class="rm-status">Planned</span>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════
     FINAL CTA
════════════════════════════════════════════════ -->
<section id="cta-final">
  <div class="wrap" style="position:relative; text-align:center;">
    <div class="cta-glow"></div>
    <div class="rv">
      <span class="eyebrow">Start Here</span>
      <h2>Start Your <span>Web3 Income Lab</span> Today.</h2>
      <div class="divider c"></div>
      <p>We're building in public. Come make mistakes with us — only Flaveon gets hurt.</p>
      <div class="cta-row">
        <a href="#story" class="btn btn-fill">Read the Start Guide</a>
        <a href="https://substack.com/@quarters2crypto" target="_blank" rel="noopener" class="btn btn-outline">Subscribe for Updates</a>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════
     LEGAL
════════════════════════════════════════════════ -->
<section id="legal">
  <div class="wrap">
    <div class="sec-head rv">
      <span class="eyebrow">Important Disclosures</span>
      <h2>Legal &amp; Disclaimers</h2>
      <div class="divider c"></div>
    </div>

    <div class="legal-grid">
      <div class="l-block rv">
        <h3>Not Financial Advice</h3>
        <p>All content published on Quarters2Crypto — including articles, reviews, newsletters, videos, and social media posts — is for <strong style="color:var(--text)">informational and entertainment purposes only</strong>. Nothing on this site constitutes financial advice, investment advice, trading advice, or any other form of professional financial guidance of any kind.</p>
      </div>
      <div class="l-block rv">
        <h3>Not a Fiduciary</h3>
        <p>Flaveon and Quarters2Crypto are <strong style="color:var(--text)">not registered investment advisors, broker-dealers, financial planners, or fiduciaries</strong> of any kind. We hold no professional financial licenses. We are not qualified to, and do not provide, personalized financial, legal, or tax advice under any circumstances.</p>
      </div>
      <div class="l-block rv">
        <h3>Do Your Own Research</h3>
        <p>Crypto assets are <strong style="color:var(--text)">highly speculative and volatile</strong>. Past performance is not indicative of future results. Any mention of specific projects, platforms, tokens, or strategies reflects personal experience and opinion only. Always conduct thorough independent due diligence before making any financial decision.</p>
      </div>
      <div class="l-block rv">
        <h3>Opinions Are Personal</h3>
        <p>All views, analysis, and commentary expressed on this platform are <strong style="color:var(--text)">solely those of Flaveon and/or the Q2C team</strong> at the time of publication. They do not represent the views of any affiliated entities, sponsors, or third parties. Opinions may change without notice and without obligation to update.</p>
      </div>
    </div>

    <div class="l-full rv">
      <h3>Gambling &amp; Betting Content — Special Disclaimer</h3>
      <p>
        Quarters2Crypto occasionally features content analyzing cryptocurrency-based gambling and betting platforms and associated strategies. This content is presented <strong style="color:var(--text)">strictly for informational and analytical purposes only</strong>. We do not endorse, promote, encourage, or facilitate gambling of any kind. Crypto betting involves substantial risk of loss and is inherently speculative. Gambling may be illegal in your jurisdiction — it is your sole responsibility to verify and comply with all applicable local laws before participating in any gambling activity.
        <br><br>
        If you or someone you know has a gambling problem, please seek help immediately. Contact the <strong style="color:var(--text)">National Problem Gambling Helpline: 1-800-522-4700</strong> (US) or your regional equivalent.
        <br><br>
        <strong style="color:var(--pink)">Never gamble with funds you cannot afford to lose entirely.</strong>
      </p>
    </div>

    <div class="l-full rv">
      <h3>Cryptocurrency Risk Warning</h3>
      <p>
        Investing in, trading, or otherwise engaging with cryptocurrencies and digital assets carries <strong style="color:var(--text)">significant financial risk</strong>, including the possibility of total and permanent loss of capital. The cryptocurrency market is largely unregulated in many jurisdictions, subject to extreme price volatility, susceptible to hacking, technical failure, and fraud, and may be materially affected by regulatory changes at any time and without notice.
        <br><br>
        Airdrop participation, DeFi protocol interactions, yield-generating strategies, and move-to-earn or play-to-earn platforms carry additional smart contract risk, counterparty risk, and liquidity risk. Past earnings described in our content — including personal results such as STEPN — are <strong style="color:var(--text)">not typical and not guaranteed</strong>.
        <br><br>
        <strong style="color:var(--pink)">Only engage with capital you are fully prepared to lose entirely. This is not a recommendation to buy, sell, or hold any asset.</strong>
      </p>
    </div>

    <div class="l-full rv">
      <h3>Affiliate &amp; Sponsorship Disclosure</h3>
      <p>
        Some content on this site may involve affiliate relationships, referral codes, or sponsored placements. When this is the case, it will be <strong style="color:var(--text)">clearly and prominently disclosed</strong> within the relevant content prior to or at the point of any recommendation. Affiliate relationships do not influence our editorial decisions, assessments, or ratings. We only feature platforms and products we have personally evaluated. Compensation received, if any, does not constitute an endorsement of quality, safety, or suitability for any particular user.
      </p>
    </div>

    <div class="legal-stamp">
      <p>© 2026 Quarters2Crypto &nbsp;·&nbsp; quarters2crypto.com &nbsp;·&nbsp; All rights reserved.</p>
      <p>Content is for informational purposes only. Not financial advice. Not investment advice. Do your own research. All opinions are personal and do not constitute professional guidance of any kind.</p>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════
     FOOTER
════════════════════════════════════════════════ -->
<footer>
  <div class="wrap">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="Quarters2Crypto/Q2C%20Pics/quarter2crypto_logo.svg" alt="Quarters2Crypto">
        <p>Real-world experiments in Web3 income. Built in public by Flaveon. No hype. Just field notes.</p>
      </div>
      <div class="footer-col">
        <h4>Navigate</h4>
        <ul>
          <li><a href="#story">My Story</a></li>
          <li><a href="#what-here">What's Here</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#rebeccas-pick">Rebecca's Pick</a></li>
          <li><a href="#coming">Coming Soon</a></li>
          <li><a href="#legal">Legal</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Connect</h4>
        <ul>
          <li><a href="https://substack.com/@quarters2crypto" target="_blank" rel="noopener">Newsletter</a></li>
          <li><a href="https://www.youtube.com/channel/UC3O_UpBRqOg7PBhRPRUqhTw" target="_blank" rel="noopener">YouTube</a></li>
          <li><a href="https://x.com/flaveon316" target="_blank" rel="noopener">Twitter / X</a></li>
          <li><a href="https://github.com/Flaveon" target="_blank" rel="noopener">GitHub</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Quarters2Crypto &nbsp;·&nbsp; Not financial advice.</span>
      <span class="footer-tag">Turn Curiosity Into Coin.</span>
    </div>
  </div>
</footer>

<!-- ═══════════════════════════════════════════════
     SCRIPTS
════════════════════════════════════════════════ -->
<script>
/* ── STARFIELD ───────────────────────────────────── */
(function () {
  const canvas = document.getElementById('starfield');
  const ctx    = canvas.getContext('2d');
  let   stars  = [];
  const N      = 190;
  const COLORS = ['#ffffff','#a855f7','#ff6ec7','#4da6ff','#fbbf24'];

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function seed() {
    stars = Array.from({ length: N }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      r:  Math.random() * 1.35 + 0.15,
      a:  Math.random() * 0.65 + 0.3,
      sp: Math.random() * 0.18 + 0.04,
      tw: Math.random() * Math.PI * 2,
      c:  COLORS[Math.floor(Math.random() * COLORS.length)]
    }));
  }

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of stars) {
      s.tw += 0.011;
      const a = s.a * (0.55 + 0.45 * Math.sin(s.tw));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.c;
      ctx.globalAlpha = a;
      ctx.fill();
      s.y -= s.sp * 0.09;
      if (s.y < -2) { s.y = canvas.height + 2; s.x = Math.random() * canvas.width; }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(frame);
  }

  window.addEventListener('resize', () => { resize(); seed(); }, { passive: true });
  resize(); seed(); requestAnimationFrame(frame);
})();

/* ── NAV SCROLL ──────────────────────────────────── */
(function () {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
})();

/* ── HAMBURGER ───────────────────────────────────── */
(function () {
  const btn   = document.getElementById('hamburger');
  const links = document.getElementById('nav-links');
  const toggle = () => links.classList.toggle('open');
  btn.addEventListener('click', toggle);
  btn.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') toggle(); });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
})();

/* ── ACTIVE NAV LINK ─────────────────────────────── */
(function () {
  const sections = [...document.querySelectorAll('section[id]')];
  const links    = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  window.addEventListener('scroll', () => {
    let cur = '';
    for (const s of sections) {
      if (window.scrollY >= s.offsetTop - 90) cur = s.id;
    }
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
    });
  }, { passive: true });
})();

/* ── SCROLL REVEAL ───────────────────────────────── */
(function () {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const parent   = entry.target.parentElement;
      const siblings = [...parent.querySelectorAll('.rv:not(.in)')];
      const idx      = siblings.indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('in'), Math.min(idx * 85, 380));
      io.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -36px 0px' });

  document.querySelectorAll('.rv').forEach(el => io.observe(el));
})();
</script>

</body>
</html>
