'use client';

import { useState } from 'react';
import Button from '@/app/components/ui/Button';
import Image from 'next/image';
import clsx from 'clsx';

interface Tab {
  id: string;
  label: string;
  icon: string;
}

interface TabContent {
  title: string;
  icon: string;
  description: string;
  image: string;
}

const tabs: Tab[] = [
  { id: 'enterprise-pos', label: 'Enterprise POS', icon: '/products/Enterpise_POS_Icon.svg' },
  { id: 'franchise-mgmt', label: 'franchise management', icon: '/products/Enterpise_POS_Icon.svg' },
  { id: 'central-kitchen', label: 'central kitchen', icon: '/products/Enterpise_POS_Icon.svg' },
  { id: 'vendor-settlement', label: 'vendor settlement', icon: '/products/Enterpise_POS_Icon.svg' },
  { id: 'bi-reporting', label: 'BI reporting', icon: '/products/Enterpise_POS_Icon.svg' },
];

const tabContents: Record<string, TabContent> = {
  'enterprise-pos': {
    title: 'Enterprise POS',
    icon: '/products/Enterpise_POS_Icon.svg',
    description: 'Real-time order management',
    image: '/products/Enterprise POS.svg',
  },
  'franchise-mgmt': {
    title: 'Franchise Management',
    icon: '/products/Enterpise_POS_Icon.svg',
    description: 'Centralized control',
    image: '/products/Enterprise POS.svg',
  },
  'central-kitchen': {
    title: 'Central Kitchen Operations',
    icon: '/products/Enterpise_POS_Icon.svg',
    description: 'Production planning and ingredient management at scale',
    image: '/products/Enterprise POS.svg',
  },
  'vendor-settlement': {
    title: 'Vendor Settlement',
    icon: '/products/Enterpise_POS_Icon.svg',
    description: 'Automated accounting for supplier payments',
    image: '/products/Enterprise POS.svg',
  },
  'bi-reporting': {
    title: 'BI & Analytics',
    icon: '/products/Enterpise_POS_Icon.svg',
    description: 'Executive dashboards with insights',
    image: '/products/Enterprise POS.svg',
  },
};

export default function ProductsTabs() {
  const [activeTab, setActiveTab] = useState<string>('enterprise-pos');
  const content = tabContents[activeTab];

  return (
    <section className="py-10 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 sm:gap-6">

          {/* Left Column - Vertical Tabs */}
          <div className="flex flex-col gap-2 sm:gap-4 w-full md:w-64 shrink-0">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variant="ghost"
                className={clsx(
                  "px-4 sm:px-7 py-3 sm:py-5 rounded-2xl text-left w-full justify-start",
                  activeTab === tab.id
                    ? "border-2 bg-white border-[var(--color-primary-1)] text-primary"
                    : "border border-neutral-300 bg-white text-[var(--color-text-subtitle)]"
                )}
              >
                <div className="relative w-8 h-8 rounded-lg shrink-0">
                  <Image
                    src={tab.icon}
                    alt={tab.label}
                    width={20}
                    height={20}
                  />
                </div>

                <span className="font-semibold">
                  {tab.label}
                </span>
              </Button>
            ))}
          </div>

          {/* Right Column - Content */}
          <div className="w-full h-full">
            <div className="relative w-full aspect-[15/9]">
              <Image
                src={content.image}
                alt={content.title}
                fill
                className="object-none"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
