// src/App.jsx
export default function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="wrap">
          <div className="left">
            <div className="pill">
              <span className="dot" />
              Trusted since 2006
            </div>

            <h1 className="h1">
              Building spaces that shape the future
            </h1>

            <p className="lead">
              Residential, commercial and infrastructure projects across Odisha with quality, timelines and integrity at the core. [web:12]
            </p>

            <div className="ctaRow">
              <a className="btn primary" href="#projects">Explore projects</a>
              <a className="btn outline" href="#contact">Get a quote</a>
            </div>

            <ul className="stats">
              <li>
                <span className="n">18+</span>
                <span className="l">Years</span>
              </li>
              <li>
                <span className="n">120+</span>
                <span className="l">Projects</span>
              </li>
              <li>
                <span className="n">12+</span>
                <span className="l">Cities</span>
              </li>
            </ul>
          </div>

          <div className="right">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop"
                alt="Construction skyline"
                className="photo"
                loading="eager"
              />
              <div className="glow" />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        :root{
          --bg:#0b0f14;
          --ink:#e9eef6;
          --muted:#9fb1c9;
          --card:#121922;
          --border:#203246;
          --accent:#f2b11b;
          --ring:#2b4660;
        }
        *{box-sizing:border-box}
        html,body,#root{height:100%}
        body{
          margin:0;
          background:
            radial-gradient(1000px 500px at 75% -10%, #152131 0%, transparent 60%),
            linear-gradient(180deg, #0b0f14 0%, #070a0e 100%);
          color:var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial;
        }
        a{text-decoration:none;color:inherit}

        .hero{
          position:relative;
          min-height:100svh;
          display:grid;
          align-items:center;
          padding: clamp(20px,4vw,40px) 0;
        }
        .wrap{
          width:min(1200px,92vw);
          margin:0 auto;
          display:grid;
          grid-template-columns: 1.05fr 1fr;
          gap: clamp(16px,3vw,36px);
        }
        .left{
          align-self:center;
          animation:fadeIn .6s ease-out both;
        }
        .pill{
          display:inline-flex;
          align-items:center;
          gap:10px;
          color:var(--muted);
          background:linear-gradient(180deg,#152131,#0f1722);
          border:1px solid #223347;
          padding:8px 12px;
          border-radius:999px;
          font-weight:600;
          box-shadow:0 0 0 4px rgba(43,70,96,.35) inset;
        }
        .dot{width:8px;height:8px;border-radius:50%;background:radial-gradient(circle at 30% 30%, #ffe9a6, var(--accent));box-shadow:0 0 0 4px rgba(242,177,27,.25)}
        .h1{
          margin:14px 0 6px;
          font-size: clamp(32px,4.6vw,56px);
          line-height:1.05;
          letter-spacing:-.02em;
          text-wrap:balance;
          text-shadow:0 8px 40px rgba(0,0,0,.45);
        }
        .lead{
          margin:10px 0 22px;
          color:var(--muted);
          font-size: clamp(16px,1.8vw,18px);
          max-width: 54ch;
        }
        .ctaRow{display:flex;gap:12px;margin:20px 0 26px}
        .btn{
          display:inline-flex;align-items:center;justify-content:center;
          height:44px;padding:0 18px;border-radius:10px;border:1px solid transparent;
          font-weight:700;letter-spacing:.2px;transition:transform .2s ease, filter .2s ease, background .2s ease, border-color .2s ease;
        }
        .btn:hover{transform:translateY(-1px)}
        .primary{
          background:linear-gradient(180deg,#ffd15c,var(--accent));
          color:#1a1300; text-shadow:0 1px 0 rgba(255,255,255,.25);
          box-shadow:0 8px 30px rgba(242,177,27,.28);
        }
        .primary:hover{filter:brightness(1.04)}
        .outline{
          background:transparent;border-color:#2a3c52;color:var(--ink)
        }
        .outline:hover{background:rgba(42,60,82,.18)}
        .stats{
          list-style:none;margin:16px 0 0;padding:0;
          display:grid;grid-auto-flow:column;gap: clamp(12px,2.2vw,24px);
        }
        .stats li{
          background:linear-gradient(180deg,#101821,#0c121a);
          border:1px solid #1f2c3c;border-radius:14px;padding:12px 14px;min-width:110px;
          box-shadow:0 10px 40px rgba(0,0,0,.25);
          transition:transform .3s ease,border-color .3s ease;
        }
        .stats li:hover{transform:translateY(-2px);border-color:var(--ring)}
        .n{
          display:block;font-size: clamp(22px,2.8vw,30px);font-weight:800;letter-spacing:-.02em;
          background:linear-gradient(180deg,#fff,#cfe3ff);-webkit-background-clip:text;background-clip:text;color:transparent;
        }
        .l{display:block;color:var(--muted);font-size:13px;margin-top:2px}

        .right{display:grid;align-items:end}
        .card{
          position:relative;aspect-ratio:4/5;border-radius:18px;overflow:hidden;
          border:1px solid var(--border);
          background:linear-gradient(180deg,#0d141c,#0a0f15);
          box-shadow:0 20px 60px rgba(0,0,0,.45), 0 0 0 6px rgba(39,64,86,.22) inset;
          transform:translateY(14px) scale(.985);opacity:.001;
          animation:pop .7s .1s cubic-bezier(.2,.8,.2,1) forwards;
        }
        .photo{width:100%;height:100%;object-fit:cover;filter:contrast(1.02) saturate(1.04)}
        .glow{
          position:absolute;inset:auto -20% -14% -20%;height:52%;
          background:
            radial-gradient(45% 60% at 50% 0%, rgba(101,195,255,.26), transparent 70%),
            radial-gradient(60% 70% at 50% 20%, rgba(255,209,92,.20), transparent 80%);
          filter:blur(22px);pointer-events:none;mix-blend-mode:screen;
        }

        @keyframes pop{to{transform:translateY(0) scale(1);opacity:1}}
        @keyframes fadeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}

        @media (max-width: 980px){
          .wrap{grid-template-columns:1fr;gap:22px}
          .stats{grid-auto-flow:row;grid-template-columns:repeat(3,1fr)}
        }
        @media (prefers-reduced-motion: reduce){
          .left,.card{animation:none !important;transform:none !important;opacity:1 !important}
        }
      `}</style>
    </main>
  );
}
