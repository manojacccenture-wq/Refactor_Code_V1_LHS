'use client';

import Image from "next/image";
import Button from "@/app/components/ui/Button";
import checkIcon from "@/app/components/sections/products/assets/Check_Icon.svg";

const checkIconSrc = checkIcon.src;

export default function ProductsSplitSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-3 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="font-bold-token leading-tight">
            <span >
              &quot;Simplify{' '}
            </span>
            <span className="text-primary">
              Workflows
            </span>
            <span className="text-neutral-800">
              , Amplify
            </span>
            <span className="text-primary">
              {" "}Productivity
            </span>
            <span className="text-neutral-800">
              .&quot;
            </span>
          </h1>
        </div>

        {/* Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Left - Purple Card with Circle Chart */}
          <div
            className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12  min-h-[400px] sm:min-h-[500px] flex flex-col justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(160, 161, 253, 1) 0%, rgba(124, 126, 253, 1) 49%, rgba(156, 158, 254, 1) 74.5%, rgba(188, 189, 254, 1) 100%)"
            }}
          >
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center">
              <h3 className="font-bold-token mb-4 " >
                Spend by Category
              </h3>

              {/* Circle Chart Placeholder */}
              <div className="w-32 sm:w-40 h-32 sm:h-40 rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center border-6 sm:border-8"
                style={{ borderColor: "var(--color-primary-1)", backgroundColor: "var(--color-neutral-300)" }}
              >
                <div className="text-center">
                  <p className="font-bold-token" >$85k</p>
                  <p >Total Spend</p>
                </div>
              </div>

              {/* Category List */}
              <div className="space-y-2 sm:space-y-3 text-left">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full" style={{ backgroundColor: "var(--color-primary-1)" }}></span>
                  <p >Dairy</p>
                  <h6 className="font-bold-token ml-auto">$43,500</h6>
                  {/* <span style={{ color: "var(--color-neutral-600)" }} className="ml-auto">$43,500</span> */}
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full" style={{ backgroundColor: "#F59E0B" }}></span>
                  <p >Vegetables</p>
                  <h6 className="font-bold-token ml-auto">$19,750</h6>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full" style={{ backgroundColor: "#FBBF24" }}></span>
                  <p >Packaging</p>
                  <h6 className="font-bold-token ml-auto">$13,750</h6>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-6 sm:mt-8 py-2 font-semibold-token hover:text-neutral-500 transition " >
                Download Category Report
              </Button>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-4 sm:space-y-6 text-left">
            <div>
              <p
                className="uppercase font-semibold-token tracking-wide"

              >
                IMPROVE PRODUCTIVITY
              </p>
              <h3
                className="font-bold-token mt-3 sm:mt-4 mb-3 sm:mb-4"

              >
                Proof statement
              </h3>
              <p
                className="leading-relaxed"

              >
                Get rid of endless spreadsheets and binders collecting dust, or hours wasted on searching and emailing.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-2 sm:space-y-4">
              {[
                "[X] deployments operational",
                "[Y] daily transactions processed",
                "[Z] outlets on a single"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(0, 194, 168, 0.1)" }}
                  >
                    <Image
                      src={checkIconSrc}
                      alt="check"
                      width={16}
                      height={16}
                      className="w-3 sm:w-4 h-3 sm:h-4"
                    />
                  </div>
                  <p
                    className="font-normal-token leading-relaxed"

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
        </div>
      </div>
    </section>
  );
}
