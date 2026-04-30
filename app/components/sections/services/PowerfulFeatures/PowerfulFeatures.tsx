'use client';

import Image from "next/image";
import { useState } from 'react';
import Button from '@/app/components/ui/Button';
import { tabContentMap, tabs } from "@/app/components/sections/services/PowerfulFeatures/components/TabContentCard/data/PowerfulFeatures.data";
import { TabContentCard } from "@/app/components/sections/services/PowerfulFeatures/components/TabContentCard/TabContentCard";





export default function PowerfulFeatures() {
  const [activeTab, setActiveTab] = useState("software-development");

  const activeContent = tabContentMap[activeTab];

  return (
    <section className="py-16 md:py-0 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className="text-primary uppercase mb-4 mx-auto font-bold-token tracking-widest"

          >
            Features
          </p>
          <h2
            className=" font-bold-token mx-auto"

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
                size="lg"
                onClick={() => setActiveTab(tab.id)}
                className={`
          !rounded-2xl !px-[28px] !py-[18px] !font-bold-token 
          flex items-center gap-3 transition-all
          ${isActive ? "btn-tab-active" : "btn-tab"}
        `}
                leftIcon={
                  <Image
                    src={tab.icon}
                    alt={tab.label}
                    width={28}
                    height={28}
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
