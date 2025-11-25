// src/PremiumProjects.jsx
export default function PremiumProjects() {
  const projects = [
    {
      title: "Royal Residency Phase 1",
      img: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=1600&auto=format&fit=crop",
      tag: "Premium",
      location: "Sambalpur, Odisha",
      details: "Spacious 3BHK residences with clubhouse and landscaped greens.",
    },
    {
      title: "Koshal Prestige",
      img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",
      tag: "Luxury",
      location: "Bhubaneswar, Odisha",
      details: "High-rise luxury apartments near business district.",
    },
    {
      title: "Koshal Residency",
      img: "https://images.unsplash.com/photo-1430285561322-7808604715df?q=80&w=1600&auto=format&fit=crop",
      tag: "Apartments",
      location: "Sambalpur, Odisha",
      details: "Modern towers with community amenities and retail edge.",
    },
    {
      title: "Koshal Homes",
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
      tag: "Residences",
      location: "Odisha",
      details: "Low-rise premium homes with efficient layouts.",
    },
    {
      title: "Koshal Imperial",
      img: "https://images.unsplash.com/photo-1560448075-bb4caa6c0f11?q=80&w=1600&auto=format&fit=crop",
      tag: "Premium",
      location: "Odisha",
      details: "Premium residences with grand entrance lobby.",
    },
    {
      title: "Koshal Spaces",
      img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop",
      tag: "Commercial",
      location: "Odisha",
      details: "Grade-A commercial spaces for offices and retail.",
    },
    {
      title: "Koshal Prime",
      img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop",
      tag: "Mixed-use",
      location: "Odisha",
      details: "Integrated living with retail conveniences.",
    },
    {
      title: "Koshal Luxotica",
      img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1600&auto=format&fit=crop",
      tag: "Luxury",
      location: "Odisha",
      details: "Signature luxury tower with premium finishes.",
    },
  ]; /* Names/section context aligned to Premium Projects area. [web:12] */

  return (
    <section id="projects" className="projects">
      <div className="inner">
        <div className="head">
          <h2 className="title">Our Premium Projects</h2>
          <p className="desc">
            Explore marquee residential and commercial developments delivered across key cities in Odisha. [web:12]
          </p>
        </div>

        <div className="grid">
          {projects.map((p) => (
            <div key={p.title} className="card">
              <div className="media">
                <img src={p.img} alt={p.title} loading="lazy" />
                <span className="chip">{p.tag}</span>
              </div>

              <div className="meta">
                <h3 className="name">{p.title}</h3>
                <p className="loc">{p.location}</p>
                <p className="details">{p.details}</p>

                <div className="actions">
                  <button className="glassBtn withArrow">
                    <span>View details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom centered CTA in normal flow to avoid extra space issues */}
        <div className="bottomCta">
          <a href="#projects" className="glassBtn xl withArrow">
            <span>View Project</span>
          </a>
        </div>
      </div>

      <style>{`
        :root{
          --ink:#e9eef6;
          --muted:#9fb1c9;
          --card:#0f151d;
          --card2:#121922;
          --b:#1e2b3b;
          --ring:#274056;
          --accent:#f2b11b;
          --brand-gold:#E2AE20;
          --glass-bg: rgba(255,255,255,0.12);
          --glass-brd: rgba(255,255,255,0.24);
          --glass-shadow: 0 8px 30px rgba(0,0,0,0.25);
        }

        .projects{
          padding: clamp(40px,8vw,96px) 0;
          background: linear-gradient(180deg, #0a1016 0%, #0b1118 100%);
          border-top: 1px solid #1b2a3b;
        } /* Standard section padding and divider. [web:12] */

        .inner{
          width: min(1280px, 94vw);
          margin: 0 auto;
          padding-bottom: 0;
        } /* Remove extra reserved space to eliminate bottom gap. [web:117] */

        .head{
          margin-bottom: clamp(20px,4vw,36px);
          text-align: center;
        } /* Centered heading block. [web:12] */
        .title{
          margin: 0 0 10px;
          color: var(--brand-gold);
          font-size: clamp(28px, 5vw, 56px);
          letter-spacing: -.01em;
        } /* Requested gold color and larger size. [web:12] */
        .desc{
          margin: 0 auto;
          color: var(--muted);
          max-width: 70ch;
          font-size: clamp(16px, 1.6vw, 20px);
          line-height: 1.6;
        } /* Centered, wider readable width. [web:12] */

        .grid{
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(14px, 2.2vw, 22px);
        } /* Responsive grid of cards. [web:12] */
        @media (max-width: 1200px){
          .grid{ grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (max-width: 820px){
          .grid{ grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 540px){
          .grid{ grid-template-columns: 1fr; }
        } /* Adaptive columns for smaller viewports. [web:12] */

        .card{
          display: flex;
          flex-direction: column;
          background: linear-gradient(180deg, var(--card), var(--card2));
          border: 1px solid var(--b);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 36px rgba(0,0,0,.28);
          transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
        } /* Elevated card feel. [web:12] */
        .card:hover{
          transform: translateY(-4px);
          border-color: var(--ring);
          box-shadow: 0 16px 50px rgba(0,0,0,.35);
        } /* Hover elevation. [web:12] */

        .media{
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #0b0f14;
        } /* Media frame with fixed aspect ratio. [web:12] */
        .media img{
          width: 100%; height: 100%; object-fit: cover;
          transform: scale(1.03);
          transition: transform .4s ease, filter .4s ease;
          filter: contrast(1.05) saturate(1.05);
        } /* Subtle image zoom. [web:12] */
        .card:hover .media img{ transform: scale(1.07); } /* Hover zoom. [web:12] */

        .chip{
          position: absolute; left: 12px; top: 12px;
          display: inline-flex; align-items: center;
          padding: 7px 12px; border-radius: 999px;
          font-size: 12px; font-weight: 800; letter-spacing: .2px;
          color: #1a1300;
          background: linear-gradient(180deg, #ffd15c, var(--accent));
          box-shadow: 0 8px 24px rgba(242,177,27,.3);
        } /* Tag chip for quick category. [web:12] */

        .meta{ padding: 14px 14px 16px; display: grid; gap: 8px; } /* Card content spacing. [web:12] */
        .name{
          margin: 2px 0 0;
          font-size: clamp(17px,1.6vw,22px);
          letter-spacing: -.01em;
        } /* Card title. [web:12] */
        .loc{
          margin: 0; color: var(--muted);
          font-size: 13px;
        } /* Location line. [web:12] */
        .details{
          margin: 2px 0 6px; color: var(--ink);
          opacity: .85; font-size: 14px;
        } /* Brief project details. [web:12] */

        .actions{ display: flex; gap: 10px; margin-top: 4px; } /* CTA row. [web:12] */

        /* Glass button + arrow */
        .glassBtn{
          appearance: none;
          border: 1px solid var(--glass-brd);
          color: var(--ink);
          background: var(--glass-bg);
          padding: 10px 14px;
          height: 40px;
          border-radius: 12px;
          font-weight: 700;
          letter-spacing: .2px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: var(--glass-shadow);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          cursor: pointer;
          transition: transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease;
        } /* Frosted CTA using blur. [web:117] */
        .glassBtn:hover{
          transform: translateY(-1px);
          background: rgba(255,255,255,0.16);
          border-color: rgba(255,255,255,0.32);
          box-shadow: 0 12px 40px rgba(0,0,0,0.35);
        } /* Hover polish. [web:117] */
        .glassBtn:active{ transform: translateY(0); } /* Press feedback. [web:117] */

        .withArrow::after{
          content: "→";
          display: inline-block;
          transform: translateX(0);
          transition: transform .2s ease;
          opacity: .95;
        } /* Arrow via pseudo-element. [web:96] */
        .withArrow:hover::after{
          transform: translateX(4px);
        } /* Arrow slide on hover. [web:96] */

        /* Bottom CTA centered in normal flow to avoid extra space */
        .bottomCta{
          display: flex;
          justify-content: center;
          margin-top: clamp(18px,3.2vw,28px);
        } /* Natural spacing; no absolute positioning. [web:117] */

        .glassBtn.xl{
          height: 48px;
          padding: 12px 18px;
          border-radius: 14px;
          font-size: 15px;
        } /* Slightly larger bottom CTA for prominence. [web:117] */
      `}</style>
    </section>
  );
}
