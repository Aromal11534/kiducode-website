export const site = {
  name: "KiduCode",
  alternateName: ["Kidu Code", "KiduCode CLI", "kiducode"],
  domain: "https://kiducode.com",
  githubUrl: "https://github.com/kiducode-repo/kiducode",
  discordUrl: "https://discord.gg/kiducode",
  contactEmail: "hello@kiducode.com",
  securityEmail: "security@kiducode.com",
  tagline: "Code in English. Prompt in Manglish. Think in Malayalam.",
  description:
    "KiduCode is a Kerala-built open-source AI coding agent with planned Manglish and Malayalam developer prompt support. Write prompts in English, Malayalam, or Manglish to understand, edit, refactor, and ship code faster from your terminal.",
  shortDescription:
    "Kerala-built open-source AI coding agent with Manglish and Malayalam prompt support.",
  keywords:
    "KiduCode, kiducode, Kidu Code, AI coding agent, open source coding assistant, Kerala developers, Manglish coding, Malayalam coding assistant, OpenCode fork, terminal AI, CLI coding tool, AI code editor, Malayalam AI tool, Kerala AI, Indian developer tools, Manglish prompts, code generation, AI pair programming",
  foundingDate: "2025",
  founder: "Aromal",
  socialProfiles: [
    "https://github.com/kiducode-repo/kiducode",
    "https://discord.gg/kiducode",
  ],
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "/download", label: "Download" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/enterprise", label: "Enterprise" },
];

export const footerColumns = [
  {
    title: "Product",
    links: [
      { href: "/download", label: "Download" },
      { href: "/docs", label: "Docs" },
      { href: "/roadmap", label: "Roadmap" },
      { href: "/enterprise", label: "Enterprise" },
    ],
  },
  {
    title: "Community",
    links: [
      { href: site.githubUrl, label: "GitHub", external: true },
      { href: site.discordUrl, label: "Discord", external: true },
      { href: "/blog", label: "Blog" },
      { href: site.githubUrl, label: "Contributors", external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/security", label: "Security" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];
