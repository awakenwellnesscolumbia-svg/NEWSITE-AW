// ============================================================
// AWAKEN WELLNESS — Blog Index Page
// SEO: acupuncture blog Columbia MD, holistic health articles
// ============================================================

import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { CTABanner, useScrollReveal } from "@/components/SharedComponents";
import { BLOG_POSTS } from "@/lib/siteData";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal();
  return <div ref={ref} className="fade-up" style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const CATEGORIES = ["All", "Chronic Pain", "Anxiety & Stress", "Digestive Health", "Fertility Support", "Nervous System"];

export default function Blog() {
  return (
    <Layout>
      <section className="py-20" style={{ background: "linear-gradient(135deg, oklch(0.92 0.04 308) 0%, oklch(0.93 0.04 152) 100%)" }}>
        <div className="container max-w-3xl">
          <div className="section-label mb-4">Awaken Wellness Blog</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(2.2rem, 5vw, 3.6rem)", color: "oklch(0.20 0.012 65)", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Evidence-Informed Articles<br /><em style={{ color: "oklch(0.44 0.13 308)" }}>on Holistic Healing</em>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", color: "oklch(0.38 0.008 65)", lineHeight: 1.75, maxWidth: "580px" }}>
            Practical insights on acupuncture, nervous system health, root-cause healing, and integrative medicine — written by our practitioners for our patients.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: "oklch(1 0 0)" }}>
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  background: cat === "All" ? "oklch(0.44 0.13 308)" : "oklch(0.97 0.008 85)",
                  color: cat === "All" ? "oklch(0.97 0.005 85)" : "oklch(0.40 0.008 65)",
                  border: `1px solid ${cat === "All" ? "oklch(0.44 0.13 308)" : "oklch(0.88 0.010 80)"}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <FadeUp>
            <Link href={`/blog/${BLOG_POSTS[0].slug}`}>
              <div className="card-lift rounded-2xl overflow-hidden mb-10 cursor-pointer" style={{ border: "1px solid oklch(0.88 0.010 80)" }}>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
                    <img src={BLOG_POSTS[0].image} alt={BLOG_POSTS[0].title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                  <div className="p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "oklch(0.92 0.04 308)", color: "oklch(0.44 0.13 308)", fontFamily: "'DM Sans', sans-serif" }}>
                        Featured
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "oklch(0.93 0.04 152)", color: "oklch(0.38 0.10 152)", fontFamily: "'DM Sans', sans-serif" }}>
                        {BLOG_POSTS[0].category}
                      </span>
                    </div>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "oklch(0.20 0.012 65)", lineHeight: 1.2, marginBottom: "0.75rem" }}>
                      {BLOG_POSTS[0].title}
                    </h2>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "oklch(0.45 0.008 65)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                      {BLOG_POSTS[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "oklch(0.55 0.008 65)" }}>{BLOG_POSTS[0].date}</span>
                        <span className="flex items-center gap-1" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "oklch(0.55 0.008 65)" }}>
                          <Clock size={12} />
                          {BLOG_POSTS[0].readTime}
                        </span>
                      </div>
                      <span className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "oklch(0.44 0.13 308)", fontFamily: "'DM Sans', sans-serif" }}>
                        Read Article <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </FadeUp>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(1).map((post, i) => (
              <FadeUp key={post.slug} delay={i * 80}>
                <Link href={`/blog/${post.slug}`}>
                  <div className="card-lift rounded-2xl overflow-hidden cursor-pointer h-full" style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.010 80)" }}>
                    <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "oklch(0.92 0.04 308)", color: "oklch(0.44 0.13 308)", fontFamily: "'DM Sans', sans-serif" }}>
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "oklch(0.58 0.008 65)" }}>
                          <Clock size={11} />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.2rem", color: "oklch(0.20 0.012 65)", lineHeight: 1.3, marginBottom: "0.5rem" }}>
                        {post.title}
                      </h3>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "oklch(0.48 0.008 65)", lineHeight: 1.65, marginBottom: "1rem" }}>
                        {post.excerpt.slice(0, 110)}…
                      </p>
                      <div className="flex items-center justify-between">
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "oklch(0.58 0.008 65)" }}>{post.date}</span>
                        <span className="flex items-center gap-1 text-xs font-medium" style={{ color: "oklch(0.44 0.13 308)", fontFamily: "'DM Sans', sans-serif" }}>
                          Read <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Experience the Difference?"
        subtitle="Book your first appointment at Awaken Wellness in Columbia, Maryland."
        primaryLabel="Book an Appointment"
      />
    </Layout>
  );
}
