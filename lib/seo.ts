// Central SEO config: keywords, FAQs and JSON-LD builders shared across pages.

export const SITE_URL = "https://rahuljangir.zynetechs.com";
export const SITE_NAME = "Rahul Jangir – Freelance Full Stack Developer";
export const CONTACT_EMAIL = "dbrpjangir9977@gmail.com";
export const CONTACT_PHONE = "+91-9950108143";

export const SOCIAL_LINKS = [
  "https://github.com/Rahuljangir7",
  "https://www.linkedin.com/in/rahuljangir143/",
  "https://www.instagram.com/rahul.jangir_143/",
  "https://www.facebook.com/profile.php?id=61578464571304",
];

// Buyer-intent keywords first (people looking to hire), then brand/name terms.
export const PRIMARY_KEYWORDS = [
  "freelance web developer",
  "freelance full stack developer",
  "hire freelance web developer",
  "hire full stack developer India",
  "freelance web developer India",
  "freelance web developer Jaipur",
  "web developer in Jaipur",
  "website developer near me",
  "hire Next.js developer",
  "hire React developer",
  "hire MERN stack developer",
  "freelance MERN stack developer",
  "freelance Next.js developer",
  "ecommerce website developer",
  "custom web application development",
  "website development for small business",
  "business website developer",
  "landing page developer",
  "web app developer for startups",
  "MVP developer for startups",
  "3D website developer Three.js",
  "SEO friendly website developer",
  "website redesign services",
  "affordable website developer India",
  "remote full stack developer",
  "Rahul Jangir",
  "Rahul Jangir web developer",
  "Rahul Jangir freelancer",
  "Rahul Jangir Zynetechs",
  "Zynetechs CTO",
];

export type Faq = { question: string; answer: string };

export const HOME_FAQS: Faq[] = [
  {
    question: "Are you available for freelance web development projects?",
    answer:
      "Yes. I take freelance projects directly — websites, web applications, e-commerce stores, dashboards and 3D web experiences. You work with me one-to-one, from the first call to launch, with no middleman.",
  },
  {
    question: "How do I hire you for my project?",
    answer:
      "Send your requirement through the contact form, email or WhatsApp. I reply within 24 hours, we have a short call to understand your goals, and I share a clear scope, timeline and quote before any work starts.",
  },
  {
    question: "How much does a website or web app cost?",
    answer:
      "Cost depends on scope — number of pages, features, integrations and design complexity. A business website, an e-commerce store and a custom SaaS app are priced very differently. Share your requirement and I'll send a fixed quote with no hidden charges.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A business or landing-page website usually takes 1–3 weeks. E-commerce stores and custom web applications typically take 3–8 weeks depending on features. You get a timeline with milestones before we start.",
  },
  {
    question: "Do you work with clients outside Jaipur and India?",
    answer:
      "Yes. I'm based in Jaipur, Rajasthan, and work remotely with clients across India and internationally (USA, UK, UAE, Europe and more) over Google Meet, WhatsApp and email.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "Mainly the MERN stack (MongoDB, Express, React, Node.js), Next.js, TypeScript, Tailwind CSS, Laravel/PHP, MySQL/PostgreSQL and Three.js for 3D. I choose the stack that best fits your budget, speed and long-term growth.",
  },
  {
    question: "Will my website be SEO-friendly and fast?",
    answer:
      "Yes. Every site I build includes technical SEO (meta tags, schema markup, sitemap, clean URLs), mobile-first responsive design and performance optimisation for Core Web Vitals, so it is ready to rank on Google.",
  },
  {
    question: "Do you provide support and maintenance after launch?",
    answer:
      "Yes. I offer post-launch support, bug fixes, updates, hosting/deployment help and ongoing maintenance plans so your website keeps running smoothly.",
  },
  {
    question: "You are the CTO of Zynetechs — will I work with you or a team?",
    answer:
      "You work directly with me. For freelance projects I personally handle planning, architecture and development. If your project needs a larger team, I can bring in the Zynetechs team while remaining your single point of contact.",
  },
  {
    question: "Can you redesign or fix my existing website?",
    answer:
      "Absolutely. I redesign outdated websites, fix bugs, improve speed, migrate to Next.js/React and add new features to existing projects.",
  },
];

export const SERVICE_FAQS: Faq[] = [
  {
    question: "Do you build e-commerce websites?",
    answer:
      "Yes. I build custom e-commerce stores with product catalogues, cart, secure payment gateways (Razorpay, Stripe, PayPal), order management and admin panels. I've delivered stores for fashion, jewellery, home decor and lifestyle brands.",
  },
  {
    question: "Can you build an MVP for my startup?",
    answer:
      "Yes. I help founders turn ideas into working MVPs quickly using Next.js, Node.js and MongoDB — built to be scalable so you don't need a rewrite when you grow.",
  },
  {
    question: "Do you offer fixed-price or hourly freelance work?",
    answer:
      "Both. Well-defined projects are usually fixed-price with milestones. Ongoing work, maintenance or open-ended development can be hourly or on a monthly retainer.",
  },
  {
    question: "Will I own the source code?",
    answer:
      "Yes. After final payment you get full ownership of the source code, design files and all project assets.",
  },
  {
    question: "Do you also handle hosting, domain and deployment?",
    answer:
      "Yes. I can set up your domain, hosting (Vercel, AWS, DigitalOcean, Hostinger and others), SSL, business email and CI/CD deployment.",
  },
];

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export const SERVICES = [
  "Custom Website Development",
  "Full Stack Web Application Development",
  "E-commerce Website Development",
  "Next.js & React Development",
  "MERN Stack Development",
  "3D Web Experiences (Three.js)",
  "UI/UX & Responsive Design",
  "SEO & Website Performance Optimisation",
  "Website Redesign & Maintenance",
  "Startup MVP Development",
];

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Rahul Jangir",
      url: SITE_URL,
      image: `${SITE_URL}/rahul.png`,
      jobTitle: ["Freelance Full Stack Developer", "Chief Technology Officer (CTO)"],
      description:
        "Freelance full stack web developer in Jaipur, India, and CTO of Zynetechs. Builds websites, e-commerce stores and web applications for clients worldwide.",
      email: `mailto:${CONTACT_EMAIL}`,
      telephone: CONTACT_PHONE,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
      worksFor: {
        "@type": "Organization",
        name: "Zynetechs",
        url: "https://zynetechs.com",
      },
      sameAs: SOCIAL_LINKS,
      knowsAbout: [
        "Freelance Web Development",
        "Full Stack Development",
        "MERN Stack",
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "E-commerce Development",
        "Three.js",
        "Technical SEO",
        "Laravel",
        "MongoDB",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Rahul Jangir – Freelance Web Developer",
      url: SITE_URL,
      image: `${SITE_URL}/rahul.png`,
      logo: `${SITE_URL}/logo.png`,
      description:
        "Hire a freelance full stack developer for websites, e-commerce stores, web apps and startup MVPs. Direct communication, fixed quotes, fast delivery.",
      founder: { "@id": `${SITE_URL}/#person` },
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "City", name: "Jaipur" },
        { "@type": "Country", name: "India" },
        { "@type": "Place", name: "Worldwide" },
      ],
      sameAs: SOCIAL_LINKS,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Freelance Web Development Services",
        itemListElement: SERVICES.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en",
    },
  ],
};
