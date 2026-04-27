import { Tab, TabContent } from "@/app/components/sections/services/PowerfulFeatures/PowerfulFeatures.types";
import codePc from "@/app/components/sections/services/assets/code-pc.svg";
import realtimeAnalytics from "@/app/components/sections/services/assets/Realtime_Analytics.svg";
import firstPng from "@/app/components/sections/services/assets/1st.png";
import secondPng from "@/app/components/sections/services/assets/2nd.png";
import thirdPng from "@/app/components/sections/services/assets/3rd.png";

export const tabs: Tab[] = [
  {
    id: "software-development",
    label: "SOFTWARE DEVELOPMENT & MAINTENANCE",
    icon: codePc.src,
  },
  {
    id: "turnkey-projects",
    label: "TURNKEY PROJECT DEVELOPMENT",
    icon: realtimeAnalytics.src,
  },
  {
    id: "process-automation",
    label: "PROCESS AUTOMATION",
    icon: realtimeAnalytics.src,
  },
];




export const tabContentMap: Record<string, TabContent> = {
  "software-development": {
    badge: "BUILD & SUSTAIN SYSTEMS",
    title:
      "Systems Built for Real Operations, Maintained for Long-Term Reliability",
    description:
      "We design, develop, and maintain enterprise-grade applications that operate reliably under real-world conditions. From initial architecture to long-term support, our focus is on stability, performance, and continuity.",
    differencePoints: [
      {
        number: "01",
        title: "We build systems with maintenance in mind, not just deployment",
        description: "",
      },
      {
        number: "02",
        title: "Our teams stay involved post-deployment, ensuring continuity",
        description: "",
      },
      {
        number: "03",
        title: "Focused on reducing system failures and long-term technical debt",
        description: "",
      },
    ],
    features: [
      {
        image:firstPng.src,
        title: "Application development",
        description: "Custom-built systems aligned to operational workflows",
      },
      {
        image:secondPng.src,
        title: "Maintenance & support",
        description: "Ongoing monitoring, bug fixes, performance tuning",
      },
      {
        image:thirdPng.src,
        title: "System upgrades",
        description: "Modernization without disrupting existing operations",
      },
    ],
  },

  "turnkey-projects": {
    badge: "END-TO-END EXECUTION",
    title:
      "From Requirement to Deployment — Delivered as One Complete System",
    description:
      "We take full ownership of project execution — from understanding requirements to final deployment and stabilization. Designed for complex environments where coordination, accountability, and delivery timelines matter.",
    differencePoints: [
      {
        number: "01",
        title: "Single-point ownership from start to finish",
        description: "",
      },
      {
        number: "02",
        title:
          "Strong coordination between stakeholders, vendors, and teams",
        description: "",
      },
      {
        number: "03",
        title: "Focused on delivering fully functional, ready-to-use systems",
        description: "",
      },
    ],
    features: [
      {
        image:firstPng.src,
        title: "Requirement to rollout",
        description: "Complete lifecycle execution under one team",
      },
      {
        image:secondPng.src,
        title: "Multi-system integration",
        description: "Hardware, software, and operations aligned",
      },
      {
        image:thirdPng.src,
        title: "Deployment & stabilization",
        description: "On-ground support until system runs smoothly",
      },
    ],
  },

  "process-automation": {
    badge: "REDUCE MANUAL DEPENDENCY",
    title:
      "Automating Repetitive Operations Without Disrupting Workflows",
    description:
      "We identify repetitive, error-prone processes and automate them using practical, scalable solutions. The goal is to improve efficiency without overcomplicating existing systems.",
    differencePoints: [
      {
        number: "01",
        title:
          "Automation designed around existing workflows, not forced changes",
        description: "",
      },
      {
        number: "02",
        title:
          "Focus on high-impact areas like approvals, tracking, and reporting",
        description: "",
      },
      {
        number: "03",
        title: "Balanced approach — automation where it adds real value",
        description: "",
      },
    ],
    features: [
      {
        image:firstPng.src,
        title: "Workflow automation",
        description: "Approvals, task routing, and process tracking",
      },
      {
        image:secondPng.src,
        title: "Data automation",
        description: "Eliminating manual entry and duplication",
      },
      {
        image:thirdPng.src,
        title: "Operational efficiency",
        description: "Reduced errors, faster turnaround time",
      },
    ],
  },
};