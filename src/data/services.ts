export interface Service {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  covers: string[];
  outcomes: string[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "working-in-canada",
    number: "01",
    title: "Working in Canada",
    tagline: "PGWP, NOC, PR paths.",
    shortDescription:
      "Navigate your work permit, understand NOC codes, and map your route to permanent residency.",
    longDescription:
      "Whether you're on a PGWP, open work permit, or closed work permit, the decisions you make in your first year can define your PR timeline. We help you understand how NOC codes, LMIA-exempt categories, and provincial programs actually work, not the sanitized government version, but the real one based on 2026 rules.",
    seoTitle: "Working in Canada: PGWP, NOC & PR Pathways Decoded",
    seoDescription:
      "Understand PGWP rules, NOC codes, LMIA-exempt work permits, and the real paths from work permit to permanent residency in Canada. Strategy, not filing.",
    keywords: [
      "PGWP",
      "NOC",
      "Canada work permit",
      "PR pathway",
      "LMIA-exempt",
      "Express Entry",
    ],
    covers: [
      "PGWP eligibility and extensions",
      "Understanding NOC 0, A, B, TEER categories",
      "Work permit to PR transitions",
      "Employer obligations and rights",
      "Provincial Nominee Program alignment with work experience",
      "Common pitfalls that delay PR applications",
    ],
    outcomes: [
      "A clear picture of where your current role stands",
      "A roadmap from work permit to PR with realistic timelines",
      "Knowledge of the strongest NOC codes for your profile",
      "Understanding of which provincial streams fit your case",
    ],
    faqs: [
      {
        q: "Can my current job count toward Express Entry points?",
        a: "It depends on your NOC code, duration, and whether it meets skilled work criteria. We decode this on your call.",
      },
      {
        q: "Should I switch employers to improve my PR chances?",
        a: "Sometimes yes, sometimes no. It depends on your TEER category, work permit type, and provincial considerations.",
      },
    ],
  },
  {
    slug: "business-self-employment",
    number: "02",
    title: "Business & Self-Employment",
    tagline: "Build in Canada, not just work.",
    shortDescription:
      "Owner-operator pathways, incorporation guidance, and real-world business setup strategies.",
    longDescription:
      "Entrepreneurship in Canada is more than a business plan. It's navigating LMIA owner-operator rules, provincial entrepreneur streams, tax incorporation, and the reality of running a small business as a newcomer. Built on real, hands-on experience.",
    seoTitle: "Business & Self-Employment in Canada: Real Strategies",
    seoDescription:
      "Owner-operator pathways, incorporation guidance, and realistic strategies for starting and running a business in Canada as an immigrant.",
    keywords: [
      "Canada business immigration",
      "owner operator LMIA",
      "incorporate in Canada",
      "entrepreneur PNP",
      "self employed Canada",
    ],
    covers: [
      "Owner-operator LMIA considerations",
      "Incorporation vs sole proprietorship",
      "Provincial entrepreneur streams (PNP)",
      "Business planning for PR applications",
      "Café, retail, and service business setup",
      "Tax and accounting realities",
    ],
    outcomes: [
      "Clarity on which business structure fits your goals",
      "Understanding of provincial entrepreneur programs",
      "Realistic cost and timeline expectations",
      "Connection to trusted professionals where needed",
    ],
    faqs: [
      {
        q: "Is the owner-operator LMIA pathway still viable?",
        a: "Yes, but with serious caveats. We break down the genuine approach versus the ones that get rejected.",
      },
      {
        q: "How much capital do I really need to start?",
        a: "Less than most consultants tell you, if you choose the right model. More than most DIY guides suggest, if you skip due diligence.",
      },
    ],
  },
  {
    slug: "lmia-job-offer-strategy",
    number: "03",
    title: "LMIA & Job Offer Strategy",
    tagline: "No false promises. Just facts.",
    shortDescription:
      "Decode the LMIA ecosystem, spot genuine offers, and understand employer realities.",
    longDescription:
      "The LMIA world is full of noise: fake offers, inflated salaries, and promises that fall apart. We help you tell the real from the fake, understand what employers actually need, and build a strategy that doesn't depend on paying someone $30k for a job.",
    seoTitle: "LMIA & Job Offer Strategy: Reality Check for Canada",
    seoDescription:
      "Understand the real LMIA process, identify genuine job offers, and build a realistic strategy for immigration through employer sponsorship.",
    keywords: [
      "LMIA",
      "Canada job offer",
      "employer sponsorship",
      "work permit",
      "LMIA approved jobs",
    ],
    covers: [
      "The LMIA application process from both sides",
      "Real vs fake job offer indicators",
      "Employer compliance obligations",
      "Pathways that don't require LMIA",
      "Provincial LMIA-exempt streams",
      "Realistic timelines and costs",
    ],
    outcomes: [
      "Ability to vet job offers independently",
      "Understanding of employer motivations",
      "Clarity on when LMIA makes sense and when it doesn't",
      "A backup strategy that doesn't rely on employer sponsorship",
    ],
    faqs: [
      {
        q: "Are paid LMIA jobs legal?",
        a: "Employer recruitment fees to workers are illegal in Canada. Most 'paid LMIA' offers are scams or compliance risks.",
      },
      {
        q: "How do I know if an offer is real?",
        a: "There are specific markers. We cover them in the consultation.",
      },
    ],
  },
  {
    slug: "pr-pathway-comparison",
    number: "04",
    title: "PR Pathway Comparison",
    tagline: "Compare before you commit.",
    shortDescription:
      "Express Entry vs PNP vs AIP: province-wise strategy, timelines, and risk breakdown.",
    longDescription:
      "Choosing a PR pathway isn't about CRS scores alone. It's about aligning your profile, location, job, and timeline with the program most likely to succeed. We compare Express Entry, PNP streams across provinces, and the Atlantic Immigration Program side-by-side.",
    seoTitle: "PR Pathway Comparison: Express Entry vs PNP vs AIP",
    seoDescription:
      "Compare Canada's permanent residency pathways. Province-wise strategy, real timelines, and risk analysis for Express Entry, PNP, and AIP.",
    keywords: [
      "Express Entry",
      "PNP",
      "Atlantic Immigration Program",
      "Canada PR",
      "permanent residency pathway",
      "CRS score",
    ],
    covers: [
      "Express Entry (FSW, CEC, FST) side by side",
      "Provincial Nominee Programs by province",
      "Atlantic Immigration Program realities",
      "CRS score optimization strategies",
      "Timeline and risk comparison",
      "When to pivot between pathways",
    ],
    outcomes: [
      "A clear comparison matrix for your profile",
      "Province-specific strategy recommendations",
      "Realistic CRS score target",
      "A primary and backup PR strategy",
    ],
    faqs: [
      {
        q: "Which province is easiest for PR?",
        a: "There's no universal answer. It depends on your NOC, language, and work experience. We break it down for your exact profile.",
      },
      {
        q: "Should I apply to multiple PNPs?",
        a: "Some allow it, some don't. Strategy matters more than spray-and-pray.",
      },
    ],
  },
  {
    slug: "consultation",
    number: "05",
    title: "1:1 Consultation",
    tagline: "Clarity in 30 minutes.",
    shortDescription:
      "Profile breakdown, personalized roadmap, and honest strategy. No templated advice.",
    longDescription:
      "A focused 30-minute call where we review your profile, answer your specific questions, and build a real roadmap. No templated responses. No filler. Just the straight answers you've been searching for.",
    seoTitle: "1:1 Immigration Strategy Consultation: Canada Decoded",
    seoDescription:
      "Book a focused 30-minute consultation to review your immigration profile, get a personalized roadmap, and honest strategy.",
    keywords: [
      "immigration consultation",
      "Canada immigration advice",
      "PR strategy",
      "immigration roadmap",
    ],
    covers: [
      "Profile review (education, work, language)",
      "Pathway recommendations",
      "Timeline and risk assessment",
      "Answers to your specific questions",
      "Next steps and action items",
    ],
    outcomes: [
      "A clear understanding of where you stand",
      "A prioritized action plan",
      "Honest feedback on your chances",
      "Referrals when needed (RCIC, lawyer, accountant)",
    ],
    faqs: [
      {
        q: "What should I prepare for the call?",
        a: "Your resume, current status, language scores (if any), and the top questions keeping you up at night.",
      },
      {
        q: "Is this regulated immigration advice?",
        a: "No. We provide strategic and educational guidance. For legal representation, you'll need a licensed RCIC or lawyer.",
      },
    ],
  },
  {
    slug: "reality-check",
    number: "06",
    title: "Reality Check & Case Reviews",
    tagline: "Before you spend money, understand your case.",
    shortDescription:
      "Second opinions on offers, consultant advice reviews, and scam detection.",
    longDescription:
      "Before you commit $30,000 to a consultant, sign a dubious employment contract, or trust someone with your immigration future, get a second opinion from someone who has no incentive to sell you anything.",
    seoTitle: "Reality Check & Case Reviews: Canada Immigration Second Opinion",
    seoDescription:
      "Get an honest second opinion on job offers, consultant advice, and immigration plans before you spend money. Scam detection included.",
    keywords: [
      "Canada immigration scam",
      "second opinion immigration",
      "job offer review",
      "immigration case review",
    ],
    covers: [
      "Job offer legitimacy review",
      "Consultant/agent advice evaluation",
      "Red flag detection in offers and plans",
      "Contract clause review",
      "Honest assessment of your options",
    ],
    outcomes: [
      "Clarity on whether to proceed or walk away",
      "Awareness of red flags you may have missed",
      "A realistic view of your actual options",
      "Peace of mind, or a warning before you regret it",
    ],
    faqs: [
      {
        q: "Can you review my offer from a consultant?",
        a: "Yes. We'll look at the contract, their claims, and whether their approach is realistic.",
      },
      {
        q: "What if I already paid?",
        a: "We'll still tell you honestly what to expect so you can make informed next steps.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
