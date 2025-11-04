export interface Experience {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  descriptions: string[];
}

export interface Education {
  degree: string;
  year: string;
  institution: string;
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface Skills {
  frontendDevelopment: string;
  automatisation: string;
  uxUi: string;
  cloud: string;
  backendDevelopment: string;
  agile: string;
  cyberSecurity: string;
  aiDevelopment: string;
  other: string;
}

export interface CV {
  name: string;
  linkedin: string;
  website: string;
  location: string;
  email: string;
  summary: {
    role: string;
    description: string;
  };
  skills: Skills;
  experience: Experience[];
  education: Education[];
  languages: Language[];
}

export const cv: CV = {
  name: "Pauline Holm",
  linkedin: "linkedin.com/in/paulineholm",
  website: "paulineholm.netlify.app",
  location: "Copenhagen, Denmark",
  email: "pholm@tuta.io",

  summary: {
    role: "Software Engineer",
    description:
      "Frontend-focused energetic tech professional with a passion for learning and growth. Dedicated to delivering seamless, efficient, and user-friendly digital experiences that drive team success.",
  },

  skills: {
    frontendDevelopment: "React, Next.js, TypeScript, JavaScript",
    automatisation: "CI/CD, GitHub Actions",
    uxUi: "Figma, design principles",
    cloud: "Kubernetes, GitOps, JFrog",
    backendDevelopment: "basics of C#, .NET",
    agile: "Agile frameworks, Jira, Azure DevOps",
    cyberSecurity: "principles & compliance",
    aiDevelopment: "RAG, LLM, AI Dev tools",
    other: "Contentful, Gatsby, Tailwind, Vercel, Netlify, DevOps, Vite",
  },

  experience: [
    {
      title: "Software Engineer",
      company: "TV2 Denmark",
      startDate: "Sept 2024",
      endDate: "Dec 2025",
      descriptions: [
        "Developed and maintained TV2 Connect (B2B)",
        "Migrated a system to Cloud Platform",
        "Automated deployment process and streamlined dev-communication",
        "Involved and contributed to security and AI initiatives",
      ],
    },
    {
      title: "Student Frontend Developer",
      company: "DFDS",
      startDate: "Jan 2023",
      endDate: "Aug 2024",
      descriptions: [
        "Maintained DFDS.com and Contentful CMS integration",
        "Maintained Passenger Profile and Advanced Info interfaces",
        "Collaborated on ad-hoc digital and product development initiatives",
      ],
    },
    {
      title: "Student Assistant in Digital Marketing",
      company: "Qufora",
      startDate: "Oct 2021",
      endDate: "Jun 2022",
      descriptions: [
        "Managed and updated Qufora.com content",
        "Implemented new language versions to support new markets",
        "Reorganized and maintained company's digital assets library",
        "Enhanced website's SEO",
      ],
    },
    {
      title: "Student Assistant Digital Marketing",
      company: "Simple Very Simple",
      startDate: "Dec 2020",
      endDate: "Sept 2021",
      descriptions: [
        "Managed e-commerce channels (SquareSpace & DBA)",
        "Handled customer service operations, claims and logistics",
        "Supported digital advertising and promotional campaigns",
      ],
    },
  ],

  education: [
    {
      degree: "Master of IT, learning and organisational change",
      year: "2024 (DA)",
      institution: "Aalborg University CPH",
    },
    {
      degree: "EUD Web Development",
      year: "2022 (DA)",
      institution: "Roskilde Tekniske Skole",
    },
    {
      degree: "Bachelor, Innovation and Entrepreneurship",
      year: "2020 (ENG)",
      institution: "Business Academy Aarhus",
    },
  ],

  languages: [
    {
      language: "English",
      proficiency: "fluent",
    },
    {
      language: "Danish",
      proficiency: "fluent",
    },
    {
      language: "Polish",
      proficiency: "native",
    },
    {
      language: "German, Norwegian, Swedish, Hebrew",
      proficiency: "elementary proficiency",
    },
  ],
};

export default cv;
