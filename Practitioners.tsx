// ============================================================
// AWAKEN WELLNESS — Book Appointment Page
// ============================================================

import React, { useState } from "react";
import { CheckCircle, Calendar, Clock, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/components/SharedComponents";
import { CLINIC } from "@/lib/siteData";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal();
  return <div ref={ref} className="fade-up" style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const SERVICES_OPTIONS = [
  "Acupuncture – Initial Consultation (75–90 min)",
  "Acupuncture – Follow-Up (60 min)",
  "Massage Therapy – Initial (60 min)",
  "Massage Therapy – Follow-Up (60 min)",
  "Nutritional Counseling – Initial (60 min)",
  "Acupuncture + Massage Combo (90 min)",
  "Fertility Acupuncture",
  "IVF Support Acupuncture",
  "Veteran Care Appointment",
  "Free 15-Minute Phone Consultation",
];

const PRACTITIONERS_OPTIONS = [
  "No preference",
  "Dr. Sarah Chen, L.Ac., DAOM",
  "Michael Torres, L.Ac., M.S.O.M.",
  "Jennifer Park, LMT",
  "Dr. Amanda Reyes, RDN",
];

export default function BookAppointment() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="py-20" style={{ background: "linear-gradient(135deg, oklch(0.92 0.04 308) 0%, oklch(0.93 0.04 152) 100%)" }}>
        <div className="container max-w-3xl">
          <div className="section-label mb-4">Book Your Appointment</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(2.2rem, 5vw, 3.6rem)", color: "oklch(0.20 0.012 65)", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Start Your Healing Journey<br /><em style={{ color: "oklch(0.44 0.13 308)" }}>at Awaken Wellness</em>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", color: "oklch(0.38 0.008 65)", lineHeight: 1.75, maxWidth: "580px" }}>
            New and returning patients welcome. We'll confirm your appointment within one business day and verify your insurance benefits before your visit.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: "oklch(1 0 0)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <FadeUp>
                {submitted ? (
                  <div className="rounded-2xl p-12 text-center" style={{ background: "linear-gradient(135deg, oklch(0.93 0.04 152), oklch(0.92 0.04 308))", border: "1px solid oklch(0.84 0.07 298)" }}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "oklch(0.48 0.10 152)", color: "white" }}>
                      <CheckCircle size={32} />
                    </div>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "2rem", color: "oklch(0.20 0.012 65)", marginBottom: "1rem" }}>
                      Request Received!
                    </h2>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "oklch(0.38 0.008 65)", lineHeight: 1.75, maxWidth: "400px", margin: "0 auto 1.5rem" }}>
                      Thank you for reaching out to Awaken Wellness. We'll contact you within one business day to confirm your appointment and verify your insurance benefits.
                    </p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "oklch(0.45 0.008 65)" }}>
                      Questions? Call us at <a href={`tel:${CLINIC.phone}`} style={{ color: "oklch(0.44 0.13 308)", fontWeight: 600 }}>{CLINIC.phone}</a>
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.8rem", color: "oklch(0.20 0.012 65)", marginBottom: "0.5rem" }}>
                      Appointment Request Form
                    </h2>

                    {/* Name */}
                    <div className="grid grid-cols-2 gap-4">
                      {["First Name *", "Last Name *"].map((label) => (
                        <div key={label}>
                          <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 600, color: "oklch(0.38 0.008 65)", display: "block", marginBottom: "0.4rem" }}>{label}</label>
                          <input required type="text" className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ background: "oklch(0.97 0.008 85)", border: "1px solid oklch(0.88 0.010 80)", fontFamily: "'DM Sans', sans-serif", color: "oklch(0.28 0.012 65)" }} />
                        </div>
                      ))}
                    </div>

                    {/* Contact */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 600, color: "oklch(0.38 0.008 65)", display: "block", marginBottom: "0.4rem" }}>Email Address *</label>
                        <input required type="email" className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ background: "oklch(0.97 0.008 85)", border: "1px solid oklch(0.88 0.010 80)", fontFamily: "'DM Sans', sans-serif", color: "oklch(0.28 0.012 65)" }} />
                      </div>
                      <div>
                        <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 600, color: "oklch(0.38 0.008 65)", display: "block", marginBottom: "0.4rem" }}>Phone Number *</label>
                        <input required type="tel" className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ background: "oklch(0.97 0.008 85)", border: "1px solid oklch(0.88 0.010 80)", fontFamily: "'DM Sans', sans-serif", color: "oklch(0.28 0.012 65)" }} />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 600, color: "oklch(0.38 0.008 65)", display: "block", marginBottom: "0.4rem" }}>Service Requested *</label>
                      <select required className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ background: "oklch(0.97 0.008 85)", border: "1px solid oklch(0.88 0.010 80)", fontFamily: "'DM Sans', sans-serif", color: "oklch(0.28 0.012 65)" }}>
                        <option value="">Select a service...</option>
                        {SERVICES_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    {/* Practitioner */}
                    <div>
                      <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 600, color: "oklch(0.38 0.008 65)", display: "block", marginBottom: "0.4rem" }}>Preferred Practitioner</label>
                      <select className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ background: "oklch(0.97 0.008 85)", border: "1px solid oklch(0.88 0.010 80)", fontFamily: "'DM Sans', sans-serif", color: "oklch(0.28 0.012 65)" }}>
                        {PRACTITIONERS_OPTIONS.map((p) => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>

                    {/* Preferred Dates */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 600, color: "oklch(0.38 0.008 65)", display: "block", marginBottom: "0.4rem" }}>Preferred Date</label>
                        <input type="date" className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ background: "oklch(0.97 0.008 85)", border: "1px solid oklch(0.88 0.010 80)", fontFamily: "'DM Sans', sans-serif", color: "oklch(0.28 0.012 65)" }} />
                      </div>
                      <div>
                        <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 600, color: "oklch(0.38 0.008 65)", display: "block", marginBottom: "0.4rem" }}>Preferred Time</label>
                        <select className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ background: "oklch(0.97 0.008 85)", border: "1px solid oklch(0.88 0.010 80)", fontFamily: "'DM Sans', sans-serif", color: "oklch(0.28 0.012 65)" }}>
                          <option>Morning (9am–12pm)</option>
                          <option>Afternoon (12pm–3pm)</option>
                          <option>Late Afternoon (3pm–6pm)</option>
                          <option>Saturday Morning</option>
                        </select>
                      </div>
                    </div>

                    {/* Insurance */}
                    <div>
                      <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 600, color: "oklch(0.38 0.008 65)", display: "block", marginBottom: "0.4rem" }}>Insurance Provider (if applicable)</label>
                      <input type="text" placeholder="e.g., BlueCross BlueShield, Tricare, Self-pay" className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ background: "oklch(0.97 0.008 85)", border: "1px solid oklch(0.88 0.010 80)", fontFamily: "'DM Sans', sans-serif", color: "oklch(0.28 0.012 65)" }} />
                    </div>

                    {/* New Patient */}
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="new-patient" className="w-4 h-4 rounded" style={{ accentColor: "oklch(0.44 0.13 308)" }} />
                      <label htmlFor="new-patient" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "oklch(0.38 0.008 65)" }}>I am a new patient at Awaken Wellness</label>
                    </div>

                    {/* Health Concerns */}
                    <div>
                      <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 600, color: "oklch(0.38 0.008 65)", display: "block", marginBottom: "0.4rem" }}>Primary Health Concern</label>
                      <textarea rows={4} placeholder="Briefly describe your main health concern and what you're hoping to address..." className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none" style={{ background: "oklch(0.97 0.008 85)", border: "1px solid oklch(0.88 0.010 80)", fontFamily: "'DM Sans', sans-serif", color: "oklch(0.28 0.012 65)" }} />
                    </div>

                    <button type="submit" className="btn-lotus w-full justify-center text-base py-4">
                      <Calendar size={16} />
                      Submit Appointment Request
                    </button>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "oklch(0.55 0.008 65)", textAlign: "center" }}>
                      We'll confirm your appointment within one business day.
                    </p>
                  </form>
                )}
              </FadeUp>
            </div>

            {/* Sidebar */}
            <div>
              <FadeUp delay={150}>
                <div className="flex flex-col gap-5">
                  <div className="rounded-2xl p-6" style={{ background: "oklch(0.97 0.008 85)", border: "1px solid oklch(0.90 0.010 80)" }}>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.25rem", color: "oklch(0.20 0.012 65)", marginBottom: "1rem" }}>Prefer to Call?</h3>
                    <a href={`tel:${CLINIC.phone}`} className="flex items-center gap-3 mb-2" style={{ textDecoration: "none" }}>
                      <Phone size={18} style={{ color: "oklch(0.44 0.13 308)" }} />
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "1.1rem", color: "oklch(0.44 0.13 308)" }}>{CLINIC.phone}</span>
                    </a>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "oklch(0.48 0.008 65)" }}>Mon–Fri 9am–6pm | Sat 9am–2pm</p>
                  </div>

                  <div className="rounded-2xl p-6" style={{ background: "oklch(0.97 0.008 85)", border: "1px solid oklch(0.90 0.010 80)" }}>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.25rem", color: "oklch(0.20 0.012 65)", marginBottom: "0.75rem" }}>What to Expect</h3>
                    <div className="flex flex-col gap-3">
                      {[
                        { icon: <CheckCircle size={15} />, text: "We'll verify your insurance before your visit" },
                        { icon: <Clock size={15} />, text: "New patient appointments: 75–90 minutes" },
                        { icon: <Calendar size={15} />, text: "Same-week appointments often available" },
                        { icon: <CheckCircle size={15} />, text: "Intake forms sent digitally before your visit" },
                      ].map((item) => (
                        <div key={item.text} className="flex items-start gap-2.5">
                          <span style={{ color: "oklch(0.48 0.10 152)", flexShrink: 0, marginTop: "2px" }}>{item.icon}</span>
                          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "oklch(0.40 0.008 65)", lineHeight: 1.5 }}>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl p-6" style={{ background: "linear-gradient(135deg, oklch(0.44 0.13 308), oklch(0.48 0.10 152))" }}>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.25rem", color: "oklch(0.97 0.005 85)", marginBottom: "0.6rem" }}>Insurance Accepted</h3>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "oklch(0.88 0.005 85)", lineHeight: 1.6 }}>
                      We accept most major insurance plans including BlueCross, Aetna, Cigna, United Healthcare, CareFirst, and Tricare for veterans.
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
