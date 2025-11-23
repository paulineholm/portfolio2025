export interface PublicResource {
  name: string;
  url: string;
  keywords: string[];
}

export const PUBLIC_RESOURCES: PublicResource[] = [
  {
    name: "Portfolio Pauline Holm",
    url: "https://paulineholm.netlify.app",
    keywords: ["portfolio", "projects", "website", "work", "contact"],
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/paulineholm",
    keywords: [
      "linkedin",
      "professional",
      "experience",
      "career",
      "resume",
      "CV",
    ],
  },
  {
    name: "GitHub",
    url: "https://github.com/paulineholm",
    keywords: ["github", "code", "repositories", "repos"],
  },
  {
    name: "Calendly",
    url: "https://calendly.com/pholm-tuta/30min",
    keywords: [
      "calendly",
      "schedule",
      "meeting",
      "appointment",
      "coffee",
      "chat",
      "talk",
      "connect",
      "discuss",
      "call",
      "opportunities",
      "collaboration",
      "networking",
    ],
  },
];
