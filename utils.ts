// ============================================================
// AWAKEN WELLNESS — Shared UI Components
// PageHero, SectionHeader, TestimonialCard, ServiceCard,
// ConditionCard, CTABanner, TrustBar
// ============================================================

import { Link } from "wouter";
import { Star, ArrowRight, Phone } from "lucide-react";
import { CLINIC, TESTIMONIALS, TRUST_SIGNALS } from "@/lib/siteData";
import { useEffect, useRef } from "react";

// ── Scroll Reveal Hook ──────────────────────────────────────
export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ── Page Hero ───────────────────────────────────────────────
interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  image: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
  overlay?: number;
  lightText?: boolean;
}

export function PageHero({
  label,
  title,
  subtitle,
  image,
  ctaLabel,
  ctaHref = "/book-appointment",
  ctaSecondaryLabel,
  ctaSecondaryHref,
  overlay = 0.45,
  lightText = true,
}: PageHeroProps) {
  return (
    <section
      className="relative min-h-[520px] md:min-h-[620px] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(105deg, oklch(0.15 0.02 65 / ${overlay + 0.1}) 0%, oklch(0.20 0.012 65 / ${overlay}) 100%)`,
        }}
      />
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          {label && (
            <div
              className="section-label mb-4"
              style={{ color: lightText ? "oklch(0.84 0.07 298)" : "oklch(0.48 0.10 152)" }}
            >
              {label}
            </div>
          )}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              color: lightText ? "oklch(0.97 0.005 85)" : "oklch(0.20 0.012 65)",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.1rem",
                color: lightText ? "oklch(0.88 0.005 85)" : "oklch(0.40 0.010 65)",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: "520px",
              }}
            >
              {subtitle}
            </p>
          )}
          {(ctaLabel || ctaSecondaryLabel) && (
            <div className="flex flex-wrap gap-3">
              {ctaLabel && (
                <Link href={ctaHref}>
                  <span className="btn-lotus">{ctaLabel}</span>
                </Link>
              )}
              {ctaSecondaryLabel && ctaSecondaryHref && (
                <Link href={ctaSecondaryHref}>
                  <span
                    className="btn-sage"
                    style={{
                      borderColor: lightText ? "oklch(0.88 0.005 85)" : undefined,
                      color: lightText ? "oklch(0.97 0.005 85)" : undefined,
                    }}
                  >
                    {ctaSecondaryLabel}
                  </span>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ── Section Header ──────────────────────────────────────────
interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({ label, title, subtitle, align = "left" }: SectionHeaderProps) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`fade-up mb-10 ${align === "center" ? "text-center" : ""}`}>
      {label && (
        <div className={`section-label mb-3 ${align === "center" ? "justify-center" : ""}`}>
          {label}
        </div>
      )}
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 600,
          fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
          color: "oklch(0.20 0.012 65)",
          lineHeight: 1.15,
          marginBottom: subtitle ? "0.75rem" : 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.05rem",
            color: "oklch(0.45 0.008 65)",
            lineHeight: 1.7,
            maxWidth: align === "center" ? "640px" : "560px",
            margin: align === "center" ? "0 auto" : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ── Testimonial Card ────────────────────────────────────────
interface TestimonialCardProps {
  name: string;
  location: string;
  condition: string;
  quote: string;
  rating: number;
}

export function TestimonialCard({ name, location, condition, quote, rating }: TestimonialCardProps) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className="fade-up card-lift rounded-2xl p-7 flex flex-col gap-4"
      style={{
        background: "oklch(1 0 0)",
        border: "1px solid oklch(0.88 0.010 80)",
        boxShadow: "0 2px 12px oklch(0.20 0.012 65 / 0.06)",
      }}
    >
      <div className="flex gap-0.5">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} fill="oklch(0.72 0.14 65)" color="oklch(0.72 0.14 65)" />
        ))}
      </div>
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontSize: "1.1rem",
          color: "oklch(0.28 0.012 65)",
          lineHeight: 1.65,
        }}
      >
        "{quote}"
      </p>
      <div className="mt-auto">
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: "0.9rem",
            color: "oklch(0.20 0.012 65)",
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.8rem",
            color: "oklch(0.55 0.008 65)",
          }}
        >
          {location} · {condition}
        </p>
      </div>
    </div>
  );
}

// ── Testimonials Section ────────────────────────────────────
export function TestimonialsSection() {
  return (
    <section className="py-20" style={{ background: "oklch(0.97 0.008 85)" }}>
      <div className="container">
        <SectionHeader
          label="Patient Stories"
          title="Real People. Real Healing."
          subtitle="Hear from patients who came to us frustrated and left with their lives transformed."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Trust Bar ───────────────────────────────────────────────
export function TrustBar() {
  return (
    <div
      className="py-8"
      style={{
        background: "oklch(0.44 0.13 308)",
        color: "oklch(0.95 0.02 308)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {TRUST_SIGNALS.map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  fontSize: "2.2rem",
                  color: "oklch(0.84 0.07 298)",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.8rem",
                  color: "oklch(0.80 0.04 308)",
                  marginTop: "0.25rem",
                  letterSpacing: "0.04em",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── CTA Banner ──────────────────────────────────────────────
interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTABanner({
  title = "Ready to Start Your Healing Journey?",
  subtitle = "Book your first acupuncture appointment in Columbia, Maryland and take the first step toward lasting relief.",
  primaryLabel = "Book Your Appointment",
  primaryHref = "/book-appointment",
  secondaryLabel = "Call Us Today",
}: CTABannerProps) {
  const ref = useScrollReveal();
  return (
    <section
      className="py-20"
      style={{
        background: "linear-gradient(135deg, oklch(0.38 0.12 308) 0%, oklch(0.48 0.10 152) 100%)",
      }}
    >
      <div className="container">
        <div ref={ref} className="fade-up text-center max-w-2xl mx-auto">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "oklch(0.97 0.005 85)",
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.05rem",
              color: "oklch(0.88 0.005 85)",
              lineHeight: 1.7,
              marginBottom: "2rem",
            }}
          >
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href={primaryHref}>
              <span
                className="btn-lotus"
                style={{
                  background: "oklch(0.97 0.005 85)",
                  color: "oklch(0.44 0.13 308)",
                  boxShadow: "0 4px 16px oklch(0.20 0.012 65 / 0.2)",
                }}
              >
                {primaryLabel}
                <ArrowRight size={16} />
              </span>
            </Link>
            <a href={`tel:${CLINIC.phone}`}>
              <span
                className="btn-sage"
                style={{
                  borderColor: "oklch(0.97 0.005 85)",
                  color: "oklch(0.97 0.005 85)",
                }}
              >
                <Phone size={15} />
                {secondaryLabel}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Condition Pill ──────────────────────────────────────────
interface ConditionPillProps {
  title: string;
  href: string;
}

export function ConditionPill({ title, href }: ConditionPillProps) {
  return (
    <Link href={href}>
      <span
        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer hover:shadow-md"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: "oklch(0.92 0.04 308)",
          color: "oklch(0.44 0.13 308)",
          border: "1px solid oklch(0.84 0.07 298)",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "oklch(0.44 0.13 308)";
          (e.currentTarget as HTMLElement).style.color = "oklch(0.97 0.005 85)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "oklch(0.92 0.04 308)";
          (e.currentTarget as HTMLElement).style.color = "oklch(0.44 0.13 308)";
        }}
      >
        {title}
        <ArrowRight size={12} />
      </span>
    </Link>
  );
}
