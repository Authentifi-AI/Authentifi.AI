export const siteConfig = {
  name: "AuthentifiAI",
  description: "Use Authentifi AI to create your work, record your progress, and publish with confidence.",
  url: "https://authentifi.ai",
  ogImage: "https://authentifi.ai/og-image.jpg",
}

export const navigationConfig = {
  mainNav: [
    { label: "Home", href: "/" },
    { label: "Research", href: "/dashboard/research" },
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/" },
  ],
  dashboardNav: [
    { label: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
    { label: "Research Tools", href: "/dashboard/research", icon: "Search" },
    { label: "AI Research Assistant", href: "/dashboard/workspace", icon: "Brain" },
    { label: "Projects", href: "/dashboard/projects", icon: "FolderOpen" },
    { label: "Library", href: "/dashboard/library", icon: "BookOpen" },
    { label: "Documents", href: "/dashboard/documents", icon: "FileText" },
    { label: "Settings", href: "/dashboard/settings", icon: "Settings" },
  ],
}

export const featureConfig = {
  items: [
    {
      title: "Smart Search",
      description: "Find contextual information to the domain quickly with our AI-powered assistant Ensemble.",
      icon: "Search",
      href: "/dashboard/research",
    },
    {
      title: "Research Library",
      description: "Organize and access your research authorship in one centralized location.",
      icon: "BookOpen",
      href: "/dashboard/library",
    },
    {
      title: "AI Analysis",
      description: "Get insights and summaries to your research goal and outcomes using our AI.",
      icon: "Brain",
      href: "/dashboard/research",
    },
    {
      title: "Secure Authorship",
      description: "Secure generate and manage provenance on our secure store.",
      icon: "FileText",
      href: "/dashboard/documents",
    },
    {
      title: "Collaboration",
      description: "Share your research and collaborate with team members in real-time.",
      icon: "Share2",
      href: "/dashboard/projects",
    },
    {
      title: "Authentifi your work",
      description: "Share proof of work for your publshed research.",
      icon: "Logo",
      href: null,
    },
  ],
}
