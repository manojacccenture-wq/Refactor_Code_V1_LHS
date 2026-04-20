'use client';

import Image from "next/image";
import { useState } from 'react';
import Button from '../../ui/Button';

interface Tab {
  id: string;
  label: string;
  icon: string;
  description?: string;
}

interface TabContent {
  badge: string;
  title: string;
  description: string;
  differencePoints: DifferencePoint[];
  features: {
    title: string;
    description: string;
  }[];
}



type DifferencePoint = {
  number: string;
  title: string;
  description: string;
};

type Feature = {
  title: string;
  description: string;
};

type Props = {
  badge: string;
  title: string;
  description: string;
  differencePoints: DifferencePoint[];
  features: Feature[];
};


const tabs: Tab[] = [
  {
    id: "software-development",
    label: "SOFTWARE DEVELOPMENT & MAINTENANCE",
    icon: "/services/code-pc.svg",
  },
  {
    id: "turnkey-projects",
    label: "TURNKEY PROJECT DEVELOPMENT",
    icon: "/services/Realtime_Analytics.svg",
  },
  {
    id: "process-automation",
    label: "PROCESS AUTOMATION",
    icon: "/services/Realtime_Analytics.svg",
  },
];



const tabContentMap: Record<string, TabContent> = {
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
        title: "Application development",
        description: "Custom-built systems aligned to operational workflows",
      },
      {
        title: "Maintenance & support",
        description: "Ongoing monitoring, bug fixes, performance tuning",
      },
      {
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
        title: "Requirement to rollout",
        description: "Complete lifecycle execution under one team",
      },
      {
        title: "Multi-system integration",
        description: "Hardware, software, and operations aligned",
      },
      {
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
        title: "Workflow automation",
        description: "Approvals, task routing, and process tracking",
      },
      {
        title: "Data automation",
        description: "Eliminating manual entry and duplication",
      },
      {
        title: "Operational efficiency",
        description: "Reduced errors, faster turnaround time",
      },
    ],
  },
};



function TabContentCard({
  badge,
  title,
  description,
  differencePoints,
  features,
}: Props) {
  return (
    <div className="bg-white rounded-3xl border border-neutral-300 p-8 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left Column - Text Content */}
        <div className="space-y-8">

          {/* Badge */}
          <div
            className="inline-block px-4 py-2 rounded-2xl font-semibold text-sm"
            style={{
              backgroundColor: "var(--color-primary-1)",
              color: "white",
            }}
          >
            {badge}
          </div>

          {/* Title */}
          <h3
            className="text-2xl md:text-3xl font-bold"
            style={{ color: "var(--color-text-title)" }}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-text-subtitle)" }}
          >
            {description}
          </p>

          {/* What makes us different */}
          <div className="pt-4">
            <h4
              className="text-xl font-bold mb-6"
              style={{ color: "var(--color-primary-1)" }}
            >
              What makes us different
            </h4>

            <div className="space-y-4">
              {differencePoints.map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <span
                    className="text-2xl font-bold"
                    style={{ color: "var(--color-primary-1)" }}
                  >
                    {point.number}
                  </span>

                  <div>
                    <p
                      className="font-semibold"
                      style={{ color: "var(--color-text-subtitle)" }}
                    >
                      {point.title}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "var(--color-text-subtitle)" }}
                    >
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Feature Cards */}
        <div className="space-y-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-300 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl shrink-0"
                  style={{
                    backgroundColor: "var(--color-primary-1)",
                    opacity: 0.1,
                  }}
                />

                <div>
                  <p
                    className="text-sm md:text-base font-bold"
                    style={{ color: "var(--color-text-title)" }}
                  >
                    {feature.title}
                  </p>

                  <p
                    className="text-xs md:text-sm"
                    style={{ color: "var(--color-text-subtitle)" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default function PowerfulFeatures() {
 const [activeTab, setActiveTab] = useState("software-development");

  const activeContent = tabContentMap[activeTab];

  return (
    <section className="py-16 md:py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className="text-primary uppercase mb-4 mx-auto font-bold"

          >
            Features
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mx-auto"

          >
            Powerful features to supercharge your productivity
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 justify-center mb-8 flex-wrap">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <Button
                key={tab.id}
                variant="outline"
                size="md"
                onClick={() => setActiveTab(tab.id)}
                className={`
          !rounded-2xl !px-7 !py-4 !font-bold !text-sm
          flex items-center gap-3 transition-all
          ${isActive ? "btn-tab-active" : "btn-tab"}
        `}
                leftIcon={
                  <Image
                    src={tab.icon}
                    alt={tab.label}
                    width={20}
                    height={20}
                  />
                }
              >
                {tab.label}
              </Button>
            );
          })}
        </div>

        <TabContentCard
          badge={activeContent.badge}
          title={activeContent.title}
          description={activeContent.description}
          differencePoints={activeContent.differencePoints}
          features={activeContent.features}
        />

      </div>
    </section>
  );
}
