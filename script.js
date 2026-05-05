:root {
    --bg-dark: #0a0a0c;
    --purple: #8a2be2;
    --blue-neon: #00f2ff;
    --text-main: #e0e0e0;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    background-color: var(--bg-dark);
    color: var(--text-main);
    font-family: 'Rajdhani', sans-serif;
    overflow-x: hidden;
}

h1, h2, h3 { font-family: 'Orbitron', sans-serif; }

/* Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    padding: 20px 10%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    width: 100%;
    z-index: 1000;
    border-bottom: 1px solid var(--purple);
}

.logo { font-size: 1.5rem; font-weight: bold; letter-spacing: 2px; }
.logo span { color: var(--blue-neon); }
.nav-links { list-style: none; display: flex; }
.nav-links li { margin-left: 20px; }
.nav-links a { text-decoration: none; color: white; transition: 0.3s; }
.nav-links a:hover { color: var(--blue-neon); text-shadow: 0 0 10px var(--blue-neon); }

/* Hero Section */
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: radial-gradient(circle, #1a0033 0%, #0a0a0c 100%);
    position: relative;
}

.glow-text {
    font-size: 4rem;
    color: white;
    text-shadow: 0 0 20px var(--purple), 0 0 40px var(--blue-neon);
    margin-bottom: 10px;
}

.highlight-box {
    background: rgba(138, 43, 226, 0.2);
    padding: 10px 20px;
    border: 1px solid var(--purple);
    margin: 20px 0;
    display: inline-block;
}

.btn-main {
    display: inline-block;
    padding: 15px 40px;
    background: var(--purple);
    color: white;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    box-shadow: 0 0 15px var(--purple);
    transition: 0.4s;
}

.btn-main:hover { transform: scale(1.1); box-shadow: 0 0 30px var(--blue-neon); }

/* Karakter Dekorasi */
.char-decoration {
    position: absolute;
    bottom: 0;
    opacity: 0.3;
    pointer-events: none;
    width: 400px;
}
.char-left { left: 0; }

/* Download Section */
.container { padding: 100px 10%; }
.section-title { text-align: center; margin-bottom: 50px; color: var(--blue-neon); }

.download-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.download-card {
    background: #16161a;
    padding: 40px;
    border-radius: 15px;
    border: 1px solid #333;
    text-align: center;
    transition: 0.3s;
}

.download-card:hover { border-color: var(--blue-neon); transform: translateY(-10px); }

.btn-download {
    display: block;
    margin-top: 20px;
    padding: 12px;
    text-decoration: none;
    color: white;
    border-radius: 5px;
    font-weight: bold;
}
.pc { background: #3a0088; box-shadow: 0 0 10px #3a0088; }
.android { background: #00883a; box-shadow: 0 0 10px #00883a; }

/* Changelog */
.changelog-item {
    background: #111;
    border-left: 4px solid var(--purple);
    margin-bottom: 20px;
    padding: 20px;
}

.version-tag { font-family: 'Orbitron'; color: var(--blue-neon); margin-bottom: 10px; }
.changelog-content ul { list-style: none; margin-top: 10px; }
.new::before { content: "✦ "; color: lime; }
.fix::before { content: "✔ "; color: orange; }
.imp::before { content: "▲ "; color: var(--blue-neon); }

footer { text-align: center; padding: 50px; background: #050505; border-top: 1px solid #222; }
.disclaimer { font-size: 0.8rem; color: #666; margin-top: 10px; }

@media (max-width: 768px) {
    .glow-text { font-size: 2.5rem; }
    .char-decoration { display: none; }
}
