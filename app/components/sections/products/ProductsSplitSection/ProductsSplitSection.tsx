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
            className="rounded-2xl sm:rounded-3xl flex flex-col justify-center items-center w-full max-w-[540px] h-[528px] py-8 px-6 sm:px-24 mx-auto"
            style={{
              background: "linear-gradient(135deg, rgba(160, 161, 253, 1) 0%, rgba(124, 126, 253, 1) 49%, rgba(156, 158, 254, 1) 74.5%, rgba(188, 189, 254, 1) 100%)"
            }}
          >
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 text-left w-full h-full flex flex-col justify-center">
              <div className="flex items-center justify-between mb-4">
                <h6 className="font-bold-token m-0">
                  Spend by Category
                </h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                  <path d="M9 15H11V9H9V15ZM10 7C10.2833 7 10.5208 6.90417 10.7125 6.7125C10.9042 6.52083 11 6.28333 11 6C11 5.71667 10.9042 5.47917 10.7125 5.2875C10.5208 5.09583 10.2833 5 10 5C9.71667 5 9.47917 5.09583 9.2875 5.2875C9.09583 5.47917 9 5.71667 9 6C9 6.28333 9.09583 6.52083 9.2875 6.7125C9.47917 6.90417 9.71667 7 10 7ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#94A3B8" />
                </svg>
              </div>




              {/* Circle Chart Placeholder */}
              {/* Circle Chart Placeholder */}
              <div className="relative w-40 sm:w-48 h-40 sm:h-48 mx-auto mb-6 sm:mb-8 flex items-center justify-center bg-white rounded-full">

                {/* SVG Background */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 192 192"
                  fill="none"
                  className="absolute inset-0 w-full h-full"
                >
                  <path d="M96 176C140.153 176 176 140.153 176 96C176 51.8468 140.153 16 96 16C51.8468 16 16 51.8468 16 96C16 140.153 51.8468 176 96 176V176" stroke="#FBBF24" strokeWidth="24" />
                  <path d="M96 176C140.153 176 176 140.153 176 96C176 51.8468 140.153 16 96 16C51.8468 16 16 51.8468 16 96C16 140.153 51.8468 176 96 176V176" stroke="#34D399" strokeWidth="24" />
                  <path d="M96 176C140.153 176 176 140.153 176 96C176 51.8468 140.153 16 96 16C51.8468 16 16 51.8468 16 96C16 140.153 51.8468 176 96 176V176" stroke="#2DD4BF" strokeWidth="24" />
                </svg>

                {/* Centered HTML Text */}
                <div className="text-center relative z-10">
                  <h4 className="font-bold-token  ">$85k</h4>
                  <p className="font-regular-token text-[12px] text-neutral-500">Total Spend</p>
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
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full" style={{ backgroundColor: "var(--color-primary-1)" }}></span>
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
