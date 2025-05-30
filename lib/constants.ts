export const SITE_NAME = "AuthentifiAI"
export const SITE_DESCRIPTION =
  "Use Authentifi AI to create your work, record your progress, and publish with confidence."

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Research", href: "/dashboard/research", icon: "Search" },
  { name: "Features", href: "/#features" },
  { name: "Pricing", href: "/" },
]

export const DASHBOARD_ITEMS = [
  { title: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
  { title: "Research Tools", href: "/dashboard/research", icon: "Search" },
  { title: "AI Research Assistant", href: "/dashboard/workspace", icon: "Brain" },
  { title: "Projects", href: "/dashboard/projects", icon: "FolderOpen" },
  { title: "Library", href: "/dashboard/library", icon: "BookOpen" },
  { title: "Documents", href: "/dashboard/documents", icon: "FileText" },
  { title: "Settings", href: "/dashboard/settings", icon: "Settings" },
]

export const FEATURE_ITEMS = [
  {
    title: "Smart Search",
    description: "Find contextual information to the domain quickly with our AI-powered assistant Ensemble.",
    icon: "Search",
    href: "/dashboard/research",
  },
  {
    title: "Research Library",
    description: "Organize and access your research materials in one centralized location.",
    icon: "BookOpen",
    href: "/dashboard/library",
  },
  {
    title: "AI Analysis",
    description: "Get insights and summaries from your research materials using advanced AI.",
    icon: "Brain",
    href: "/dashboard/research",
  },
  {
    title: "Citation Manager",
    description: "Automatically generate and manage citations in various formats.",
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
    title: "Secure Storage",
    description: "Keep your research data secure with enterprise-grade encryption.",
    icon: "Shield",
    href: null,
  },
]
