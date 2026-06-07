export const site = {
  name: "Mohammed Noureddine",
  shortName: "Mohammed",
  role: "Software Engineer",
  location: "Seattle, WA",
  email: "mohammednd522@gmail.com",
  resumeHref: "/resume.pdf",
  socials: {
    github: "https://github.com/mohammednd22",
    linkedin: "https://www.linkedin.com/in/mohammednd/",
  },
  metaTitle: "Mohammed Noureddine — Software Engineer",
  metaDescription:
    "Software engineer specializing in distributed systems and AI. Currently at Motive on the Credit Card team — risk and fraud.",
} as const;

export const nav = [
  { id: "about", label: "About", index: "01" },
  { id: "experience", label: "Experience", index: "02" },
  { id: "work", label: "Work", index: "03" },
  { id: "contact", label: "Contact", index: "04" },
] as const;

export const hero = {
  eyebrow: "Seattle · Software Engineer",
  name: "Mohammed Noureddine.",
  tagline:
    "Software engineer specializing in distributed systems and AI.",
  primaryCta: { label: "Get in touch", href: "#contact" },
  secondaryCta: { label: "Resume", href: "/resume.pdf" },
};

export const about = {
  paragraphs: [
    "Software Engineer at Motive. Working in the Credit Card org, specifically on risk and fraud systems.",
    "Before Motive, at Shopify developing their core AI system. And before that, on system automation and data tooling at Definity Financial and Fraser Health.",
  ],
  facts: [
    { label: "Now", value: "SWE @ Motive" },
    { label: "Masters", value: "Computer Science · Northeastern" },
    { label: "Undergrad", value: "Data Science + Finance · UBC" },
  ],
  stack: [
    "Ruby",
    "Java",
    "Python",
    "TypeScript",
    "Go",
    "AWS",
    "GCP",
    "React",
    "Rails",
    "Spring Boot",
  ],
};

export type SummaryPart = string | { text: string; href: string };

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: SummaryPart[];
  stack: string[];
  logo?: string;
};

export const experience: Experience[] = [
  {
    company: "Motive",
    role: "Software Engineer",
    period: "2026 — Present",
    location: "Remote",
    summary: ["Motive Credit Card — building risk and fraud systems."],
    stack: ["Rails", "Ruby", "Go", "Postgres", "AWS"],
    logo: "/logos/motive.png",
  },
  {
    company: "Northeastern University",
    role: "Graduate Teaching Assistant",
    period: "Sept — Dec 2025",
    location: "Seattle, WA",
    summary: [
      "Taught CS6620 Cloud Computing — cloud architecture, AWS services, distributed systems, and containerization.",
    ],
    stack: ["AWS", "Docker", "Kubernetes"],
    logo: "/logos/northeastern.png",
  },
  {
    company: "Shopify",
    role: "Software Engineer Intern",
    period: "Jan — Apr 2025",
    location: "Ottawa, ON",
    summary: [
      "Built APIs and React surfaces for ",
      { text: "Sidekick", href: "https://www.shopify.com/sidekick" },
      ", Shopify's core AI assistant — as well as the core attribute recommendation system.",
    ],
    stack: ["Rails", "Ruby", "Python", "TypeScript", "React", "GCP"],
    logo: "/logos/shopify.png",
  },
  {
    company: "Definity Financial",
    role: "Data Analyst",
    period: "Jan — Aug 2023",
    location: "Toronto, ON",
    summary: [
      "Automated capital forecasting and rebuilt legacy debt tooling in Python. Built SQL/ETL pipelines for banking data.",
    ],
    stack: ["Python", "Pandas", "SQL", "Automation"],
    logo: "/logos/definity.png",
  },
  {
    company: "Fraser Health",
    role: "Systems Analyst Intern",
    period: "May — Aug 2022",
    location: "Vancouver, BC",
    summary: [
      "Java tooling for financial metrics across the health authority. SQL + Power BI for clinical dashboards.",
    ],
    stack: ["Java", "Spring Boot", "SQL", "Automation"],
    logo: "/logos/fraser.png",
  },
];

export type Project = {
  title: string;
  blurb: string;
  stack: string[];
  href?: string;
  github?: string;
  image: string;
  year: string;
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    title: "ChatFlow",
    blurb:
      "Distributed WebSocket chat that handled 500K messages at 50K msg/s in load tests.",
    stack: ["Java", "WebSocket", "Redis", "AWS"],
    image: "/projects/chatflow.jpg",
    year: "2025",
    highlight: true,
  },
  {
    title: "Financial Market Insights Agent",
    blurb:
      "Multi-agent system over Groq LLMs for stock analysis, news, and portfolio recommendations.",
    stack: ["Python", "FastAPI", "OpenAI", "Phidata"],
    image: "/projects/finance-agent.jpg",
    year: "2024",
    highlight: true,
  },
  {
    title: "Dental Practice Platform",
    blurb:
      "Full-stack clinic management with an embedded LLM summarizer for clinical notes.",
    stack: ["TypeScript", "GraphQL", "React", "MongoDB"],
    image: "/projects/dental.jpg",
    year: "2024",
  },
  {
    title: "StaySwift",
    blurb: "MERN-stack short-term rental marketplace with real-time messaging.",
    stack: ["MongoDB", "Express", "React", "Node"],
    image: "/projects/stayswift.jpg",
    year: "2023",
  },
];
