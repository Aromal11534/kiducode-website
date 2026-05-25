export const site = {
  name: "KiduCode",
  domain: "https://kiducode.com",
  githubUrl: "https://github.com/Aromal11534/Kiducode",
  discordUrl: "https://discord.gg/kiducode",
  contactEmail: "hello@kiducode.com",
  securityEmail: "security@kiducode.com",
  tagline: "Naadan prompts. Production code.",
  description:
    "KiduCode is a Kerala-built open-source AI coding agent with planned Manglish and Malayalam developer prompt support.",
  keywords:
    "KiduCode, AI coding agent, open source coding assistant, Kerala developers, Manglish coding, Malayalam coding assistant, OpenCode fork",
};

export const navItems = [
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
