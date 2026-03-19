// ============================================================
// AWAKEN WELLNESS — Acupuncture Service Page
// SEO: acupuncture Columbia MD, acupuncture near me, Howard County
// Primary service page — links to all condition pages
// ============================================================

import { Link } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import {
  PageHero,
  SectionHeader,
  TestimonialsSection,
  CTABanner,
  ConditionPill,
  useScrollReveal,
} from "@/components/SharedComponents";
import { CONDITION_PILLARS } from "@/lib/siteData";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663426380560/CsB8cut5RrT75gbPHJuh8F/hero-acupuncture-Haz5pDryazsvirjBvP5ssb.webp";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="fade-up" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Acupuncture() {
  return (
    <Layout>
      <PageHero
        label="Our Primary Therapy"
        title="Acupuncture in Columbia, Maryland"
        subtitle="Ancient wisdom backed by modern research. Acupuncture addresses chronic pain, anxiety, digestive issues, fertility challenges, and more — at the root cause."
        image={HERO_IMAGE}
        ctaLabel="Book Acupuncture Appointment"
        ctaSecondaryLabel="Learn What We Treat"
        ctaSecondaryHref="/conditions"
      />

      {/* ── WHAT IS ACUPUNCTURE ─────────────────────────── */}
      <section className="py-20" style={{ background: "oklch(1 0 0)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div className="section-label mb-4">What Is Acupuncture?</div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  color: "oklch(0.20 0.012 65)",
                  lineHeight: 1.15,
                  marginBottom: "1.25rem",
                }}
              >
                A 3,000-Year-Old System<br />
                <em>With Modern Scientific Validation</em>
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "oklch(0.42 0.008 65)", lineHeight: 1.75, marginBottom: "1rem" }}>
                Acupuncture is a core component of Traditional Chinese Medicine (TCM) that involves the insertion of very fine, sterile needles into specific points along the body's meridian pathways. These pathways correspond to organ systems and physiological functions that govern everything from pain perception to hormonal balance.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "oklch(0.42 0.008 65)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                Modern research has confirmed that acupuncture stimulates the release of endorphins and serotonin, reduces inflammatory cytokines, activates the parasympathetic nervous system, and improves blood circulation to targeted areas — providing a compelling scientific framework for what practitioners have observed clinically for millennia.
              </p>
              <div className="flex flex-col gap-2.5">
                {[
                  "Safe, sterile, single-use needles — no risk of infection",
                  "Most patients report little to no discomfort during treatment",
                  "Sessions typically last 45–75 minutes",
                  "Treatment plans are individualized to your specific condition",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.48 0.10 152)" }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "oklch(0.38 0.008 65)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={150}>
              <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img
                  src={HERO_IMAGE}
                  alt="Acupuncture treatment at Awaken Wellness in Columbia, Maryland"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CONDITIONS TREATED ─────────────────────────── */}
      <section className="py-20" style={{ background: "oklch(0.97 0.008 85)" }}>
        <div className="container">
          <SectionHeader
            label="Conditions Treated"
            title="What Acupuncture Can Help With"
            subtitle="We treat a wide range of conditions using targeted acupuncture protocols. Select a category to learn more."
            align="center"
          />
          <div className="flex flex-col gap-10">
            {CONDITION_PILLARS.map((pillar) => (
              <FadeUp key={pillar.id}>
                <div
                  className="rounded-2xl p-8"
                  style={{
                    background: "oklch(1 0 0)",
                    border: "1px solid oklch(0.88 0.010 80)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{pillar.icon}</span>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 600,
                        fontSize: "1.4rem",
                        color: "oklch(0.20 0.012 65)",
                      }}
                    >
                      {pillar.title}
                    </h3>
                  </div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "oklch(0.48 0.008 65)", lineHeight: 1.65, marginBottom: "1rem" }}>
                    {pillar.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pillar.conditions.map((c) => (
                      <ConditionPill key={c.href} title={c.title} href={c.href} />
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHINESE HERBAL MEDICINE ─────────────────────── */}
      <section id="herbal" className="py-20" style={{ background: "oklch(1 0 0)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp delay={150}>
              <div
                className="rounded-2xl p-10"
                style={{
                  background: "linear-gradient(135deg, oklch(0.93 0.04 152), oklch(0.92 0.04 308))",
                  border: "1px solid oklch(0.84 0.07 298)",
                }}
              >
                <div className="text-4xl mb-4">🌿</div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    fontSize: "1.8rem",
                    color: "oklch(0.20 0.012 65)",
                    marginBottom: "1rem",
                  }}
                >
                  Chinese Herbal Medicine
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "oklch(0.35 0.008 65)", lineHeight: 1.75, marginBottom: "1rem" }}>
                  Chinese herbal medicine is a sophisticated pharmacological system that has been refined over 2,000 years. Our practitioners prescribe individualized herbal formulas — either as teas, capsules, or granules — to support and extend the effects of your acupuncture treatments between sessions.
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "oklch(0.35 0.008 65)", lineHeight: 1.75 }}>
                  Herbal medicine is particularly effective for hormonal conditions, digestive disorders, immune support, and chronic fatigue.
                </p>
              </div>
            </FadeUp>
            <FadeUp>
              <div className="section-label mb-4">Complementary Therapy</div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  color: "oklch(0.20 0.012 65)",
                  lineHeight: 1.15,
                  marginBottom: "1.25rem",
                }}
              >
                Amplify Your Results with<br />Chinese Herbal Medicine
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "oklch(0.42 0.008 65)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                Acupuncture and Chinese herbal medicine have been used together for thousands of years because they work synergistically. While acupuncture resets your nervous system and restores energy flow during your session, herbal formulas continue working between appointments — deepening and sustaining the therapeutic effects.
              </p>
              <Link href="/book-appointment">
                <span className="btn-lotus">
                  Ask About Herbal Medicine
                  <ArrowRight size={15} />
                </span>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ─────────────────────────────── */}
      <section className="py-20" style={{ background: "oklch(0.97 0.008 85)" }}>
        <div className="container">
          <SectionHeader
            label="Your First Visit"
            title="What to Expect at Awaken Wellness"
            subtitle="We want you to feel informed and at ease before you arrive. Here's how your first acupuncture appointment works."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Comprehensive Intake", desc: "Your practitioner will spend 20–30 minutes reviewing your health history, current symptoms, and wellness goals." },
              { step: "2", title: "TCM Diagnosis", desc: "Using pulse diagnosis and tongue observation, we identify the underlying pattern driving your symptoms." },
              { step: "3", title: "Treatment", desc: "Fine needles are placed at specific points. Most patients feel deeply relaxed — many fall asleep." },
              { step: "4", title: "Your Healing Plan", desc: "We'll outline a recommended treatment schedule and discuss any lifestyle or nutritional adjustments." },
            ].map((item) => (
              <FadeUp key={item.step}>
                <div
                  className="card-lift rounded-2xl p-7 text-center"
                  style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.010 80)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "oklch(0.44 0.13 308)", color: "white" }}
                  >
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.2rem" }}>{item.step}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.2rem", color: "oklch(0.20 0.012 65)", marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "oklch(0.48 0.008 65)", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTABanner
        title="Ready to Book Your Acupuncture Appointment?"
        subtitle="Serving Columbia, Maryland and Howard County. New patients welcome. Insurance accepted."
        primaryLabel="Book Acupuncture Appointment"
      />
    </Layout>
  );
}
