// ============================================================
// AWAKEN WELLNESS — About Page
// ============================================================

import { Link } from "wouter";
import { ArrowRight, Heart, Leaf, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import { CTABanner, TrustBar, useScrollReveal } from "@/components/SharedComponents";

const TEAM_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663426380560/CsB8cut5RrT75gbPHJuh8F/about-team-ZeJXh88V5DNjMCo7gtigM7.webp";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal();
  return <div ref={ref} className="fade-up" style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export default function About() {
  return (
    <Layout>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, oklch(0.92 0.04 308) 0%, oklch(0.93 0.04 152) 100%)" }}>
        <div className="container max-w-3xl">
          <div className="section-label mb-4">About Awaken Wellness</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(2.2rem, 5vw, 3.6rem)", color: "oklch(0.20 0.012 65)", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            A Different Kind of<br /><em style={{ color: "oklch(0.44 0.13 308)" }}>Healthcare Practice</em>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", color: "oklch(0.38 0.008 65)", lineHeight: 1.75, maxWidth: "580px" }}>
            Awaken Wellness was founded on a simple belief: your body has an extraordinary capacity to heal when given the right support. We're here to provide that support.
          </p>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────────── */}
      <section className="py-20" style={{ background: "oklch(1 0 0)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div className="section-label mb-4">Our Story</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "oklch(0.20 0.012 65)", lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Rooted in Columbia,<br />Committed to Howard County
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "oklch(0.42 0.008 65)", lineHeight: 1.8, marginBottom: "1rem" }}>
                Awaken Wellness was established in Columbia, Maryland with a clear mission: to bring the healing power of acupuncture, massage therapy, and holistic nutrition to our community in a way that is accessible, evidence-informed, and genuinely compassionate.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "oklch(0.42 0.008 65)", lineHeight: 1.8, marginBottom: "1rem" }}>
                Over the past 15 years, we have helped more than 3,000 patients in Howard County and the greater Baltimore area find lasting relief from chronic pain, anxiety, digestive dysfunction, fertility challenges, and more. Many of them came to us after years of trying other treatments that only partially worked.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "oklch(0.42 0.008 65)", lineHeight: 1.8 }}>
                What sets us apart is our commitment to treating the whole person — not just the symptom. Every treatment plan at Awaken Wellness is individualized, integrative, and designed to address the root cause of your condition rather than manage it indefinitely.
              </p>
            </FadeUp>
            <FadeUp delay={150}>
              <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img src={TEAM_IMAGE} alt="Awaken Wellness team in Columbia, Maryland" className="w-full h-full object-cover" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* ── VALUES ───────────────────────────────────────── */}
      <section className="py-20" style={{ background: "oklch(0.97 0.008 85)" }}>
        <div className="container">
          <div className="section-label justify-center mb-4 text-center">Our Values</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "oklch(0.20 0.012 65)", lineHeight: 1.15, marginBottom: "3rem", textAlign: "center" }}>
            What We Believe About Healing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Heart size={28} />, title: "Compassionate Care", desc: "We believe healing begins with being truly heard. Every patient at Awaken Wellness receives unhurried, attentive care from practitioners who genuinely care about your wellbeing." },
              { icon: <Leaf size={28} />, title: "Root-Cause Healing", desc: "We don't chase symptoms. We investigate the underlying patterns — physical, emotional, and lifestyle — that are driving your condition, and we address those patterns directly." },
              { icon: <Shield size={28} />, title: "Evidence-Informed Practice", desc: "We honor the 3,000-year clinical tradition of Chinese medicine while staying current with modern research. Our protocols are both time-tested and scientifically grounded." },
            ].map((v) => (
              <FadeUp key={v.title}>
                <div className="card-lift rounded-2xl p-8 text-center" style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.010 80)" }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: "oklch(0.92 0.04 308)", color: "oklch(0.44 0.13 308)" }}>
                    {v.icon}
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.3rem", color: "oklch(0.20 0.012 65)", marginBottom: "0.6rem" }}>{v.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "oklch(0.45 0.008 65)", lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY ────────────────────────────────────── */}
      <section className="py-20" style={{ background: "oklch(1 0 0)" }}>
        <div className="container max-w-3xl mx-auto text-center">
          <FadeUp>
            <div className="section-label justify-center mb-4">Serving Our Community</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "oklch(0.20 0.012 65)", lineHeight: 1.15, marginBottom: "1rem" }}>
              Proud to Serve Columbia, Maryland<br />and Howard County
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "oklch(0.42 0.008 65)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              We serve patients from Columbia, Ellicott City, Clarksville, Fulton, Laurel, and the greater Baltimore and Washington DC metro areas. We accept most major insurance plans and are committed to making holistic healthcare accessible to our entire community — including our veteran patients through Tricare and VA community care programs.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/practitioners">
                <span className="btn-lotus">Meet Our Practitioners <ArrowRight size={15} /></span>
              </Link>
              <Link href="/contact">
                <span className="btn-sage">Find Us <ArrowRight size={14} /></span>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
