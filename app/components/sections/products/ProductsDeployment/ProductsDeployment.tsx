'use client';

import Image from "next/image";

const deploymentIcon = "/products/terminal-pc.svg";

const deploymentOptions = [
  { id: 'on-premise', label: 'On-Premise' },
  { id: 'private-cloud', label: 'Private Cloud' },
  { id: 'managed-saas', label: 'Managed SaaS' },
];

export default function ProductsDeployment() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden"
          style={{ backgroundColor: "#F5FBFA" }}
        >
          {/* Fade gradients */}
          <div className="hidden sm:block absolute inset-y-0 left-0 w-32 sm:w-48 bg-gradient-to-r from-primary/10 to-transparent rounded-3xl pointer-events-none" />
          <div className="hidden sm:block absolute inset-y-0 right-0 w-32 sm:w-48 bg-gradient-to-l from-primary/10 to-transparent rounded-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Title */}
            <h2 className="text-center font-bold mb-8 sm:mb-12 md:mb-16 leading-tight">
              <span style={{ color: "var(--color-neutral-800)" }}>Deployment </span>
              <span style={{ color: "var(--color-primary-1)" }}>options</span>
            </h2>

            {/* Deployment Cards */}
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 justify-center items-center">
              {deploymentOptions.map((option) => (
                <div key={option.id} className="flex flex-col items-center gap-4 sm:gap-6">
                  {/* Icon */}
                  <div
                    className="w-12 sm:w-16 h-12 sm:h-16 rounded-lg sm:rounded-2xl flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, var(--color-primary-1) 0%, #005c50 100%)"
                    }}
                  >
                    <Image
                      src={deploymentIcon}
                      alt={option.label}
                      width={28}
                      height={28}
                      className="object-contain sm:w-8 sm:h-8"
                    />
                  </div>

                  {/* Label */}
                  <h3
                    className="font-bold text-center"
                    style={{ color: "var(--color-neutral-800)" }}
                  >
                    {option.label}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
