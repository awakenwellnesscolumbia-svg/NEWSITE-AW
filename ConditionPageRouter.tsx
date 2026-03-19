// ============================================================
// AWAKEN WELLNESS — Site Data & Content Constants
// Columbia, Maryland | Howard County
// ============================================================

export const CLINIC = {
  name: "Awaken Wellness",
  tagline: "Helping Your Body Heal at the Root Cause",
  phone: "(410) 555-0192",
  email: "hello@awakenwellness.com",
  address: "8850 Columbia 100 Pkwy, Suite 201",
  city: "Columbia",
  state: "MD",
  zip: "21045",
  fullAddress: "8850 Columbia 100 Pkwy, Suite 201, Columbia, MD 21045",
  hoursDisplay: "Mon–Fri: 9am–6pm | Sat: 9am–2pm",
  hours: {
    "Monday": "9:00 am – 6:00 pm",
    "Tuesday": "9:00 am – 6:00 pm",
    "Wednesday": "9:00 am – 6:00 pm",
    "Thursday": "9:00 am – 6:00 pm",
    "Friday": "9:00 am – 6:00 pm",
    "Saturday": "9:00 am – 2:00 pm",
    "Sunday": "Closed",
  },
  bookingUrl: "/book-appointment",
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Acupuncture", href: "/acupuncture" },
      { label: "Massage Therapy", href: "/massage-therapy" },
      { label: "Nutrition Counseling", href: "/nutrition-counseling" },
      { label: "Chinese Herbal Medicine", href: "/acupuncture#herbal" },
    ],
  },
  {
    label: "Conditions We Treat",
    href: "/conditions",
    children: [
      { label: "Chronic Pain", href: "/conditions/chronic-pain" },
      { label: "Anxiety & Stress", href: "/conditions/anxiety-stress" },
      { label: "Digestive Health", href: "/conditions/digestive-health" },
      { label: "Fertility Support", href: "/conditions/fertility-support" },
      { label: "Nervous System", href: "/conditions/nervous-system" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Awaken Wellness", href: "/about" },
      { label: "Meet the Practitioners", href: "/practitioners" },
      { label: "Insurance & Pricing", href: "/insurance" },
      { label: "Veteran Care", href: "/veteran-care" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: "acupuncture",
    title: "Acupuncture",
    subtitle: "Our Primary Therapy",
    slug: "/acupuncture",
    tagline: "Ancient wisdom. Modern results.",
    description:
      "Acupuncture is the cornerstone of our practice. By stimulating specific points along the body's meridian pathways, we help restore the natural flow of energy — reducing pain, calming the nervous system, and addressing the root cause of chronic conditions.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426380560/CsB8cut5RrT75gbPHJuh8F/hero-acupuncture-Haz5pDryazsvirjBvP5ssb.webp",
    conditions: ["Chronic Pain", "Anxiety & Stress", "Digestive Issues", "Fertility", "Migraines", "Insomnia"],
    isPrimary: true,
  },
  {
    id: "massage",
    title: "Massage Therapy",
    subtitle: "Complementary Therapy",
    slug: "/massage-therapy",
    tagline: "Release tension. Restore balance.",
    description:
      "Our licensed massage therapists use a blend of therapeutic techniques to release deep muscle tension, improve circulation, and support your nervous system's natural recovery process. Massage works beautifully alongside acupuncture for accelerated healing.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426380560/CsB8cut5RrT75gbPHJuh8F/hero-massage-TjxVnQb8LwGfPTKLWCUbbo.webp",
    conditions: ["Muscle Tension", "Stress & Anxiety", "Sports Recovery", "Chronic Pain", "Headaches"],
    isPrimary: false,
  },
  {
    id: "nutrition",
    title: "Nutritional Counseling",
    subtitle: "Complementary Therapy",
    slug: "/nutrition-counseling",
    tagline: "Nourish from the inside out.",
    description:
      "True healing begins with what you put into your body. Our nutritional counselors take a whole-foods, root-cause approach — identifying inflammatory triggers, supporting gut health, and creating personalized eating plans that complement your acupuncture and massage treatments.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426380560/CsB8cut5RrT75gbPHJuh8F/hero-nutrition-QUp5PXktgnBBDztmrATDEW.webp",
    conditions: ["Digestive Issues", "Hormone Imbalance", "Inflammation", "Weight Management", "Energy & Fatigue"],
    isPrimary: false,
  },
];

export const CONDITION_PILLARS = [
  {
    id: "chronic-pain",
    title: "Chronic Pain",
    icon: "🌿",
    description: "Lasting relief for back pain, neck pain, migraines, sciatica, and arthritis through targeted acupuncture protocols.",
    href: "/conditions/chronic-pain",
    conditions: [
      { title: "Acupuncture for Back Pain", href: "/conditions/back-pain" },
      { title: "Acupuncture for Neck Pain", href: "/conditions/neck-pain" },
      { title: "Acupuncture for Sciatica", href: "/conditions/sciatica" },
      { title: "Acupuncture for Migraines", href: "/conditions/migraines" },
      { title: "Acupuncture for Arthritis", href: "/conditions/arthritis" },
    ],
  },
  {
    id: "anxiety-stress",
    title: "Anxiety & Stress",
    icon: "🧘",
    description: "Calm your nervous system, reduce anxiety, and restore emotional balance with evidence-informed acupuncture care.",
    href: "/conditions/anxiety-stress",
    conditions: [
      { title: "Acupuncture for Anxiety", href: "/conditions/anxiety" },
      { title: "Acupuncture for Stress", href: "/conditions/stress" },
      { title: "Acupuncture for Burnout", href: "/conditions/burnout" },
      { title: "Acupuncture for Sleep Problems", href: "/conditions/sleep" },
      { title: "Acupuncture for Nervous System Regulation", href: "/conditions/nervous-system" },
    ],
  },
  {
    id: "digestive-health",
    title: "Digestive Health",
    icon: "🌱",
    description: "Address IBS, bloating, acid reflux, and gut dysbiosis at the root cause with acupuncture and nutritional support.",
    href: "/conditions/digestive-health",
    conditions: [
      { title: "Acupuncture for IBS", href: "/conditions/ibs" },
      { title: "Acupuncture for Bloating", href: "/conditions/bloating" },
      { title: "Acupuncture for Acid Reflux", href: "/conditions/acid-reflux" },
      { title: "Acupuncture for Constipation", href: "/conditions/constipation" },
      { title: "Acupuncture for Gut Health", href: "/conditions/gut-health" },
    ],
  },
  {
    id: "fertility-support",
    title: "Fertility Support",
    icon: "🌸",
    description: "Supporting your fertility journey with compassionate, evidence-based acupuncture protocols for natural conception and IVF.",
    href: "/conditions/fertility-support",
    conditions: [
      { title: "Acupuncture for Fertility", href: "/conditions/fertility" },
      { title: "Acupuncture for IVF Support", href: "/conditions/ivf-support" },
      { title: "Acupuncture for PCOS Fertility", href: "/conditions/pcos-fertility" },
      { title: "Acupuncture Before Embryo Transfer", href: "/conditions/embryo-transfer" },
      { title: "Acupuncture for Egg Quality", href: "/conditions/egg-quality" },
    ],
  },
  {
    id: "nervous-system",
    title: "Nervous System",
    icon: "⚡",
    description: "Regulate your autonomic nervous system, reduce burnout, and restore your body's natural resilience.",
    href: "/conditions/nervous-system",
    conditions: [
      { title: "Nervous System Regulation", href: "/conditions/nervous-system" },
      { title: "Acupuncture for Burnout", href: "/conditions/burnout" },
      { title: "Acupuncture for Sleep Problems", href: "/conditions/sleep" },
      { title: "Acupuncture for Fatigue", href: "/conditions/fatigue" },
      { title: "Acupuncture for Hormone Imbalance", href: "/conditions/hormones" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Columbia, MD",
    condition: "Chronic Back Pain",
    quote:
      "After three years of back pain and countless doctor visits, I was skeptical. Within six weeks of acupuncture at Awaken Wellness, I was sleeping through the night for the first time in years. I wish I had come sooner.",
    rating: 5,
  },
  {
    name: "James T.",
    location: "Ellicott City, MD",
    condition: "Anxiety & Stress",
    quote:
      "I came in for stress and left with a completely different relationship with my body. The practitioners here actually listen and explain what's happening. My anxiety has dropped significantly and I feel more grounded than I have in years.",
    rating: 5,
  },
  {
    name: "Priya K.",
    location: "Columbia, MD",
    condition: "Fertility Support",
    quote:
      "We were on our second round of IVF when a friend recommended Awaken Wellness. The acupuncture support throughout the process was incredible — calming, professional, and genuinely caring. We are now expecting our first child.",
    rating: 5,
  },
  {
    name: "Linda R.",
    location: "Clarksville, MD",
    condition: "Digestive Issues",
    quote:
      "I had been struggling with IBS for over a decade. The combination of acupuncture and nutritional counseling here completely changed my daily life. I can eat normally again without constant discomfort.",
    rating: 5,
  },
];

export const TRUST_SIGNALS = [
  { label: "Years in Practice", value: "15+" },
  { label: "Patients Helped", value: "3,000+" },
  { label: "Insurance Plans Accepted", value: "20+" },
  { label: "Veteran Care Available", value: "Yes" },
];

export const INSURANCE_LIST = [
  "BlueCross BlueShield",
  "Aetna",
  "Cigna",
  "United Healthcare",
  "CareFirst",
  "Johns Hopkins Health Plans",
  "Tricare (Veterans)",
  "Medicare (select plans)",
];

export const BLOG_POSTS = [
  {
    slug: "does-acupuncture-help-anxiety",
    title: "Does Acupuncture Help Anxiety? What the Research Actually Says",
    excerpt:
      "Millions of Americans live with anxiety that conventional treatments only partially address. Here's what modern research — and thousands of years of clinical practice — tells us about acupuncture's role in calming the nervous system.",
    category: "Anxiety & Stress",
    readTime: "6 min read",
    date: "March 10, 2026",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop",
  },
  {
    slug: "acupuncture-for-chronic-pain",
    title: "How Acupuncture Helps Chronic Pain: A Root-Cause Approach",
    excerpt:
      "Chronic pain is not just a symptom — it's a signal from your body that something deeper needs attention. Discover how acupuncture addresses the underlying patterns that keep pain cycles going.",
    category: "Chronic Pain",
    readTime: "8 min read",
    date: "March 3, 2026",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop",
  },
  {
    slug: "acupuncture-for-digestive-issues",
    title: "Acupuncture for Digestive Issues: IBS, Bloating & Gut Health",
    excerpt:
      "Your gut is your second brain. When digestive function breaks down, it affects everything from mood to immunity. Learn how acupuncture and nutritional counseling work together to restore gut balance.",
    category: "Digestive Health",
    readTime: "7 min read",
    date: "February 24, 2026",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop",
  },
  {
    slug: "acupuncture-for-fertility",
    title: "Acupuncture for Fertility Support: What You Need to Know",
    excerpt:
      "Whether you're pursuing natural conception or IVF, acupuncture has a growing body of evidence supporting its role in improving reproductive outcomes. Here's what to expect.",
    category: "Fertility Support",
    readTime: "9 min read",
    date: "February 17, 2026",
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800&auto=format&fit=crop",
  },
  {
    slug: "acupuncture-nervous-system",
    title: "What Acupuncture Actually Does to Your Nervous System",
    excerpt:
      "The science behind acupuncture's effects on the autonomic nervous system is more compelling than most people realize. Here's a plain-language explanation of the mechanisms at work.",
    category: "Nervous System",
    readTime: "7 min read",
    date: "February 10, 2026",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop",
  },
];
