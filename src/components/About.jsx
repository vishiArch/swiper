// src/AboutSection.jsx
import { useEffect, useRef, useState } from "react";
import { FaAward } from "react-icons/fa";
import { PiBuildingApartmentBold } from "react-icons/pi";
import { LiaHandshakeSolid } from "react-icons/lia";
import { LuLeaf } from "react-icons/lu"; // kept sustainability

// Minimal in-view hook (no external libs)
function useInView({ threshold = 0.2, once = true } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) obs.disconnect();
        } else if (!once) setInView(false);
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, once]);
  return [ref, inView];
}

export default function AboutSection() {
  const [ref, inView] = useInView({ threshold: 0.2, once: true });

  // Removed Transparency & Integrity and Timely Delivery
  const features = [
    { icon: FaAward, title: "18+ Years Experience", description: "Proven track record with successful projects since 2006" },
    { icon: PiBuildingApartmentBold, title: "Premium Quality", description: "Expertise in luxury housing, commercial, and mixed-use developments" },
    { icon: LiaHandshakeSolid, title: "Strong Partnerships", description: "Trusted relationships with suppliers, contractors, and authorities" },
    { icon: LuLeaf, title: "Sustainable Building", description: "Focus on eco-friendly and sustainable building practices" },
  ]; // Trimmed to four, per request. [web:12]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="grid2">
          {/* Left content */}
          <div ref={ref} className={`card strong slide-left ${inView ? "in" : ""}`}>
            <p className="eyebrow">About Koshal Builder</p>
            <h2 className="headline">
              Building Dreams <span className="grad">Since 2006</span>
            </h2>
            <div className="copy">
              <p className="p-lg">
                <strong>Koshal Builder Pvt. Ltd., established in 2006 in Odisha,</strong> has been a trusted name in real estate for over 18 years. [web:12]
              </p>
              <p className="p">
                We specialize in <strong>residential, commercial, and mixed-use developments</strong>, delivering projects on time with a focus on <strong>innovation, sustainability, and client satisfaction</strong>. [web:12]
              </p>
              <p className="p">
                Our commitment to excellence and attention to detail has made us one of the most respected builders in Odisha. [web:12]
              </p>
            </div>

            <div className="blob a" />
            <div className="blob b" />
          </div>

          {/* Right: exactly four feature cards (two columns) */}
          <div className={`slide-right ${inView ? "in" : ""}`}>
            <div className="features">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div className="feature card soft" key={f.title} style={{ transitionDelay: `${80 + i * 60}ms` }}>
                    <div className="ico">
                      <Icon size={24} />
                    </div>
                    <h3 className="ft">{f.title}</h3>
                    <p className="fd">{f.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        :root{
          --bg:#0b0f14; --ink:#e9eef6; --muted:#9fb1c9; --card:#0f151d; --card2:#121922; --b:#1e2b3b; --ring:#274056; --accent:#f2b11b; --gold:#E2AE20;
        }

        /* No extra bottom space: modest section padding only */
        .about{
          padding: clamp(32px,6vw,64px) 0; /* tighter than before */
          background: linear-gradient(180deg,#0b1118 0%, #0a1016 100%);
          border-top: 1px solid #1b2a3b;
        } /* Compact section sizing. [web:117] */

        .container{ width:min(1200px,92vw); margin:0 auto; }

        .grid2{
          display:grid; grid-template-columns: 1.05fr 1fr;
          gap: clamp(18px,3vw,36px); align-items: start;
        } /* Two-column layout. [web:12] */

        .eyebrow{ color: var(--gold); font-weight: 700; text-transform: uppercase; letter-spacing: .18em; font-size: 12px; margin-bottom: 8px; }
        .headline{ font-size: clamp(28px,4.4vw,44px); margin: 0 0 10px; color: var(--ink); }
        .grad{ color: var(--gold); }
        .copy .p-lg{ font-size: 18px; color: var(--ink); opacity: .95; }
        .copy .p{ color: var(--muted); }

        .card{ border:1px solid var(--b); border-radius: 16px; background: linear-gradient(180deg,var(--card),var(--card2)); box-shadow: 0 10px 30px rgba(0,0,0,.26); }
        .card.strong{ padding: 20px; }
        .card.soft{ padding: 16px; }

        .features{ display:grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .feature .ico{ width: 48px; height: 48px; display:flex; align-items:center; justify-content:center; background: rgba(255,255,255,0.08); border-radius: 10px; margin-bottom: 10px; }
        .ft{ font-weight: 700; margin: 0 0 6px; color: var(--ink); }
        .fd{ margin: 0; color: var(--muted); }

        /* Decorative blobs */
        .blob{ position:absolute; pointer-events:none; filter: blur(28px); }
        .blob.a{ width: 120px; height: 120px; top:-18px; left:-18px; background: rgba(226,174,32,.18); border-radius: 999px; }
        .blob.b{ width: 160px; height: 160px; right:-22px; bottom:-22px; background: rgba(101,195,255,.14); border-radius: 999px; }

        /* In-view animations */
        .slide-left{ opacity:0; transform: translateX(-40px); transition: opacity .6s ease, transform .6s ease; }
        .slide-right{ opacity:0; transform: translateX(40px); transition: opacity .6s ease, transform .6s ease; }
        .slide-left.in, .slide-right.in { opacity:1; transform:none; }

        @media (max-width: 980px){
          .grid2{ grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
