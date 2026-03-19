// ============================================================
// AWAKEN WELLNESS — Reusable Condition Page Template
// Used for all 20 condition-specific landing pages
// Each page links back to /acupuncture (internal SEO linking)
// ============================================================

import { Link } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { CTABanner, TestimonialsSection, useScrollReveal } from "@/components/SharedComponents";

const ACUPUNCTURE_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663426380560/CsB8cut5RrT75gbPHJuh8F/hero-acupuncture-Haz5pDryazsvirjBvP5ssb.webp";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal();
  return <div ref={ref} className="fade-up" style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export interface ConditionPageData {
  title: string;
  h1: string;
  pillar: string;
  pillarHref: string;
  metaDescription: string;
  intro: string;
  howItHelps: string;
  symptoms: string[];
  whatToExpect: string;
  relatedConditions: { title: string; href: string }[];
  faqItems: { q: string; a: string }[];
}

interface ConditionPageProps {
  data: ConditionPageData;
}

export default function ConditionPage({ data }: ConditionPageProps) {
  return (
    <Layout>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, oklch(0.92 0.04 308) 0%, oklch(0.93 0.04 152) 100%)",
        }}
      >
        <div className="container max-w-3xl">
          <div className="flex items-center gap-2 mb-4 text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.48 0.10 152)" }}>
            <Link href="/conditions"><span className="hover:underline cursor-pointer">Conditions</span></Link>
            <span>/</span>
            <Link href={data.pillarHref}><span className="hover:underline cursor-pointer">{data.pillar}</span></Link>
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: "clamp(2rem, 5vw, 3.4rem)",
              color: "oklch(0.20 0.012 65)",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            {data.h1}
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.1rem",
              color: "oklch(0.38 0.008 65)",
              lineHeight: 1.75,
              maxWidth: "580px",
              marginBottom: "2rem",
            }}
          >
            {data.intro}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/book-appointment">
              <span className="btn-lotus">Book Acupuncture Appointment <ArrowRight size={15} /></span>
            </Link>
            <Link href="/acupuncture">
              <span className="btn-sage">About Acupuncture <ArrowRight size={14} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────── */}
      <section className="py-20" style={{ background: "oklch(1 0 0)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Column */}
            <div className="lg:col-span-2">
              <FadeUp>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.9rem", color: "oklch(0.20 0.012 65)", marginBottom: "1rem" }}>
                  How Acupuncture Helps
                </h2>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "oklch(0.42 0.008 65)", lineHeight: 1.8, marginBottom: "2rem" }}>
                  {data.howItHelps}
                </p>

                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.5rem", color: "oklch(0.20 0.012 65)", marginBottom: "0.75rem" }}>
                  Common Symptoms We Address
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {data.symptoms.map((s) => (
                    <div key={s} className="flex items-start gap-2.5">
                      <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.48 0.10 152)" }} />
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "oklch(0.38 0.008 65)" }}>{s}</span>
                    </div>
                  ))}
                </div>

                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.5rem", color: "oklch(0.20 0.012 65)", marginBottom: "0.75rem" }}>
                  What to Expect at Awaken Wellness
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "oklch(0.42 0.008 65)", lineHeight: 1.8, marginBottom: "2rem" }}>
                  {data.whatToExpect}
                </p>

                {/* FAQ */}
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.5rem", color: "oklch(0.20 0.012 65)", marginBottom: "1rem" }}>
                  Frequently Asked Questions
                </h3>
                <div className="flex flex-col gap-4">
                  {data.faqItems.map((faq) => (
                    <div key={faq.q} className="rounded-xl p-6" style={{ background: "oklch(0.97 0.008 85)", border: "1px solid oklch(0.90 0.010 80)" }}>
                      <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.1rem", color: "oklch(0.20 0.012 65)", marginBottom: "0.5rem" }}>{faq.q}</h4>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "oklch(0.42 0.008 65)", lineHeight: 1.7 }}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FadeUp delay={150}>
                {/* Book CTA */}
                <div className="rounded-2xl p-7 mb-6" style={{ background: "linear-gradient(135deg, oklch(0.44 0.13 308), oklch(0.48 0.10 152))" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.4rem", color: "oklch(0.97 0.005 85)", marginBottom: "0.75rem" }}>
                    Start Your Healing Plan
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "oklch(0.88 0.005 85)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                    Book your first acupuncture appointment at Awaken Wellness in Columbia, Maryland. New patients welcome.
                  </p>
                  <Link href="/book-appointment">
                    <span style={{ display: "block", background: "oklch(0.97 0.005 85)", color: "oklch(0.44 0.13 308)", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.9rem", padding: "0.75rem 1.25rem", borderRadius: "2rem", textAlign: "center", textDecoration: "none" }}>
                      Book Appointment
                    </span>
                  </Link>
                </div>

                {/* Image */}
                <div className="rounded-2xl overflow-hidden mb-6" style={{ aspectRatio: "4/3" }}>
                  <img src={ACUPUNCTURE_IMAGE} alt="Acupuncture treatment Columbia MD" className="w-full h-full object-cover" />
                </div>

                {/* Related Conditions */}
                <div className="rounded-2xl p-6" style={{ background: "oklch(0.97 0.008 85)", border: "1px solid oklch(0.90 0.010 80)" }}>
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.1rem", color: "oklch(0.20 0.012 65)", marginBottom: "0.75rem" }}>
                    Related Conditions
                  </h4>
                  <div className="flex flex-col gap-2">
                    {data.relatedConditions.map((c) => (
                      <Link key={c.href} href={c.href}>
                        <span className="flex items-center justify-between py-2 text-sm cursor-pointer hover:text-[oklch(0.44_0.13_308)] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.38 0.008 65)", borderBottom: "1px solid oklch(0.90 0.010 80)" }}>
                          {c.title}
                          <ArrowRight size={12} />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTABanner title={`Ready to Address Your ${data.title}?`} subtitle="Book your acupuncture appointment at Awaken Wellness in Columbia, Maryland. Serving Howard County and the greater Baltimore area." primaryLabel="Book Acupuncture Appointment" />
    </Layout>
  );
}

// ── All 20 Condition Page Data ────────────────────────────────

export const CONDITION_DATA: Record<string, ConditionPageData> = {
  "back-pain": {
    title: "Back Pain",
    h1: "Acupuncture for Back Pain in Columbia, MD",
    pillar: "Chronic Pain",
    pillarHref: "/conditions/chronic-pain",
    metaDescription: "Acupuncture for back pain in Columbia, Maryland. Evidence-based treatment for lower back pain, herniated discs, and chronic back conditions at Awaken Wellness.",
    intro: "Back pain is one of the most common reasons people seek acupuncture — and one of the conditions where acupuncture has the strongest evidence base. At Awaken Wellness in Columbia, MD, we treat both acute and chronic back pain using targeted acupuncture protocols.",
    howItHelps: "Acupuncture addresses back pain through multiple mechanisms. It stimulates the release of endorphins — the body's natural pain-relieving compounds — while simultaneously reducing the inflammatory cytokines that drive chronic pain cycles. For back pain specifically, acupuncture relaxes the paraspinal muscles, improves circulation to the lumbar region, and modulates pain signals through the nervous system. Research published in the Archives of Internal Medicine found acupuncture significantly more effective than conventional treatments for chronic lower back pain.",
    symptoms: ["Lower back pain and stiffness", "Herniated or bulging disc pain", "Muscle spasms and tightness", "Radiating pain into the hips or legs", "Pain that worsens with sitting or standing", "Post-surgical back pain", "Sacroiliac joint dysfunction", "Lumbar stenosis discomfort"],
    whatToExpect: "Your first visit will include a comprehensive intake to understand the nature, location, and history of your back pain. We'll assess your posture, movement patterns, and any contributing factors. Treatment typically involves needles placed along the lumbar meridians, as well as distal points that have a strong effect on the lower back. Many patients notice significant relief within 3–6 sessions, though chronic conditions may require a longer course of treatment.",
    relatedConditions: [
      { title: "Acupuncture for Sciatica", href: "/conditions/sciatica" },
      { title: "Acupuncture for Neck Pain", href: "/conditions/neck-pain" },
      { title: "Acupuncture for Arthritis", href: "/conditions/arthritis" },
      { title: "Massage Therapy for Back Pain", href: "/massage-therapy" },
    ],
    faqItems: [
      { q: "How many acupuncture sessions will I need for back pain?", a: "Most patients with acute back pain see significant improvement in 3–6 sessions. Chronic back pain typically requires 8–12 sessions for lasting relief, followed by monthly maintenance treatments." },
      { q: "Does acupuncture hurt?", a: "Most patients are surprised by how comfortable acupuncture is. The needles are extremely fine — much thinner than hypodermic needles — and most people feel little to no discomfort. Many patients fall asleep during treatment." },
      { q: "Is acupuncture covered by insurance for back pain?", a: "Many insurance plans now cover acupuncture for chronic lower back pain, including Medicare. We'll verify your benefits before your first appointment." },
    ],
  },
  "neck-pain": {
    title: "Neck Pain",
    h1: "Acupuncture for Neck Pain in Columbia, MD",
    pillar: "Chronic Pain",
    pillarHref: "/conditions/chronic-pain",
    metaDescription: "Acupuncture for neck pain and stiffness in Columbia, Maryland. Effective treatment for cervical pain, tension headaches, and whiplash at Awaken Wellness.",
    intro: "Neck pain — whether from poor posture, stress, injury, or cervical disc issues — responds exceptionally well to acupuncture. Our practitioners in Columbia, MD use targeted protocols to release deep cervical tension and restore normal range of motion.",
    howItHelps: "Acupuncture for neck pain works by releasing tight muscles along the cervical spine, reducing inflammation in the facet joints, and calming the pain signals transmitted through the cervical nerves. We also address the stress and nervous system dysregulation that so often underlies chronic neck tension.",
    symptoms: ["Chronic neck stiffness and tightness", "Limited range of motion", "Tension headaches originating in the neck", "Whiplash and post-injury pain", "Cervical disc herniation discomfort", "Tech neck and postural pain", "Shoulder and upper back tension", "Nerve pain radiating into the arms"],
    whatToExpect: "Treatment for neck pain typically involves needles placed along the gallbladder and bladder meridians of the neck and upper back, as well as distal points on the hands and feet that have a strong effect on cervical tension. We often combine acupuncture with cupping or Gua Sha for neck conditions.",
    relatedConditions: [
      { title: "Acupuncture for Back Pain", href: "/conditions/back-pain" },
      { title: "Acupuncture for Migraines", href: "/conditions/migraines" },
      { title: "Acupuncture for Stress", href: "/conditions/stress" },
      { title: "Massage Therapy", href: "/massage-therapy" },
    ],
    faqItems: [
      { q: "Can acupuncture help with tech neck?", a: "Yes. Tech neck — the chronic forward head posture from screen use — creates predictable patterns of cervical tension that acupuncture addresses very effectively, especially when combined with postural advice." },
      { q: "How quickly will I see results?", a: "Many patients notice immediate improvement in range of motion and pain levels after their first session. Lasting results typically require 4–8 treatments." },
    ],
  },
  "sciatica": {
    title: "Sciatica",
    h1: "Acupuncture for Sciatica in Columbia, MD",
    pillar: "Chronic Pain",
    pillarHref: "/conditions/chronic-pain",
    metaDescription: "Acupuncture for sciatica in Columbia, Maryland. Effective treatment for sciatic nerve pain, piriformis syndrome, and radiating leg pain at Awaken Wellness.",
    intro: "Sciatica — the sharp, burning, or shooting pain that radiates from the lower back through the buttock and down the leg — can be debilitating. Acupuncture offers a powerful, drug-free approach to relieving sciatic nerve pain at its source.",
    howItHelps: "Acupuncture relieves sciatica by reducing inflammation around the sciatic nerve, releasing the piriformis and other muscles that may be compressing the nerve, and modulating pain signals through the nervous system. It also addresses the lumbar disc issues and spinal stenosis that commonly underlie sciatic nerve irritation.",
    symptoms: ["Sharp or burning pain from lower back to foot", "Numbness or tingling in the leg", "Weakness in the affected leg", "Pain that worsens with sitting", "Piriformis syndrome", "Radiating pain into the buttock", "Difficulty walking or standing", "Pain that worsens at night"],
    whatToExpect: "Sciatica treatment at Awaken Wellness involves a combination of local points along the gallbladder and bladder meridians of the lower back and leg, combined with points that specifically address nerve pain and inflammation. Most patients with sciatica require 6–10 sessions for significant relief.",
    relatedConditions: [
      { title: "Acupuncture for Back Pain", href: "/conditions/back-pain" },
      { title: "Acupuncture for Arthritis", href: "/conditions/arthritis" },
      { title: "Massage Therapy", href: "/massage-therapy" },
    ],
    faqItems: [
      { q: "Is acupuncture effective for sciatica caused by a herniated disc?", a: "Yes. Acupuncture can significantly reduce the inflammation and muscle spasm that exacerbate disc-related sciatica, even when the disc itself cannot be directly treated. Many patients avoid surgery by pursuing acupuncture treatment." },
    ],
  },
  "migraines": {
    title: "Migraines",
    h1: "Acupuncture for Migraines in Columbia, MD",
    pillar: "Chronic Pain",
    pillarHref: "/conditions/chronic-pain",
    metaDescription: "Acupuncture for migraines and headaches in Columbia, Maryland. Reduce migraine frequency and severity without medication at Awaken Wellness.",
    intro: "Migraines affect over 37 million Americans and are among the most disabling neurological conditions. Acupuncture has a strong evidence base for both preventing migraines and reducing their severity — often matching the effectiveness of preventive medications without the side effects.",
    howItHelps: "Acupuncture reduces migraine frequency by regulating the trigeminovascular system, reducing cortical spreading depression (the neurological event that triggers migraines), and balancing the autonomic nervous system. It also addresses the neck tension, hormonal fluctuations, and stress that commonly trigger migraines.",
    symptoms: ["Frequent migraine attacks", "Aura before migraines", "Nausea and light sensitivity", "Hormonal migraines (menstrual cycle related)", "Tension headaches", "Cluster headaches", "Post-migraine fatigue", "Chronic daily headache"],
    whatToExpect: "Migraine treatment typically requires a consistent course of weekly acupuncture for 6–8 weeks to establish a preventive effect. Many patients notice a gradual reduction in migraine frequency and severity over this period. We also address lifestyle factors — sleep, stress, and dietary triggers — as part of your treatment plan.",
    relatedConditions: [
      { title: "Acupuncture for Neck Pain", href: "/conditions/neck-pain" },
      { title: "Acupuncture for Anxiety", href: "/conditions/anxiety" },
      { title: "Acupuncture for Sleep Problems", href: "/conditions/sleep" },
    ],
    faqItems: [
      { q: "How does acupuncture compare to migraine medication?", a: "Multiple systematic reviews have found acupuncture as effective as prophylactic migraine medications, with significantly fewer side effects. Many patients use acupuncture to reduce or eliminate their reliance on medication." },
    ],
  },
  "arthritis": {
    title: "Arthritis",
    h1: "Acupuncture for Arthritis in Columbia, MD",
    pillar: "Chronic Pain",
    pillarHref: "/conditions/chronic-pain",
    metaDescription: "Acupuncture for arthritis pain in Columbia, Maryland. Effective treatment for osteoarthritis, rheumatoid arthritis, and joint pain at Awaken Wellness.",
    intro: "Whether you're dealing with osteoarthritis, rheumatoid arthritis, or other inflammatory joint conditions, acupuncture offers meaningful relief from pain and stiffness — and may help slow the progression of joint degeneration.",
    howItHelps: "Acupuncture reduces arthritis pain by decreasing local inflammation, improving synovial fluid circulation within the joint, and modulating the pain signals from damaged cartilage. For rheumatoid arthritis, acupuncture also helps regulate the immune response that drives joint inflammation.",
    symptoms: ["Joint pain and stiffness", "Morning stiffness lasting more than 30 minutes", "Swollen or tender joints", "Reduced range of motion", "Knee, hip, or hand arthritis", "Inflammatory arthritis flares", "Post-surgical joint pain", "Fibromyalgia"],
    whatToExpect: "Arthritis treatment involves both local needling around the affected joints and systemic points that address inflammation and immune regulation. We often combine acupuncture with nutritional counseling to address the dietary drivers of inflammation.",
    relatedConditions: [
      { title: "Acupuncture for Back Pain", href: "/conditions/back-pain" },
      { title: "Nutrition Counseling", href: "/nutrition-counseling" },
      { title: "Massage Therapy", href: "/massage-therapy" },
    ],
    faqItems: [
      { q: "Can acupuncture help with knee arthritis?", a: "Yes. Knee osteoarthritis is one of the most well-studied conditions in acupuncture research. Multiple large trials have found significant pain reduction and improved function with acupuncture treatment." },
    ],
  },
  "anxiety": {
    title: "Anxiety",
    h1: "Acupuncture for Anxiety in Columbia, MD",
    pillar: "Anxiety & Stress",
    pillarHref: "/conditions/anxiety-stress",
    metaDescription: "Acupuncture for anxiety in Columbia, Maryland. Natural, evidence-based treatment for generalized anxiety, panic attacks, and chronic stress at Awaken Wellness.",
    intro: "Anxiety is one of the most common reasons people seek acupuncture — and one of the conditions where the results can be most dramatic. At Awaken Wellness, we address anxiety at its neurological root by regulating the autonomic nervous system.",
    howItHelps: "Acupuncture activates the parasympathetic nervous system — shifting your body out of the chronic fight-or-flight state that underlies anxiety. It increases GABA activity, reduces cortisol levels, and stimulates the release of serotonin and endorphins. Many patients describe feeling a profound sense of calm during and after treatment that persists for days.",
    symptoms: ["Generalized anxiety and worry", "Panic attacks", "Social anxiety", "Racing thoughts and rumination", "Physical anxiety symptoms (heart pounding, shallow breathing)", "Anxiety-related insomnia", "Irritability and emotional reactivity", "Anxiety with depression"],
    whatToExpect: "Anxiety treatment at Awaken Wellness is deeply calming. Most patients notice an immediate shift in their nervous system state during their first session. A course of 6–10 weekly treatments typically produces significant, lasting reductions in anxiety levels.",
    relatedConditions: [
      { title: "Acupuncture for Stress", href: "/conditions/stress" },
      { title: "Acupuncture for Sleep Problems", href: "/conditions/sleep" },
      { title: "Acupuncture for Nervous System Regulation", href: "/conditions/nervous-system" },
    ],
    faqItems: [
      { q: "Does acupuncture help with panic attacks?", a: "Yes. Acupuncture is particularly effective for the physical symptoms of panic attacks — heart palpitations, shortness of breath, and the sense of dread. Regular treatment reduces both the frequency and intensity of panic episodes." },
    ],
  },
  "stress": {
    title: "Stress",
    h1: "Acupuncture for Stress in Columbia, MD",
    pillar: "Anxiety & Stress",
    pillarHref: "/conditions/anxiety-stress",
    metaDescription: "Acupuncture for stress relief in Columbia, Maryland. Reduce cortisol, calm your nervous system, and restore balance at Awaken Wellness.",
    intro: "Chronic stress is not just an emotional experience — it's a physiological state that damages your body over time. Acupuncture is one of the most effective tools available for resetting a chronically stressed nervous system.",
    howItHelps: "Acupuncture reduces the physiological burden of stress by lowering cortisol levels, activating the parasympathetic nervous system, and restoring the body's natural stress-recovery cycle. It addresses both the immediate symptoms of stress and the deeper patterns of nervous system dysregulation that make stress chronic.",
    symptoms: ["Chronic tension and tightness", "Elevated cortisol and adrenal fatigue", "Stress-related headaches", "Digestive upset from stress", "Stress-related insomnia", "Emotional exhaustion", "Difficulty relaxing or unwinding", "Stress-related skin conditions"],
    whatToExpect: "Stress treatment is deeply restorative. Sessions are designed to be profoundly relaxing, and many patients fall asleep on the table. We also work with you on lifestyle factors — sleep hygiene, nutrition, and nervous system regulation practices — that support your recovery between sessions.",
    relatedConditions: [
      { title: "Acupuncture for Anxiety", href: "/conditions/anxiety" },
      { title: "Acupuncture for Burnout", href: "/conditions/burnout" },
      { title: "Acupuncture for Sleep Problems", href: "/conditions/sleep" },
    ],
    faqItems: [
      { q: "How quickly does acupuncture reduce stress?", a: "Most patients notice a significant reduction in stress levels immediately after their first session. The effects deepen and become more lasting with regular treatment over 4–8 weeks." },
    ],
  },
  "burnout": {
    title: "Burnout",
    h1: "Acupuncture for Burnout in Columbia, MD",
    pillar: "Anxiety & Stress",
    pillarHref: "/conditions/anxiety-stress",
    metaDescription: "Acupuncture for burnout and adrenal fatigue in Columbia, Maryland. Restore your energy and resilience with holistic care at Awaken Wellness.",
    intro: "Burnout — the state of chronic exhaustion, emotional depletion, and disconnection that results from prolonged stress — is reaching epidemic levels. Acupuncture addresses the physiological underpinnings of burnout in ways that rest alone cannot.",
    howItHelps: "Burnout is rooted in HPA axis dysregulation — the exhaustion of the body's stress response system. Acupuncture helps restore normal cortisol rhythms, supports adrenal recovery, and rebuilds the body's capacity for resilience. It also addresses the sleep disruption, digestive issues, and emotional numbness that accompany burnout.",
    symptoms: ["Profound exhaustion unrelieved by rest", "Emotional numbness or detachment", "Inability to concentrate", "Physical symptoms without clear cause", "Loss of motivation and purpose", "Adrenal fatigue", "Hormonal disruption from chronic stress", "Cynicism and withdrawal"],
    whatToExpect: "Burnout recovery through acupuncture is a gradual process that typically requires 10–16 sessions over 3–4 months. We take a comprehensive approach that includes nutritional support for adrenal recovery, sleep optimization, and lifestyle guidance alongside your acupuncture treatments.",
    relatedConditions: [
      { title: "Acupuncture for Stress", href: "/conditions/stress" },
      { title: "Acupuncture for Fatigue", href: "/conditions/fatigue" },
      { title: "Nutrition Counseling", href: "/nutrition-counseling" },
    ],
    faqItems: [
      { q: "Is burnout the same as adrenal fatigue?", a: "They overlap significantly. Burnout is the psychological and functional state; adrenal fatigue describes the underlying physiological dysregulation of the HPA axis. Acupuncture addresses both dimensions." },
    ],
  },
  "sleep": {
    title: "Sleep Problems",
    h1: "Acupuncture for Sleep Problems in Columbia, MD",
    pillar: "Anxiety & Stress",
    pillarHref: "/conditions/anxiety-stress",
    metaDescription: "Acupuncture for insomnia and sleep problems in Columbia, Maryland. Natural, drug-free treatment for better sleep at Awaken Wellness.",
    intro: "Poor sleep is both a symptom and a driver of virtually every chronic health condition. Acupuncture addresses the neurological and hormonal imbalances that disrupt sleep — without the dependency risks of sleep medications.",
    howItHelps: "Acupuncture improves sleep by increasing melatonin production, reducing the cortisol levels that keep the brain alert at night, and calming the nervous system hyperarousal that underlies most insomnia. It also addresses the anxiety, pain, and hormonal issues that are common secondary causes of sleep disruption.",
    symptoms: ["Difficulty falling asleep", "Waking frequently during the night", "Early morning awakening", "Non-restorative sleep", "Sleep anxiety", "Restless legs syndrome", "Night sweats disrupting sleep", "Vivid or disturbing dreams"],
    whatToExpect: "Sleep treatment typically shows results within 4–6 sessions. We assess the pattern of your sleep disruption — which, in Chinese medicine, can indicate different underlying imbalances — and tailor your treatment accordingly.",
    relatedConditions: [
      { title: "Acupuncture for Anxiety", href: "/conditions/anxiety" },
      { title: "Acupuncture for Stress", href: "/conditions/stress" },
      { title: "Acupuncture for Nervous System Regulation", href: "/conditions/nervous-system" },
    ],
    faqItems: [
      { q: "Can acupuncture help with insomnia?", a: "Yes. Multiple clinical trials have found acupuncture significantly improves sleep quality, sleep onset latency, and total sleep time in people with chronic insomnia." },
    ],
  },
  "nervous-system": {
    title: "Nervous System Regulation",
    h1: "Acupuncture for Nervous System Regulation in Columbia, MD",
    pillar: "Anxiety & Stress",
    pillarHref: "/conditions/anxiety-stress",
    metaDescription: "Acupuncture for nervous system regulation in Columbia, Maryland. Restore autonomic balance and build resilience with holistic care at Awaken Wellness.",
    intro: "Many chronic health conditions — from anxiety and digestive issues to chronic pain and fatigue — share a common root: a dysregulated autonomic nervous system. Acupuncture is uniquely effective at restoring this foundational balance.",
    howItHelps: "Acupuncture directly modulates the autonomic nervous system by activating the vagus nerve and shifting the body from sympathetic dominance (fight-or-flight) to parasympathetic tone (rest-and-digest). This shift is the foundation of healing for virtually every chronic condition we treat.",
    symptoms: ["Chronic fight-or-flight state", "Digestive dysfunction from nervous system dysregulation", "Anxiety and hypervigilance", "Difficulty relaxing or feeling safe", "Trauma-related nervous system patterns", "Chronic fatigue and burnout", "Sensory sensitivity and overwhelm", "Dysautonomia symptoms"],
    whatToExpect: "Nervous system regulation treatment is a gradual, cumulative process. We use specific acupuncture protocols known to activate the parasympathetic nervous system, combined with breathing practices and lifestyle guidance to support your recovery between sessions.",
    relatedConditions: [
      { title: "Acupuncture for Anxiety", href: "/conditions/anxiety" },
      { title: "Acupuncture for Burnout", href: "/conditions/burnout" },
      { title: "Acupuncture for Digestive Health", href: "/conditions/gut-health" },
    ],
    faqItems: [
      { q: "What is the vagus nerve and how does acupuncture affect it?", a: "The vagus nerve is the primary nerve of the parasympathetic nervous system, connecting the brain to the heart, lungs, and digestive tract. Acupuncture stimulates vagal tone, improving heart rate variability and shifting the body toward rest-and-heal mode." },
    ],
  },
  "ibs": {
    title: "IBS",
    h1: "Acupuncture for IBS in Columbia, MD",
    pillar: "Digestive Health",
    pillarHref: "/conditions/digestive-health",
    metaDescription: "Acupuncture for IBS (irritable bowel syndrome) in Columbia, Maryland. Natural treatment for IBS symptoms at Awaken Wellness.",
    intro: "Irritable Bowel Syndrome affects 10–15% of the population and is notoriously difficult to treat with conventional medicine. Acupuncture, combined with nutritional counseling, offers a comprehensive approach to IBS that addresses both the gut and the nervous system.",
    howItHelps: "IBS is fundamentally a disorder of the gut-brain axis — the bidirectional communication network between the digestive system and the central nervous system. Acupuncture regulates this axis by calming the enteric nervous system, reducing visceral hypersensitivity, and improving gut motility. It also addresses the anxiety and stress that so often trigger IBS flares.",
    symptoms: ["Abdominal cramping and pain", "Alternating diarrhea and constipation", "Bloating and gas", "Urgency and incomplete evacuation", "IBS triggered by stress", "Food sensitivities", "Nausea", "Fatigue associated with IBS"],
    whatToExpect: "IBS treatment at Awaken Wellness combines acupuncture with nutritional counseling to address both the gut and dietary dimensions of your condition. Most patients see significant improvement in 6–10 sessions.",
    relatedConditions: [
      { title: "Acupuncture for Bloating", href: "/conditions/bloating" },
      { title: "Acupuncture for Gut Health", href: "/conditions/gut-health" },
      { title: "Nutrition Counseling", href: "/nutrition-counseling" },
    ],
    faqItems: [
      { q: "Can acupuncture help IBS-D (diarrhea-predominant IBS)?", a: "Yes. Acupuncture is effective for all subtypes of IBS, including IBS-D, IBS-C, and mixed IBS. The treatment protocol is tailored to your specific pattern." },
    ],
  },
  "bloating": {
    title: "Bloating",
    h1: "Acupuncture for Bloating in Columbia, MD",
    pillar: "Digestive Health",
    pillarHref: "/conditions/digestive-health",
    metaDescription: "Acupuncture for bloating and digestive discomfort in Columbia, Maryland. Natural treatment at Awaken Wellness.",
    intro: "Chronic bloating — that uncomfortable, distended feeling that persists regardless of what you eat — is a sign that your digestive system is not functioning optimally. Acupuncture and nutritional counseling address the root causes of bloating rather than just managing symptoms.",
    howItHelps: "Bloating typically results from impaired gut motility, dysbiosis, food intolerances, or nervous system dysregulation affecting digestive function. Acupuncture improves peristalsis, reduces intestinal inflammation, and calms the enteric nervous system — addressing all of these mechanisms simultaneously.",
    symptoms: ["Persistent abdominal bloating", "Distension after eating", "Gas and flatulence", "Abdominal discomfort and pressure", "SIBO-related bloating", "Bloating with constipation", "Bloating triggered by stress", "Food-related bloating"],
    whatToExpect: "Bloating treatment combines acupuncture with a nutritional assessment to identify potential food triggers and gut health issues. Many patients notice improvement in digestive comfort within 4–6 sessions.",
    relatedConditions: [
      { title: "Acupuncture for IBS", href: "/conditions/ibs" },
      { title: "Acupuncture for Gut Health", href: "/conditions/gut-health" },
      { title: "Nutrition Counseling", href: "/nutrition-counseling" },
    ],
    faqItems: [
      { q: "Can acupuncture help with SIBO-related bloating?", a: "Acupuncture can help manage the symptoms of SIBO and support gut motility, but SIBO typically requires specific antimicrobial treatment as well. We work with your gastroenterologist to provide complementary care." },
    ],
  },
  "acid-reflux": {
    title: "Acid Reflux",
    h1: "Acupuncture for Acid Reflux in Columbia, MD",
    pillar: "Digestive Health",
    pillarHref: "/conditions/digestive-health",
    metaDescription: "Acupuncture for acid reflux and GERD in Columbia, Maryland. Natural treatment to reduce reflux symptoms at Awaken Wellness.",
    intro: "Acid reflux and GERD affect millions of Americans who rely on proton pump inhibitors for symptom management — without addressing the underlying dysfunction. Acupuncture offers a root-cause approach to reducing reflux frequency and severity.",
    howItHelps: "Acupuncture reduces acid reflux by improving lower esophageal sphincter tone, reducing gastric acid hypersecretion, and calming the vagal nerve dysfunction that often underlies GERD. It also addresses the stress and dietary factors that trigger reflux episodes.",
    symptoms: ["Heartburn and burning in the chest", "Regurgitation of acid or food", "Chronic cough from reflux", "Throat irritation and hoarseness", "Difficulty swallowing", "Nausea", "Bloating with reflux", "Nighttime reflux disrupting sleep"],
    whatToExpect: "Acid reflux treatment typically shows results within 4–8 sessions. We combine acupuncture with dietary guidance to identify and eliminate your personal reflux triggers.",
    relatedConditions: [
      { title: "Acupuncture for IBS", href: "/conditions/ibs" },
      { title: "Acupuncture for Gut Health", href: "/conditions/gut-health" },
      { title: "Nutrition Counseling", href: "/nutrition-counseling" },
    ],
    faqItems: [
      { q: "Can I use acupuncture alongside my reflux medication?", a: "Yes. Many patients use acupuncture to gradually reduce their reliance on PPIs under the guidance of their physician. We work collaboratively with your medical team." },
    ],
  },
  "constipation": {
    title: "Constipation",
    h1: "Acupuncture for Constipation in Columbia, MD",
    pillar: "Digestive Health",
    pillarHref: "/conditions/digestive-health",
    metaDescription: "Acupuncture for constipation in Columbia, Maryland. Natural treatment to restore healthy bowel function at Awaken Wellness.",
    intro: "Chronic constipation — defined as fewer than three bowel movements per week, or difficult, incomplete evacuation — affects millions of Americans and significantly impacts quality of life. Acupuncture is a safe, effective, drug-free approach to restoring healthy bowel function.",
    howItHelps: "Acupuncture stimulates peristalsis — the wave-like muscle contractions that move food through the digestive tract — by activating specific acupuncture points known to regulate gut motility. It also addresses the nervous system dysregulation and dietary factors that commonly underlie chronic constipation.",
    symptoms: ["Infrequent bowel movements", "Hard, dry stools", "Straining during bowel movements", "Feeling of incomplete evacuation", "Abdominal discomfort and bloating", "Constipation alternating with diarrhea", "Constipation from medication side effects", "Chronic constipation in older adults"],
    whatToExpect: "Constipation treatment typically involves 6–8 sessions combined with dietary guidance. Many patients notice improvement in bowel frequency and ease within the first few treatments.",
    relatedConditions: [
      { title: "Acupuncture for IBS", href: "/conditions/ibs" },
      { title: "Acupuncture for Bloating", href: "/conditions/bloating" },
      { title: "Nutrition Counseling", href: "/nutrition-counseling" },
    ],
    faqItems: [
      { q: "Which acupuncture points help with constipation?", a: "Points along the large intestine, stomach, and spleen meridians are commonly used for constipation. Specific points like ST25 (Tianshu) and ST36 (Zusanli) have well-documented effects on gut motility." },
    ],
  },
  "gut-health": {
    title: "Gut Health",
    h1: "Acupuncture for Gut Health in Columbia, MD",
    pillar: "Digestive Health",
    pillarHref: "/conditions/digestive-health",
    metaDescription: "Acupuncture for gut health and digestive wellness in Columbia, Maryland. Comprehensive holistic care at Awaken Wellness.",
    intro: "Your gut is your second brain — and when it's not functioning well, it affects everything from your mood and energy to your immune function and hormonal balance. At Awaken Wellness, we take a comprehensive approach to gut health that combines acupuncture, nutritional counseling, and Chinese herbal medicine.",
    howItHelps: "Acupuncture supports gut health by regulating the enteric nervous system, reducing intestinal inflammation, improving the gut microbiome environment, and strengthening the gut-brain axis. Combined with targeted nutritional counseling, this approach addresses the root causes of digestive dysfunction at multiple levels.",
    symptoms: ["General digestive dysfunction", "Gut dysbiosis and microbiome imbalance", "Leaky gut syndrome", "Food sensitivities and intolerances", "Chronic digestive discomfort", "Immune dysfunction related to gut health", "Mood and brain fog from gut-brain axis dysfunction", "Skin conditions related to gut health"],
    whatToExpect: "Gut health treatment at Awaken Wellness is comprehensive. Your first visit includes both an acupuncture intake and a nutritional assessment. We create an integrated treatment plan that addresses your gut health from multiple angles.",
    relatedConditions: [
      { title: "Acupuncture for IBS", href: "/conditions/ibs" },
      { title: "Acupuncture for Bloating", href: "/conditions/bloating" },
      { title: "Nutrition Counseling", href: "/nutrition-counseling" },
    ],
    faqItems: [
      { q: "How does acupuncture affect the gut microbiome?", a: "Research suggests acupuncture can positively influence the composition of the gut microbiome by reducing intestinal inflammation and improving the environment in which beneficial bacteria thrive." },
    ],
  },
  "fertility": {
    title: "Fertility",
    h1: "Acupuncture for Fertility in Columbia, MD",
    pillar: "Fertility Support",
    pillarHref: "/conditions/fertility-support",
    metaDescription: "Acupuncture for fertility support in Columbia, Maryland. Evidence-based treatment for natural conception and IVF support at Awaken Wellness.",
    intro: "Fertility acupuncture is one of the most researched applications of Chinese medicine, with a growing body of evidence supporting its role in improving reproductive outcomes — for both natural conception and assisted reproductive technologies like IVF.",
    howItHelps: "Acupuncture supports fertility by improving blood flow to the uterus and ovaries, regulating the hormonal axis that governs the menstrual cycle, reducing the stress hormones that can interfere with conception, and improving egg quality over time. It also addresses the underlying conditions — PCOS, endometriosis, thyroid dysfunction — that commonly impair fertility.",
    symptoms: ["Unexplained infertility", "Irregular or absent menstrual cycles", "PCOS-related fertility challenges", "Endometriosis", "Recurrent pregnancy loss", "Poor egg quality or ovarian reserve", "Male factor infertility support", "Stress-related fertility challenges"],
    whatToExpect: "Fertility treatment at Awaken Wellness begins with a comprehensive intake that reviews your complete reproductive history, cycle patterns, and any previous fertility investigations. We recommend beginning acupuncture at least 3 months before a planned IVF cycle for optimal results.",
    relatedConditions: [
      { title: "Acupuncture for IVF Support", href: "/conditions/ivf-support" },
      { title: "Acupuncture for PCOS Fertility", href: "/conditions/pcos-fertility" },
      { title: "Acupuncture Before Embryo Transfer", href: "/conditions/embryo-transfer" },
    ],
    faqItems: [
      { q: "When should I start acupuncture for fertility?", a: "Ideally, begin acupuncture 3–6 months before trying to conceive or before starting an IVF cycle. This allows time to regulate your cycle, improve egg quality, and optimize your overall reproductive health." },
    ],
  },
  "ivf-support": {
    title: "IVF Support",
    h1: "Acupuncture for IVF Support in Columbia, MD",
    pillar: "Fertility Support",
    pillarHref: "/conditions/fertility-support",
    metaDescription: "Acupuncture for IVF support in Columbia, Maryland. Improve IVF outcomes with evidence-based acupuncture at Awaken Wellness.",
    intro: "Acupuncture is increasingly used alongside IVF to improve outcomes. Research suggests that acupuncture around the time of embryo transfer may improve implantation rates and reduce the stress and anxiety that accompany IVF treatment.",
    howItHelps: "Acupuncture supports IVF by improving uterine blood flow and receptivity, reducing the stress hormones that can interfere with implantation, managing the side effects of fertility medications, and supporting emotional wellbeing throughout the demanding IVF process.",
    symptoms: ["Preparing for IVF cycle", "Managing IVF medication side effects", "Improving uterine receptivity", "Reducing IVF-related stress and anxiety", "Supporting implantation", "Managing OHSS risk", "Emotional support through IVF", "Recurrent IVF failure"],
    whatToExpect: "Our IVF support protocol involves weekly acupuncture throughout your stimulation phase, with specific sessions timed around egg retrieval and embryo transfer. We coordinate with your reproductive endocrinologist to ensure our care complements your medical treatment.",
    relatedConditions: [
      { title: "Acupuncture for Fertility", href: "/conditions/fertility" },
      { title: "Acupuncture Before Embryo Transfer", href: "/conditions/embryo-transfer" },
      { title: "Acupuncture for Egg Quality", href: "/conditions/egg-quality" },
    ],
    faqItems: [
      { q: "Should I have acupuncture on the day of embryo transfer?", a: "Many fertility specialists recommend acupuncture on the day of embryo transfer — one session before and one after. Research suggests this timing may improve implantation rates by increasing uterine blood flow and reducing stress." },
    ],
  },
  "pcos-fertility": {
    title: "PCOS Fertility",
    h1: "Acupuncture for PCOS Fertility in Columbia, MD",
    pillar: "Fertility Support",
    pillarHref: "/conditions/fertility-support",
    metaDescription: "Acupuncture for PCOS and fertility in Columbia, Maryland. Natural treatment for PCOS-related infertility at Awaken Wellness.",
    intro: "PCOS (Polycystic Ovary Syndrome) is the most common cause of anovulatory infertility, affecting 1 in 10 women of reproductive age. Acupuncture and nutritional counseling offer a powerful, evidence-based approach to managing PCOS and restoring ovulatory function.",
    howItHelps: "Acupuncture addresses PCOS by regulating the hypothalamic-pituitary-ovarian axis, reducing the elevated LH:FSH ratio that characterizes PCOS, improving insulin sensitivity, and reducing the androgen levels that suppress ovulation. Research from Sweden has shown that electro-acupuncture can restore regular ovulation in women with PCOS.",
    symptoms: ["Irregular or absent periods", "Anovulation (not ovulating)", "Elevated androgens (acne, hair growth)", "Insulin resistance", "Difficulty losing weight", "Ovarian cysts on ultrasound", "PCOS-related infertility", "Hormonal imbalance"],
    whatToExpect: "PCOS treatment at Awaken Wellness combines acupuncture with nutritional counseling to address the metabolic and hormonal dimensions of the condition. Treatment typically requires 3–6 months to restore regular ovulatory cycles.",
    relatedConditions: [
      { title: "Acupuncture for Fertility", href: "/conditions/fertility" },
      { title: "Acupuncture for Egg Quality", href: "/conditions/egg-quality" },
      { title: "Nutrition Counseling", href: "/nutrition-counseling" },
    ],
    faqItems: [
      { q: "Can acupuncture help me ovulate with PCOS?", a: "Research suggests acupuncture can help restore ovulatory function in women with PCOS, particularly when combined with lifestyle modifications. It works best as part of a comprehensive treatment plan." },
    ],
  },
  "embryo-transfer": {
    title: "Embryo Transfer",
    h1: "Acupuncture Before Embryo Transfer in Columbia, MD",
    pillar: "Fertility Support",
    pillarHref: "/conditions/fertility-support",
    metaDescription: "Acupuncture before and after embryo transfer in Columbia, Maryland. Improve implantation rates at Awaken Wellness.",
    intro: "The embryo transfer is the most critical moment in an IVF cycle. Acupuncture on the day of transfer is one of the most studied applications of fertility acupuncture, with multiple trials examining its effect on implantation rates.",
    howItHelps: "Acupuncture before embryo transfer improves uterine blood flow and receptivity, reduces uterine contractions that can expel the embryo, calms the nervous system to reduce stress hormones, and promotes the relaxation response that supports implantation.",
    symptoms: ["Preparing for embryo transfer", "Improving uterine receptivity", "Reducing pre-transfer anxiety", "Supporting implantation", "Managing transfer-day stress", "Frozen embryo transfer preparation", "Fresh embryo transfer preparation", "Recurrent implantation failure"],
    whatToExpect: "We offer a specific embryo transfer protocol: one session 1–2 hours before transfer and one session 1–2 hours after. We recommend beginning regular weekly acupuncture at least 4–6 weeks before your transfer date for optimal uterine preparation.",
    relatedConditions: [
      { title: "Acupuncture for IVF Support", href: "/conditions/ivf-support" },
      { title: "Acupuncture for Fertility", href: "/conditions/fertility" },
      { title: "Acupuncture for Egg Quality", href: "/conditions/egg-quality" },
    ],
    faqItems: [
      { q: "How close to transfer should I have acupuncture?", a: "The most studied protocol involves acupuncture within 1–2 hours before and after embryo transfer. We offer flexible scheduling to accommodate your transfer appointment time." },
    ],
  },
  "egg-quality": {
    title: "Egg Quality",
    h1: "Acupuncture for Egg Quality in Columbia, MD",
    pillar: "Fertility Support",
    pillarHref: "/conditions/fertility-support",
    metaDescription: "Acupuncture to improve egg quality in Columbia, Maryland. Natural support for ovarian reserve and egg quality at Awaken Wellness.",
    intro: "Egg quality is one of the most important determinants of fertility outcomes — and one of the most challenging to address through conventional medicine. Acupuncture and nutritional counseling offer evidence-informed strategies to support optimal egg development.",
    howItHelps: "Egg quality is influenced by ovarian blood flow, mitochondrial function, oxidative stress, and hormonal signaling. Acupuncture improves blood flow to the ovaries, reduces oxidative stress through its anti-inflammatory effects, and regulates the hormonal environment in which eggs develop. Nutritional counseling addresses the dietary and supplement strategies that support mitochondrial function and reduce oxidative damage to eggs.",
    symptoms: ["Poor ovarian reserve (low AMH/AFC)", "Advanced maternal age fertility concerns", "Poor egg quality on previous IVF cycles", "Diminished ovarian reserve", "Recurrent miscarriage related to egg quality", "Preparing for egg freezing", "Optimizing egg quality before IVF", "Premature ovarian insufficiency"],
    whatToExpect: "Egg quality improvement requires at least 3 months of treatment, as eggs take approximately 90 days to mature. We recommend beginning acupuncture and nutritional counseling at least 3 months before your planned egg retrieval or conception attempt.",
    relatedConditions: [
      { title: "Acupuncture for Fertility", href: "/conditions/fertility" },
      { title: "Acupuncture for IVF Support", href: "/conditions/ivf-support" },
      { title: "Nutrition Counseling", href: "/nutrition-counseling" },
    ],
    faqItems: [
      { q: "Can acupuncture really improve egg quality?", a: "While it's difficult to directly measure egg quality improvements, research suggests acupuncture improves ovarian blood flow and reduces oxidative stress — two key factors in egg quality. Many fertility specialists recommend it as a supportive therapy." },
    ],
  },
  "fatigue": {
    title: "Fatigue",
    h1: "Acupuncture for Fatigue in Columbia, MD",
    pillar: "Nervous System",
    pillarHref: "/conditions/nervous-system",
    metaDescription: "Acupuncture for chronic fatigue in Columbia, Maryland. Natural treatment for fatigue and low energy at Awaken Wellness.",
    intro: "Chronic fatigue — the kind that doesn't improve with rest and interferes with daily functioning — is one of the most common and most undertreated conditions in modern healthcare. Acupuncture addresses the multiple physiological drivers of fatigue.",
    howItHelps: "Fatigue has many potential root causes: adrenal dysfunction, thyroid imbalance, mitochondrial insufficiency, chronic inflammation, sleep disruption, and nervous system dysregulation. Acupuncture addresses all of these mechanisms, while nutritional counseling identifies and corrects the dietary deficiencies that commonly contribute to low energy.",
    symptoms: ["Persistent exhaustion unrelieved by rest", "Post-exertional malaise", "Brain fog and cognitive fatigue", "Morning fatigue despite adequate sleep", "Afternoon energy crashes", "Chronic fatigue syndrome (ME/CFS)", "Fatigue with fibromyalgia", "Post-viral fatigue"],
    whatToExpect: "Fatigue treatment is a gradual process that requires patience. We take a comprehensive approach that includes acupuncture, nutritional assessment, and lifestyle guidance. Most patients notice gradual improvement in energy levels over 8–12 sessions.",
    relatedConditions: [
      { title: "Acupuncture for Burnout", href: "/conditions/burnout" },
      { title: "Acupuncture for Sleep Problems", href: "/conditions/sleep" },
      { title: "Nutrition Counseling", href: "/nutrition-counseling" },
    ],
    faqItems: [
      { q: "Can acupuncture help with long COVID fatigue?", a: "Emerging research and clinical experience suggest acupuncture may be beneficial for post-COVID fatigue and brain fog. We have experience treating patients with long COVID symptoms." },
    ],
  },
  "hormones": {
    title: "Hormone Imbalance",
    h1: "Acupuncture for Hormone Imbalance in Columbia, MD",
    pillar: "Nervous System",
    pillarHref: "/conditions/nervous-system",
    metaDescription: "Acupuncture for hormone imbalance in Columbia, Maryland. Natural treatment for hormonal health at Awaken Wellness.",
    intro: "Hormonal imbalance — whether it's thyroid dysfunction, adrenal fatigue, estrogen dominance, or perimenopause — affects millions of women and men. Acupuncture and nutritional counseling offer a comprehensive, root-cause approach to restoring hormonal balance.",
    howItHelps: "Acupuncture regulates hormonal balance by modulating the hypothalamic-pituitary axis — the master control system for all hormonal function. It reduces the stress hormones that disrupt thyroid and sex hormone production, improves the liver's ability to metabolize and clear excess hormones, and supports the adrenal glands that are central to hormonal resilience.",
    symptoms: ["Irregular menstrual cycles", "PMS and PMDD", "Perimenopause and menopause symptoms", "Thyroid dysfunction symptoms", "Adrenal fatigue and cortisol imbalance", "Estrogen dominance", "Low testosterone symptoms", "Hormonal acne and skin changes"],
    whatToExpect: "Hormone balance treatment combines acupuncture with nutritional counseling to address both the endocrine and dietary dimensions of hormonal health. Treatment typically requires 3–6 months for significant hormonal rebalancing.",
    relatedConditions: [
      { title: "Acupuncture for Fertility", href: "/conditions/fertility" },
      { title: "Acupuncture for PCOS Fertility", href: "/conditions/pcos-fertility" },
      { title: "Nutrition Counseling", href: "/nutrition-counseling" },
    ],
    faqItems: [
      { q: "Can acupuncture help with perimenopause symptoms?", a: "Yes. Acupuncture is one of the most effective non-hormonal treatments for perimenopausal symptoms including hot flashes, night sweats, sleep disruption, and mood changes." },
    ],
  },
};
