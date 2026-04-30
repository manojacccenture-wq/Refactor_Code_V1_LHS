'use client';

import { useState } from 'react';
import Button from '@/app/components/ui/Button';
import Image from 'next/image';
import clsx from 'clsx';
import enterprisePosIcon from "@/app/components/sections/products/assets/Enterpise_POS_Icon.svg";
import screen1 from "@/app/components/sections/products/assets/screen_1.png";
import screen2 from "@/app/components/sections/products/assets/screen_2.png";
import screen3 from "@/app/components/sections/products/assets/screen_3.png";
import screen4 from "@/app/components/sections/products/assets/screen_4.png";
import screen5 from "@/app/components/sections/products/assets/screen_5.png";

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
  { id: 'enterprise-pos', label: 'Enterprise POS', icon: enterprisePosIcon.src },
  { id: 'franchise-mgmt', label: 'franchise management', icon: enterprisePosIcon.src },
  { id: 'central-kitchen', label: 'central kitchen', icon: enterprisePosIcon.src },
  { id: 'vendor-settlement', label: 'vendor settlement', icon: enterprisePosIcon.src },
  { id: 'bi-reporting', label: 'BI reporting', icon: enterprisePosIcon.src },
];

const tabContents: Record<string, TabContent> = {
  'enterprise-pos': {
    title: 'Enterprise POS',
    icon: enterprisePosIcon.src,
    description: 'Real-time order management',
    image: screen1.src,
  },
  'franchise-mgmt': {
    title: 'Franchise Management',
    icon: enterprisePosIcon.src,
    description: 'Centralized control',
    image: screen2.src,
  },
  'central-kitchen': {
    title: 'Central Kitchen Operations',
    icon: enterprisePosIcon.src,
    description: 'Production planning and ingredient management at scale',
    image: screen3.src,
  },
  'vendor-settlement': {
    title: 'Vendor Settlement',
    icon: enterprisePosIcon.src,
    description: 'Automated accounting for supplier payments',
    image: screen4.src,
  },
  'bi-reporting': {
    title: 'BI & Analytics',
    icon: enterprisePosIcon.src,
    description: 'Executive dashboards with insights',
    image: screen5.src,
  },
};

export default function ProductsTabs() {
  const [activeTab, setActiveTab] = useState<string>('enterprise-pos');
  const content = tabContents[activeTab];

  return (
    <section className="py-10 sm:py-16 md:py-0 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 sm:gap-8 md:gap-12 items-start">

          {/* LEFT COLUMN - Horizontal Scroll on Mobile, Vertical on Desktop */}
          {/* 🔥 ADDED: flex-row, overflow-x-auto, and hidden scrollbars for mobile */}
          <div className="flex flex-row md:flex-col gap-3 sm:gap-4 w-full md:w-64 shrink-0 overflow-x-auto pb-4 md:pb-0 scrollbar-hide snap-x">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variant="ghost"
                className={clsx(
                  // 🔥 ADDED: whitespace-nowrap and w-auto for mobile, w-full for desktop
                  "px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-left justify-start flex-shrink-0 w-auto md:w-full snap-start flex items-center gap-3 transition-colors",
                  activeTab === tab.id
                    ? "border-2 bg-white border-[var(--color-primary-1)] text-primary shadow-sm"
                    : "border border-neutral-300 bg-white text-[var(--color-text-subtitle)] hover:bg-neutral-50"
                )}
              >
                <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-lg shrink-0 flex items-center justify-center">
                  <Image
                    src={tab.icon}
                    alt={tab.label}
                    width={24}
                    height={24}
                    className="object-none"
                  />
                </div>

                <h6 className="font-semibold-token   capitalize">
                  {tab.label}
                </h6>
              </Button>
            ))}
          </div>

          {/* RIGHT COLUMN - Image Content */}
          <div className="w-full h-full flex flex-col  ">
            <div className="w-full rounded-2xl overflow-hidden">
              <Image
                src={content.image}
                alt={content.title}
                width={1200}
                height={800}
                className="w-full h-auto object-none"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
