export interface DetailContent {
  id: string;
  title: string;
  category: string;
  description: string;
  author: string;
  authorTitle: string;
  authorImage: string;
  client?: string;
  challenge?: string;
  objective?: string;
  solution?: string[];
  results?: string[];
  keyDeliverables?: string[];
}

export const resourcesData: DetailContent[] = [
  {
    id: "1",
    title: "Best practices for showcasing features",
    category: "Steel Industry",
    description: "Domain depth, not breadth. We deliver in environments where operational failure is not an option.",
    author: "Janaki Raman",
    authorTitle: "Head of Operations, Livelihood systems",
    authorImage: "/Janakai_Ramana.png",
    client: "Mid-sized Integrated Steel Manufacturing Unit",
    challenge: "Disconnected production systems, manual reporting, and lack of real-time visibility across blast furnace, rolling mill, and logistics operations.",
    objective: "Build a centralized monitoring and analytics platform to reduce downtime and improve production efficiency.",
    solution: [
      "Designed a unified operations dashboard",
      "Implemented IoT-based data integration",
      "Real-time furnace temperature & pressure monitoring",
      "Role-based access for plant managers and supervisors",
    ],
    results: [
      "18% reduction in unplanned downtime",
      "22% faster reporting cycle",
      "Improved cross-department coordination",
      "Real-time operational visibility",
    ],
    keyDeliverables: [
      "UX Research & Workflow Mapping",
      "Web-Based Control Dashboard",
      "Data Visualization System",
      "Enterprise UI Design System",
    ],
  },
  {
    id: "2",
    title: "Visual storytelling for complex products",
    category: "Steel Industry",
    description: "Domain depth, not breadth. We deliver in environments where operational failure is not an option.",
    author: "Janaki Raman",
    authorTitle: "Head of Operations, Livelihood systems",
    authorImage: "/about/Leader_Image.svg",
    client: "Manufacturing Corporation",
    challenge: "Complex product communication and unclear value proposition.",
    objective: "Develop compelling visual narratives for product features.",
    solution: [
      "Created custom illustrations and animations",
      "Developed interactive product demos",
      "Built storytelling framework",
    ],
    results: [
      "35% increase in engagement",
      "Enhanced brand perception",
      "Improved sales conversion",
    ],
    keyDeliverables: [
      "Visual Design System",
      "Animation Guidelines",
      "Interactive Prototypes",
    ],
  },
  {
    id: "3",
    title: "How microinteractions boost user experience",
    category: "UX Design",
    description: "Enhancing user engagement through thoughtful micro-interactions.",
    author: "Janaki Raman",
    authorTitle: "Head of Operations, Livelihood systems",
    authorImage: "/about/Leader_Image.svg",
  },
  {
    id: "4",
    title: "Why performance and accessibility matter",
    category: "Performance",
    description: "Building inclusive and fast applications.",
    author: "Janaki Raman",
    authorTitle: "Head of Operations, Livelihood systems",
    authorImage: "/about/Leader_Image.svg",
    client: "Enterprise Software Company",
    challenge: "Slow application performance and accessibility concerns.",
    objective: "Optimize performance metrics and ensure WCAG compliance.",
    solution: [
      "Performance profiling and optimization",
      "Accessibility audit and remediation",
      "Load time reduction by 60%",
    ],
    results: [
      "50% improvement in Core Web Vitals",
      "WCAG 2.1 AA compliance achieved",
      "User satisfaction score increased",
    ],
    keyDeliverables: [
      "Performance Report",
      "Accessibility Audit",
      "Optimization Implementation",
    ],
  },
  {
    id: "5",
    title: "From idea to launch: SaaS UI/UX guide",
    category: "SaaS",
    description: "A comprehensive guide to building SaaS applications.",
    author: "Janaki Raman",
    authorTitle: "Head of Operations, Livelihood systems",
    authorImage: "/about/Leader_Image.svg",
  },
  {
    id: "6",
    title: "Simplifying user journeys for more signups",
    category: "Conversion Optimization",
    description: "Optimizing user flows to increase conversion rates.",
    author: "Janaki Raman",
    authorTitle: "Head of Operations, Livelihood systems",
    authorImage: "/about/Leader_Image.svg",
    client: "SaaS Startup",
    challenge: "High bounce rates and low conversion on signup flow.",
    objective: "Simplify and streamline user registration process.",
    solution: [
      "Conducted user research and testing",
      "Redesigned signup flow",
      "Implemented progressive profiling",
      "A/B tested variations",
    ],
    results: [
      "45% increase in sign-ups",
      "Reduced form abandonment by 30%",
      "Improved onboarding completion rate",
    ],
    keyDeliverables: [
      "User Research Report",
      "Redesigned Flow",
      "A/B Testing Results",
    ],
  },
];

export function getResourceById(id: string): DetailContent | undefined {
  return resourcesData.find((resource) => resource.id === id);
}

export function getResourcesByType(
  type: "case-study" | "blog"
): DetailContent[] {
  if (type === "case-study") {
    return resourcesData.filter(
      (r) => r.client && r.challenge && r.objective
    );
  }
  return resourcesData;
}
