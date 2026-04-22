'use client';

import Image from "next/image";
import Button from "@/app/components/ui/Button";

const checkIcon = "/products/Check_Icon.svg";
const indentIcon = "http://localhost:3845/assets/282a175057cd1f1ad97227ebeaa15996aa2b02a4.svg";

export default function ProductsDifferentiators() {
  const indents = [
    { id: 1, title: "Indent #004", status: "IN PROGRESS", statusColor: "#F59E0B" },
    { id: 2, title: "Indent #003", status: "COMPLETED", statusColor: "#00C2A8" },
    { id: 3, title: "Indent #002", status: "IN PROGRESS", statusColor: "#F59E0B" },
    { id: 4, title: "Indent #001", status: "COMPLETED", statusColor: "#00C2A8" },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-bold-token leading-tight">
            <span >
              &quot;Key{' '}
            </span>
            <span className="text-primary">
              Differentiation
            </span>
            <span className="text-neutral-800">
              .&quot;
            </span>
          </h2>
        </div>

        {/* Split Content - Reversed (Content Left, Card Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1 text-left">
            <div>
              <span
                className="uppercase font-semibold tracking-wide"
                
              >
                KEY FEATURES
              </span>
              <h3
                className="font-bold-token mt-3 sm:mt-4 mb-3 sm:mb-4"
                // style={{ color: "var(--color-neutral-800)" }}
              >
                What makes us different
              </h3>
              <p
                className="leading-relaxed "
                // style={{ color: "var(--color-neutral-600)" }}
              >
                Purpose-built for Indian food operations with compliance, regional expertise, and seamless integration capabilities.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-2 sm:space-y-4">
              {[
                "[X] Real-time visibility",
                "[Y] Localized compliance",
                "[Z] Seamless integrations",
                "[W] 24/7 expert support"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(0, 194, 168, 0.1)" }}
                  >
                    <Image
                      src={checkIcon}
                      alt="check"
                      width={16}
                      height={16}
                      className="w-3 sm:w-4 h-3 sm:h-4"
                    />
                  </div>
                  <p
                    className="font-normal leading-relaxed"
                    // style={{ color: "var(--color-neutral-600)" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button variant="primary">
                Get started
              </Button>
            </div>
          </div>

          {/* Right - Pink Card with Recent Indents */}
          <div
            className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white min-h-[400px] sm:min-h-[500px] flex flex-col justify-center order-1 lg:order-2"
            style={{
              background: "linear-gradient(135deg, rgba(219, 112, 147, 1) 0%, rgba(188, 112, 147, 1) 49%, rgba(219, 123, 160, 1) 74.5%, rgba(230, 145, 180, 1) 100%)"
            }}
          >
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8">
              <h3 className="font-bold mb-4 sm:mb-6" style={{ color: "var(--color-neutral-800)" }}>
                Recent Indents
              </h3>

              {/* Indents List */}
              <div className="space-y-2 sm:space-y-4">
                {indents.map((indent) => (
                  <div key={indent.id} className="flex items-center gap-3 sm:gap-4">
                    {/* Status Indicator */}
                    <div
                      className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: indent.statusColor }}
                    >
                      <Image
                        src={indentIcon}
                        alt="indent"
                        width={12}
                        height={12}
                        className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                        style={{ filter: "brightness(0) invert(1)" }}
                      />
                    </div>

                    {/* Indent Info */}
                    <div className="flex-1 min-w-0">
                      <p style={{ color: "var(--color-neutral-800)" }} className="font-semibold">
                        {indent.title}
                      </p>
                      <p style={{ color: "var(--color-neutral-600)" }}>
                        {indent.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 sm:mt-8 py-2 font-semibold hover:text-neutral-800 transition" style={{ color: "var(--color-neutral-600)" }}>
                View All Indents
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
