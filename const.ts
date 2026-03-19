// ============================================================
// AWAKEN WELLNESS — Conditions We Treat Hub Page
// SEO: acupuncture for chronic pain, anxiety, digestive, fertility Columbia MD
// ============================================================

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { SectionHeader, CTABanner, useScrollReveal } from "@/components/SharedComponents";
import { CONDITION_PILLARS } from "@/lib/siteData";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal();
  return <div ref={ref} className="fade-up" style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export default function Conditions() {
  return (
    <Layout>
      {/* ── PAGE HEADER ─────────────────────────────────── */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, oklch(0.92 0.04 308) 0%, oklch(0.93 0.04 152) 100%)",
          borderBottom: "1px solid oklch(0.84 0.07 298)",
        }}
      >
        <div className="container max-w-3xl">
          <div className="section-label mb-4">Conditions We Treat</div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              color: "oklch(0.20 0.012 65)",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            We Organize Our Care Around<br />
            <em style={{ color: "oklch(0.44 0.13 308)" }}>Your Health Concerns</em>
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.1rem",
              color: "oklch(0.38 0.008 65)",
              lineHeight: 1.75,
              maxWidth: "580px",
            }}
          >
            Rather than listing our services, we've organized this page around the conditions that bring most patients to us. Find your concern below and discover how acupuncture, massage, and nutritional counseling can help.
          </p>
        </div>
      </section>

      {/* ── CONDITION PILLARS ───────────────────────────── */}
      <section className="py-20" style={{ background: "oklch(1 0 0)" }}>
        <div className="container">
          <div className="flex flex-col gap-16">
            {CONDITION_PILLARS.map((pillar, idx) => (
              <FadeUp key={pillar.id}>
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ border: "1px solid oklch(0.88 0.010 80)" }}
                >
                  {/* Pillar Header */}
                  <div
                    className="p-8"
                    style={{
                      background: idx % 2 === 0
                        ? "linear-gradient(135deg, oklch(0.92 0.04 308), oklch(0.97 0.008 85))"
                        : "linear-gradient(135deg, oklch(0.93 0.04 152), oklch(0.97 0.008 85))",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{pillar.icon}</span>
                      <div>
                        <h2
                          style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontWeight: 600,
                            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                            color: "oklch(0.20 0.012 65)",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {pillar.title}
                        </h2>
                        <p
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "1rem",
                            color: "oklch(0.40 0.008 65)",
                            lineHeight: 1.65,
                            maxWidth: "600px",
                          }}
                        >
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Condition Links */}
                  <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" style={{ background: "oklch(0.99 0.003 85)" }}>
                    {pillar.conditions.map((c) => (
                      <Link key={c.href} href={c.href}>
                        <div
                          className="card-lift flex items-center justify-between p-4 rounded-xl cursor-pointer"
                          style={{
                            background: "oklch(1 0 0)",
                            border: "1px solid oklch(0.90 0.010 80)",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "'DM Sans', sans-serif",
                              fontWeight: 500,
                              fontSize: "0.92rem",
                              color: "oklch(0.28 0.012 65)",
                            }}
                          >
                            {c.title}
                          </span>
                          <ArrowRight size={14} style={{ color: "oklch(0.44 0.13 308)", flexShrink: 0 }} />
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Pillar CTA */}
                  <div className="px-6 pb-6" style={{ background: "oklch(0.99 0.003 85)" }}>
                    <Link href={pillar.href}>
                      <span className="btn-lotus text-sm">
                        Learn More About {pillar.title}
                        <ArrowRight size={14} />
                      </span>
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE HELP ─────────────────────────────────── */}
      <section className="py-20" style={{ background: "oklch(0.97 0.008 85)" }}>
        <div className="container max-w-3xl mx-auto text-center">
          <FadeUp>
            <SectionHeader
              label="Who We Help"
              title="If You've Tried Everything Else, You're in the Right Place"
              subtitle="Most of our patients come to us after months or years of trying other treatments that only partially worked — or stopped working altogether. Our root-cause approach is designed specifically for people in that situation."
              align="center"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                "Chronic pain sufferers",
                "Anxiety & stress",
                "Digestive issues",
                "Fertility challenges",
                "Hormone imbalance",
                "Burnout & fatigue",
                "Sleep problems",
                "Nervous system dysregulation",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl p-4 text-sm text-center"
                  style={{
                    background: "oklch(1 0 0)",
                    border: "1px solid oklch(0.88 0.010 80)",
                    fontFamily: "'DM Sans', sans-serif",
                    color: "oklch(0.35 0.008 65)",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <CTABanner
        title="Not Sure Where to Start?"
        subtitle="Book a complimentary 15-minute phone consultation with one of our practitioners. We'll help you understand which therapies are right for your specific situation."
        primaryLabel="Book a Free Consultation"
        secondaryLabel="Call Us"
      />
    </Layout>
  );
}
