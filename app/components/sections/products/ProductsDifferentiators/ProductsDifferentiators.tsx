'use client';

import Image from "next/image";
import Button from "@/app/components/ui/Button";
import checkIconImg from "@/app/components/sections/products/assets/Check_Icon.svg";

const checkIcon = checkIconImg.src;
const indentIcon = "http://localhost:3845/assets/282a175057cd1f1ad97227ebeaa15996aa2b02a4.svg";

export default function ProductsDifferentiators() {
  const indents = [
    {
      id: 1,
      title: "Indiranagar Outlet",
      subtitle: "Req: Paneer Tikka Base x 50kg",
      status: "IN PROGRESS",
      type: "progress",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
          <path d="M8.4873 0C5.4873 0 2.76855 1.07812 0.65918 2.85938C-0.0439453 3.46875 -0.18457 4.5 0.237305 5.34375L7.59668 18.4219C8.01855 19.125 8.95605 19.125 9.37793 18.4219L16.7373 5.34375C17.1592 4.5 17.0186 3.46875 16.3154 2.85938C14.2061 1.07812 11.4873 0 8.4873 0ZM3.47168 4.96875C3.47168 3.89062 4.40918 3 5.4873 3C6.56543 3 7.50293 3.89062 7.50293 4.96875C7.50293 6.09375 6.56543 6.98438 5.4873 6.98438C4.40918 6.98438 3.47168 6.09375 3.47168 4.96875ZM8.4873 12.9844C7.40918 12.9844 6.47168 12.0938 6.47168 10.9688C6.47168 9.89062 7.40918 9 8.4873 9C9.56543 9 10.5029 9.89062 10.5029 10.9688C10.5029 12.0938 9.56543 12.9844 8.4873 12.9844Z" fill="#14B8A6" />
        </svg>
      ),
    },

    {
      id: 2,
      title: "Whitefield Outlet",
      subtitle: "Req: Sambar Mix x 20kg",
      status: "IN PROGRESS",
      type: "progress",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
          <path d="M1.35938 11.2969C2.15625 10.9688 2.53125 10.5 3.32812 10.5C4.54688 10.5 4.78125 11.4844 6.65625 11.4844C8.625 11.4844 8.76562 10.5 9.98438 10.5C11.2031 10.5 11.4375 11.4844 13.3125 11.4844C15.2812 11.4844 15.4219 10.5 16.6875 10.5C17.4844 10.5 17.8125 10.9688 18.6094 11.25C19.2656 11.5312 19.9688 11.0156 19.9688 10.3125C19.9688 9.89062 19.6875 9.46875 19.3125 9.32812C18.3281 9 18.0938 8.53125 16.6406 8.53125C14.6719 8.53125 14.5312 9.51562 13.3125 9.51562C12.1406 9.51562 11.9062 8.53125 9.98438 8.53125C8.01562 8.53125 7.875 9.51562 6.65625 9.51562C5.48438 9.51562 5.25 8.53125 3.32812 8.53125C1.78125 8.53125 1.35938 9.14062 0.65625 9.42188C0.234375 9.5625 0 9.9375 0 10.3594C0 11.0156 0.703125 11.5312 1.35938 11.2969ZM0 15.9844C0 17.1094 0.890625 18 1.96875 18H18C19.0781 18 19.9688 17.1094 19.9688 15.9844V15C19.9688 13.9219 19.0781 12.9844 18 12.9844H1.96875C0.890625 12.9844 0 13.9219 0 15V15.9844ZM19.9688 6C20.0156 2.01562 15.7031 0 9.98438 0C4.26562 0 0 2.01562 0 6C0 6.5625 0.421875 6.98438 0.984375 6.98438H18.9844C19.5469 6.98438 19.9688 6.5625 19.9688 6Z" fill="#14B8A6" />
        </svg>
      ),
    },

    {
      id: 3,
      title: "Settled: Mumbai Spices",
      subtitle: "Vendor payment completed",
      status: "COMPLETED",
      type: "completed",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M8.6 14.6L15.65 7.55L14.25 6.15L8.6 11.8L5.75 8.95L4.35 10.35L8.6 14.6ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#059669" />
        </svg>
      ),
    },

    {
      id: 4,
      title: "Settled: Mumbai Spices",
      subtitle: "Vendor payment completed",
      status: "COMPLETED",
      type: "completed",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M8.6 14.6L15.65 7.55L14.25 6.15L8.6 11.8L5.75 8.95L4.35 10.35L8.6 14.6ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#059669" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-0 px-4 sm:px-6 bg-white">
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
              <Button variant="primary" href="/contact">Let’s Discuss</Button>
            </div>
          </div>

          {/* Right - Pink Card with Recent Indents */}
          <div
            className="rounded-2xl sm:rounded-3xl pt-[32px] sm:pt-[40px] md:pt-[48.828px] px-[24px] sm:px-[40px] md:px-[62px] pb-[24px] sm:pb-[28px] md:pb-[29.442px] text-white min-h-[400px] sm:min-h-[500px] flex flex-col justify-center order-1 lg:order-2"
            style={{
              background:
                "radial-gradient(70.71% 70.71% at 50% 50%, #FFD5DC 0%, #FF8098 49%, #FFBDC8 100%)",
            }}
          >
            <div className="bg-white rounded-xl sm:rounded-2xl p-8 sm:p-8">
              <h5 className="font-bold mb-4 sm:mb-6 text-black" >
                Recent Indents
              </h5>

              {/* Indents List */}
              <div className="space-y-4">
                {indents.map((indent) => (
                  <div
                    key={indent.id}
                    className=" flex items-center gap-4 rounded-[28px] bg-[#F8FAFC] px-6 py-5 shadow-[0px_2px_8px_rgba(15,23,42,0.04)]"
                  >
                    {/* ICON */}
                    <div
                      className={` shrink-0 flex items-center justify-center w-[56px] h-[56px] rounded-full

          ${indent.type === "progress"
                          ? "bg-white shadow-[0px_2px_8px_rgba(15,23,42,0.08)]"
                          : "bg-[#D1FAE5]"
                        }
        `}
                    >
                      {indent.icon}
                    </div>

                    {/* CONTENT */}
                    <div className="flex-1 min-w-0">
                      <h6 className="font-semibold-token text-neutral-900 leading-none mb-3">
                        {indent.title}
                      </h6>

                      <p className="text-[12px] leading-none ">2
                        {indent.subtitle}
                      </p>
                    </div>

                    {/* STATUS */}
                    <h6
                      className={`shrink-0 rounded-full px-6 py-1 font-semibold-token leading-none
 text-body-sm
    ${indent.type === "progress"
                          ? "bg-[#FEF3C7] text-[#D97706]"
                          : "bg-[#D1FAE5] text-[#059669]"
                        }
  `}
                    >
                      {indent.status}
                    </h6>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
