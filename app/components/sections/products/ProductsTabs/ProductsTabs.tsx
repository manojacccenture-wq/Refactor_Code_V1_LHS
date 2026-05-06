'use client';

import { useState } from 'react';
import Button from '@/app/components/ui/Button';
import Image from 'next/image';
import clsx from 'clsx';
import enterprisePosIcon from "@/app/components/sections/products/assets/Enterpise_POS_Icon.svg";

import screen1 from "@/app/components/sections/products/assets/screen_1.svg";
import screen2 from "@/app/components/sections/products/assets/screen_2.svg";
import screen3 from "@/app/components/sections/products/assets/screen_3.svg";
import screen4 from "@/app/components/sections/products/assets/screen_4.svg";
import screen5 from "@/app/components/sections/products/assets/screen_5.svg";

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
        <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-6 sm:gap-8 md:gap-12 items-start">

          {/* LEFT COLUMN - Horizontal Scroll on Mobile, Vertical on Desktop */}
          {/* 🔥 ADDED: flex-row, overflow-x-auto, and hidden scrollbars for mobile */}
          <div className="flex flex-row lg:flex-col gap-6 w-full lg:w-[208px] shrink-0 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide snap-x">

            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variant="ghost"
                className={clsx(
                  `
        w-[208px]
        h-[114px]
        rounded-[24px]
        px-6
        py-5
        flex
        flex-col
        items-start
        justify-center
        gap-4
        shrink-0
        transition-colors
        `,
                  activeTab === tab.id
                    ? "border-2 bg-white border-[var(--color-primary-1)] text-primary shadow-sm"
                    : "border border-neutral-300 bg-white text-[var(--color-text-subtitle)] hover:bg-neutral-50"
                )}
              >
                <div className="relative w-8 h-8 shrink-0 flex items-center justify-center">
                  <Image
                    src={tab.icon}
                    alt={tab.label}
                    width={32}
                    height={32}
                  />
                </div>

                <h6 className="font-semibold-token capitalize leading-none text-left mt-[20%]">
                  {tab.label}
                </h6>
              </Button>
            ))}

          </div>

          {/* RIGHT COLUMN - Image Content */}
          <div className="w-full h-full flex flex-col min-w-0">
            <div
              className="
      w-full
      rounded-2xl
      overflow-hidden
   shadow-[0_-12px_90px_rgba(74,58,255,0.08)]
    "
            >
              <Image
                src={content.image}
                alt={content.title}
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
