// ============================================================
// AWAKEN WELLNESS — Homepage
// SEO: acupuncture Columbia MD, acupuncture near me, Howard County
// Design: Lotus & Light | Asymmetric hero, diagonal sections
// ============================================================

import { Link } from "wouter";
import { ArrowRight, CheckCircle, Shield, Heart, Leaf, Zap, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import {
  SectionHeader,
  TestimonialsSection,
  TrustBar,
  CTABanner,
  ConditionPill,
  useScrollReveal,
} from "@/components/SharedComponents";
import { SERVICES, CONDITION_PILLARS, INSURANCE_LIST, BLOG_POSTS, CLINIC } from "@/lib/siteData";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663426380560/CsB8cut5RrT75gbPHJuh8F/homepage-hero-aRhT6yiinuzFyX2AtYMinN.webp";

// ── Fade-up wrapper ─────────────────────────────────────────
function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="fade-up" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, oklch(0.15 0.02 65 / 0.70) 0%, oklch(0.20 0.012 65 / 0.35) 60%, transparent 100%)",
          }}
        />
        <div className="container relative z-10 py-24">
          <div className="max-w-xl">
            <div
              className="section-label mb-5"
              style={{ color: "oklch(0.84 0.07 298)" }}
            >
              Acupuncture · Columbia, Maryland
            </div>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "clamp(2.6rem, 6vw, 4.2rem)",
                color: "oklch(0.97 0.005 85)",
                lineHeight: 1.08,
                marginBottom: "1.25rem",
              }}
            >
              Helping Your Body<br />
              <span style={{ color: "oklch(0.84 0.07 298)" }}>Heal at the Root Cause</span>
            </h1>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.1rem",
                color: "oklch(0.88 0.005 85)",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: "480px",
              }}
            >
              Acupuncture, massage therapy, and nutritional counseling in Columbia, MD — designed to address what's actually causing your pain, anxiety, or digestive issues.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-appointment">
                <span className="btn-lotus text-base">
                  Book Your Appointment
                  <ArrowRight size={16} />
                </span>
              </Link>
              <a href={`tel:${CLINIC.phone}`}>
                <span
                  className="btn-sage text-base"
                  style={{
                    borderColor: "oklch(0.88 0.005 85)",
                    color: "oklch(0.97 0.005 85)",
                  }}
                >
                  <Phone size={15} />
                  Call Us
                </span>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              {["Accepting New Patients", "Insurance Accepted", "Veteran Care Available"].map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-1.5 text-sm"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "oklch(0.84 0.07 298)",
                  }}
                >
                  <CheckCircle size={14} />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────── */}
      <TrustBar />

      {/* ── ROOT CAUSE HEALING ───────────────────────────── */}
      <section className="py-20" style={{ background: "oklch(1 0 0)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="section-label mb-4">Our Philosophy</div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "oklch(0.20 0.012 65)",
                  lineHeight: 1.15,
                  marginBottom: "1.25rem",
                }}
              >
                When Other Treatments<br />
                <em>Haven't Fixed the Problem</em>
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1.05rem",
                  color: "oklch(0.40 0.008 65)",
                  lineHeight: 1.75,
                  marginBottom: "1.25rem",
                }}
              >
                Many of our patients arrive frustrated. They've tried medication, physical therapy, or other treatments — and while those approaches may have helped temporarily, the underlying issue keeps returning. That's because most conventional medicine is designed to manage symptoms, not address the root cause.
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1.05rem",
                  color: "oklch(0.40 0.008 65)",
                  lineHeight: 1.75,
                  marginBottom: "2rem",
                }}
              >
                At Awaken Wellness, we take a different approach. We look at your body as an interconnected system — and we use acupuncture, massage, and nutritional counseling to restore balance at the source of your symptoms.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Personalized treatment plans for your specific condition",
                  "Integrative care combining acupuncture, massage & nutrition",
                  "Evidence-informed protocols with thousands of years of clinical history",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: "oklch(0.48 0.10 152)" }}
                    />
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.95rem",
                        color: "oklch(0.35 0.008 65)",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: <Leaf size={24} />,
                    title: "Natural Healing",
                    desc: "No pharmaceuticals. Your body has an innate capacity to heal — we help activate it.",
                  },
                  {
                    icon: <Heart size={24} />,
                    title: "Whole-Person Care",
                    desc: "We treat you as a complete person, not just a collection of symptoms.",
                  },
                  {
                    icon: <Shield size={24} />,
                    title: "Evidence-Informed",
                    desc: "Our protocols are grounded in both classical Chinese medicine and modern research.",
                  },
                  {
                    icon: <Zap size={24} />,
                    title: "Nervous System Focus",
                    desc: "Many chronic conditions begin with nervous system dysregulation. We address this directly.",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="card-lift rounded-2xl p-6"
                    style={{
                      background: "oklch(0.97 0.008 85)",
                      border: "1px solid oklch(0.90 0.010 80)",
                    }}
                  >
                    <div
                      className="mb-3 w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: "oklch(0.92 0.04 308)",
                        color: "oklch(0.44 0.13 308)",
                      }}
                    >
                      {card.icon}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        color: "oklch(0.20 0.012 65)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.85rem",
                        color: "oklch(0.50 0.008 65)",
                        lineHeight: 1.6,
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── HOW ACUPUNCTURE WORKS ─────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "oklch(0.97 0.008 85)" }}
      >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <FadeUp>
              <div className="section-label justify-center mb-4">Understanding Acupuncture</div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "oklch(0.20 0.012 65)",
                  lineHeight: 1.15,
                  marginBottom: "1rem",
                }}
              >
                What Acupuncture Actually Does to Your Body
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1.05rem",
                  color: "oklch(0.42 0.008 65)",
                  lineHeight: 1.75,
                }}
              >
                Acupuncture works by stimulating specific points along the body's meridian pathways — networks of connective tissue that correspond to organ systems and physiological functions. Modern research confirms that acupuncture activates the parasympathetic nervous system, reduces inflammatory markers, and stimulates the release of endorphins and serotonin.
              </p>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Nervous System Regulation",
                desc: "Acupuncture shifts your body from a chronic fight-or-flight state into the parasympathetic 'rest and heal' mode — the foundation of all lasting recovery.",
              },
              {
                step: "02",
                title: "Inflammation Reduction",
                desc: "By modulating the body's inflammatory response, acupuncture addresses one of the most common underlying drivers of chronic pain and digestive dysfunction.",
              },
              {
                step: "03",
                title: "Qi & Blood Flow",
                desc: "In Chinese medicine, stagnation of Qi (vital energy) and blood is the root of most pain and disease. Acupuncture restores this flow throughout the meridian system.",
              },
            ].map((item) => (
              <FadeUp key={item.step}>
                <div
                  className="card-lift rounded-2xl p-8"
                  style={{
                    background: "oklch(1 0 0)",
                    border: "1px solid oklch(0.88 0.010 80)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 700,
                      fontSize: "3rem",
                      color: "oklch(0.92 0.04 308)",
                      lineHeight: 1,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {item.step}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 600,
                      fontSize: "1.3rem",
                      color: "oklch(0.20 0.012 65)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.95rem",
                      color: "oklch(0.45 0.008 65)",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONDITIONS WE TREAT ───────────────────────────── */}
      <section className="py-20" style={{ background: "oklch(1 0 0)" }}>
        <div className="container">
          <SectionHeader
            label="Conditions We Treat"
            title="Find Relief for What's Holding You Back"
            subtitle="We organize our care around the health concerns that bring most patients to us — not just the services we offer."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONDITION_PILLARS.map((pillar) => (
              <FadeUp key={pillar.id}>
                <Link href={pillar.href}>
                  <div
                    className="card-lift rounded-2xl p-7 h-full cursor-pointer"
                    style={{
                      background: "oklch(0.97 0.008 85)",
                      border: "1px solid oklch(0.90 0.010 80)",
                    }}
                  >
                    <div className="text-3xl mb-3">{pillar.icon}</div>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 600,
                        fontSize: "1.35rem",
                        color: "oklch(0.20 0.012 65)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.9rem",
                        color: "oklch(0.48 0.008 65)",
                        lineHeight: 1.65,
                        marginBottom: "1rem",
                      }}
                    >
                      {pillar.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {pillar.conditions.slice(0, 3).map((c) => (
                        <span
                          key={c.title}
                          className="text-xs px-3 py-1 rounded-full"
                          style={{
                            background: "oklch(0.92 0.04 308)",
                            color: "oklch(0.44 0.13 308)",
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 500,
                          }}
                        >
                          {c.title.replace("Acupuncture for ", "")}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/conditions">
              <span className="btn-sage">
                View All Conditions
                <ArrowRight size={15} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section className="py-20" style={{ background: "oklch(0.97 0.008 85)" }}>
        <div className="container">
          <SectionHeader
            label="Our Services"
            title="Integrated Healing Therapies"
            subtitle="Acupuncture is our primary therapy. Massage and nutritional counseling complement and amplify your results."
          />
          <div className="flex flex-col gap-12">
            {SERVICES.map((service, idx) => (
              <FadeUp key={service.id}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="overflow-hidden rounded-2xl" style={{ aspectRatio: "16/9" }}>
                      <img
                        src={service.image}
                        alt={`${service.title} at Awaken Wellness, Columbia MD`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="section-label">{service.subtitle}</span>
                      {service.isPrimary && (
                        <span
                          className="text-xs px-3 py-1 rounded-full font-semibold"
                          style={{
                            background: "oklch(0.44 0.13 308)",
                            color: "oklch(0.97 0.005 85)",
                            fontFamily: "'DM Sans', sans-serif",
                          }}
                        >
                          Primary
                        </span>
                      )}
                    </div>
                    <h2
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 600,
                        fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                        color: "oklch(0.20 0.012 65)",
                        lineHeight: 1.15,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {service.title}
                    </h2>
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontStyle: "italic",
                        fontSize: "1.1rem",
                        color: "oklch(0.48 0.10 152)",
                        marginBottom: "1rem",
                      }}
                    >
                      {service.tagline}
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "1rem",
                        color: "oklch(0.42 0.008 65)",
                        lineHeight: 1.75,
                        marginBottom: "1.5rem",
                      }}
                    >
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.conditions.map((c) => (
                        <span
                          key={c}
                          className="text-xs px-3 py-1.5 rounded-full"
                          style={{
                            background: "oklch(0.93 0.04 152)",
                            color: "oklch(0.38 0.10 152)",
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 500,
                          }}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Link href={service.slug}>
                        <span className="btn-lotus text-sm">Learn More</span>
                      </Link>
                      <Link href="/book-appointment">
                        <span className="btn-sage text-sm">Book Now</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <TestimonialsSection />

      {/* ── INSURANCE ────────────────────────────────────── */}
      <section className="py-20" style={{ background: "oklch(1 0 0)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div className="section-label mb-4">Insurance & Pricing</div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  color: "oklch(0.20 0.012 65)",
                  lineHeight: 1.15,
                  marginBottom: "1rem",
                }}
              >
                We Accept Most Major Insurance Plans
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1.05rem",
                  color: "oklch(0.42 0.008 65)",
                  lineHeight: 1.75,
                  marginBottom: "1.5rem",
                }}
              >
                We believe healing should be accessible. Awaken Wellness accepts most major insurance plans, including Tricare for our veteran patients. Our team will verify your benefits before your first appointment so there are no surprises.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {INSURANCE_LIST.map((ins) => (
                  <div key={ins} className="flex items-center gap-2 text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.38 0.008 65)" }}>
                    <CheckCircle size={14} style={{ color: "oklch(0.48 0.10 152)", flexShrink: 0 }} />
                    {ins}
                  </div>
                ))}
              </div>
              <Link href="/insurance">
                <span className="btn-sage text-sm">
                  View Insurance & Pricing
                  <ArrowRight size={14} />
                </span>
              </Link>
            </FadeUp>
            <FadeUp delay={150}>
              <div
                className="rounded-2xl p-8"
                style={{
                  background: "linear-gradient(135deg, oklch(0.92 0.04 308), oklch(0.93 0.04 152))",
                  border: "1px solid oklch(0.84 0.07 298)",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <Shield size={24} style={{ color: "oklch(0.44 0.13 308)" }} />
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 600,
                      fontSize: "1.4rem",
                      color: "oklch(0.20 0.012 65)",
                    }}
                  >
                    Veteran Care Available
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.95rem",
                    color: "oklch(0.35 0.008 65)",
                    lineHeight: 1.7,
                    marginBottom: "1.25rem",
                  }}
                >
                  We are honored to serve the men and women who have served our country. Awaken Wellness accepts Tricare and works with VA community care programs to provide acupuncture and holistic care to veterans in Howard County and the greater Baltimore area.
                </p>
                <Link href="/veteran-care">
                  <span className="btn-lotus text-sm">
                    Learn About Veteran Care
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ─────────────────────────────────── */}
      <section className="py-20" style={{ background: "oklch(0.97 0.008 85)" }}>
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <SectionHeader
              label="From the Blog"
              title="Learn About Holistic Healing"
              subtitle="Evidence-informed articles on acupuncture, nervous system health, and root-cause healing."
            />
            <Link href="/blog" className="hidden md:block">
              <span className="btn-sage text-sm whitespace-nowrap">
                All Articles
                <ArrowRight size={14} />
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <FadeUp key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <div
                    className="card-lift rounded-2xl overflow-hidden cursor-pointer"
                    style={{
                      background: "oklch(1 0 0)",
                      border: "1px solid oklch(0.88 0.010 80)",
                    }}
                  >
                    <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="text-xs px-3 py-1 rounded-full font-medium"
                          style={{
                            background: "oklch(0.92 0.04 308)",
                            color: "oklch(0.44 0.13 308)",
                            fontFamily: "'DM Sans', sans-serif",
                          }}
                        >
                          {post.category}
                        </span>
                        <span
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.78rem",
                            color: "oklch(0.58 0.008 65)",
                          }}
                        >
                          {post.readTime}
                        </span>
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 600,
                          fontSize: "1.2rem",
                          color: "oklch(0.20 0.012 65)",
                          lineHeight: 1.3,
                          marginBottom: "0.5rem",
                        }}
                      >
                        {post.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.88rem",
                          color: "oklch(0.48 0.008 65)",
                          lineHeight: 1.65,
                        }}
                      >
                        {post.excerpt.slice(0, 120)}…
                      </p>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <CTABanner />
    </Layout>
  );
}
