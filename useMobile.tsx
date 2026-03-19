// ============================================================
// AWAKEN WELLNESS — Layout Component
// Sticky frosted-glass nav + comprehensive footer
// Design: Lotus & Light | Cormorant Garamond + DM Sans
// ============================================================

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown, MapPin, Clock } from "lucide-react";
import { CLINIC, NAV_ITEMS } from "@/lib/siteData";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children }: LayoutProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.97 0.008 85)" }}>
      {/* ── Top Bar ── */}
      <div
        className="hidden md:flex items-center justify-between px-6 py-2 text-sm"
        style={{
          background: "oklch(0.44 0.13 308)",
          color: "oklch(0.95 0.02 308)",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <MapPin size={13} />
            Columbia, Maryland (Howard County)
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} />
            {CLINIC.hoursDisplay}
          </span>
        </div>
        <a
          href={`tel:${CLINIC.phone}`}
          className="flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity"
        >
          <Phone size={13} />
          {CLINIC.phone}
        </a>
      </div>

      {/* ── Main Navigation ── */}
      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "oklch(1 0 0 / 0.92)"
            : "oklch(1 0 0 / 0.98)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 2px 20px oklch(0.20 0.012 65 / 0.08)" : "none",
          borderBottom: scrolled ? "1px solid oklch(0.88 0.010 80)" : "1px solid transparent",
        }}
      >
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex flex-col leading-none cursor-pointer">
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: "oklch(0.44 0.13 308)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1,
                }}
              >
                Awaken
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.65rem",
                  color: "oklch(0.48 0.10 152)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  lineHeight: 1.4,
                }}
              >
                Wellness
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <button
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: openDropdown === item.label ? "oklch(0.44 0.13 308)" : "oklch(0.30 0.012 65)",
                    }}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      style={{
                        transform: openDropdown === item.label ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                      }}
                    />
                  </button>
                ) : (
                  <Link href={item.href}>
                    <span
                      className="flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        color: location === item.href ? "oklch(0.44 0.13 308)" : "oklch(0.30 0.012 65)",
                      }}
                    >
                      {item.label}
                    </span>
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-1 rounded-xl py-2 min-w-56 z-50"
                    style={{
                      background: "oklch(1 0 0)",
                      boxShadow: "0 8px 32px oklch(0.20 0.012 65 / 0.14)",
                      border: "1px solid oklch(0.88 0.010 80)",
                    }}
                  >
                    {item.children.map((child) => (
                      <Link key={child.label} href={child.href}>
                        <span
                          className="block px-4 py-2.5 text-sm hover:bg-[oklch(0.92_0.04_308)] transition-colors cursor-pointer"
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            color: "oklch(0.30 0.012 65)",
                          }}
                        >
                          {child.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link href="/book-appointment">
              <span className="btn-lotus hidden md:inline-flex text-sm">
                Book Appointment
              </span>
            </Link>
            <button
              className="lg:hidden p-2 rounded-lg"
              style={{ color: "oklch(0.44 0.13 308)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="lg:hidden border-t"
            style={{
              background: "oklch(1 0 0)",
              borderColor: "oklch(0.88 0.010 80)",
            }}
          >
            <div className="container py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          color: "oklch(0.30 0.012 65)",
                        }}
                        onClick={() =>
                          setOpenDropdown(openDropdown === item.label ? null : item.label)
                        }
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          style={{
                            transform: openDropdown === item.label ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s ease",
                          }}
                        />
                      </button>
                      {openDropdown === item.label && (
                        <div className="ml-4 flex flex-col gap-1 mt-1">
                          {item.children.map((child) => (
                            <Link key={child.label} href={child.href}>
                              <span
                                className="block px-3 py-2 rounded-lg text-sm cursor-pointer"
                                style={{
                                  fontFamily: "'DM Sans', sans-serif",
                                  color: "oklch(0.44 0.13 308)",
                                  background: "oklch(0.92 0.04 308)",
                                }}
                              >
                                {child.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={item.href}>
                      <span
                        className="block px-3 py-2.5 rounded-lg text-sm font-medium cursor-pointer"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          color: "oklch(0.30 0.012 65)",
                        }}
                      >
                        {item.label}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t mt-2" style={{ borderColor: "oklch(0.88 0.010 80)" }}>
                <Link href="/book-appointment">
                  <span className="btn-lotus w-full justify-center text-sm">
                    Book Appointment
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ── Page Content ── */}
      <main className="flex-1">{children}</main>

      {/* ── Footer ── */}
      <footer
        style={{
          background: "oklch(0.20 0.012 65)",
          color: "oklch(0.80 0.005 65)",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700,
                    fontSize: "1.75rem",
                    color: "oklch(0.84 0.07 298)",
                    lineHeight: 1,
                  }}
                >
                  Awaken
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.65rem",
                    color: "oklch(0.65 0.08 152)",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  Wellness
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.65 0.005 65)" }}>
                Helping your body heal at the root cause. Serving Columbia, Maryland and Howard County.
              </p>
              <div className="flex flex-col gap-1.5 text-sm" style={{ color: "oklch(0.65 0.005 65)" }}>
                <span className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.65 0.08 152)" }} />
                  {CLINIC.fullAddress}
                </span>
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <Phone size={14} style={{ color: "oklch(0.65 0.08 152)" }} />
                  {CLINIC.phone}
                </a>
                <span className="flex items-center gap-2">
                  <Clock size={14} style={{ color: "oklch(0.65 0.08 152)" }} />
                  {CLINIC.hoursDisplay}
                </span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "oklch(0.92 0.005 65)",
                  marginBottom: "1rem",
                }}
              >
                Our Services
              </h4>
              <ul className="flex flex-col gap-2 text-sm" style={{ color: "oklch(0.65 0.005 65)" }}>
                {[
                  ["Acupuncture", "/acupuncture"],
                  ["Massage Therapy", "/massage-therapy"],
                  ["Nutrition Counseling", "/nutrition-counseling"],
                  ["Chinese Herbal Medicine", "/acupuncture#herbal"],
                  ["Veteran Care", "/veteran-care"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link href={href}>
                      <span className="hover:text-[oklch(0.84_0.07_298)] transition-colors cursor-pointer">
                        {label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conditions */}
            <div>
              <h4
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "oklch(0.92 0.005 65)",
                  marginBottom: "1rem",
                }}
              >
                Conditions We Treat
              </h4>
              <ul className="flex flex-col gap-2 text-sm" style={{ color: "oklch(0.65 0.005 65)" }}>
                {[
                  ["Chronic Pain", "/conditions/chronic-pain"],
                  ["Anxiety & Stress", "/conditions/anxiety-stress"],
                  ["Digestive Health", "/conditions/digestive-health"],
                  ["Fertility Support", "/conditions/fertility-support"],
                  ["Nervous System", "/conditions/nervous-system"],
                  ["View All Conditions", "/conditions"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link href={href}>
                      <span className="hover:text-[oklch(0.84_0.07_298)] transition-colors cursor-pointer">
                        {label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinic Info */}
            <div>
              <h4
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "oklch(0.92 0.005 65)",
                  marginBottom: "1rem",
                }}
              >
                Clinic
              </h4>
              <ul className="flex flex-col gap-2 text-sm" style={{ color: "oklch(0.65 0.005 65)" }}>
                {[
                  ["About Awaken Wellness", "/about"],
                  ["Meet the Practitioners", "/practitioners"],
                  ["Insurance & Pricing", "/insurance"],
                  ["Veteran Care", "/veteran-care"],
                  ["Blog", "/blog"],
                  ["Contact", "/contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link href={href}>
                      <span className="hover:text-[oklch(0.84_0.07_298)] transition-colors cursor-pointer">
                        {label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/book-appointment">
                  <span className="btn-lotus text-sm">
                    Book Appointment
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
            style={{
              borderTop: "1px solid oklch(1 0 0 / 0.08)",
              color: "oklch(0.50 0.005 65)",
            }}
          >
            <p>
              © 2026 Awaken Wellness · Columbia, Maryland · Howard County
            </p>
            <p>
              Acupuncture · Massage Therapy · Nutritional Counseling · Chinese Herbal Medicine
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
