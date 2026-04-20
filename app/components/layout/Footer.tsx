"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-300 py-20 px-6">
      <div className="max-w-7xl text-left mx-auto">
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16 lg:gap-12">

          {/* LOGO + DESC + SOCIAL SECTION */}
          <div className="flex flex-col gap-6">
            {/* Logo Section */}
            <Link href="/" className="w-fit">
              <Image
                src="/logo.svg"   // put your logo inside /public
                alt="LHS Logo"
                width={100}
                height={40}
                priority
                className="object-contain w-auto h-20"

              />
            </Link>

            {/* Description */}
            <p className="text-neutral-600 text-lg leading-relaxed max-w-xs">
              Building practical systems that work in the real world.
            </p>

            {/* Social Icons */}
            <div className="flex gap-6 items-center">
              <a href="#" aria-label="Facebook" className="text-neutral-600 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" aria-label="X (Twitter)" className="text-neutral-600 hover:text-primary transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2H21l-6.56 7.5L22.5 22h-6.64l-5.2-6.8L4.5 22H1.75l7.02-8.02L1.5 2h6.7l4.7 6.2L18.244 2zm-2.32 18h1.84L7.6 4H5.65l10.274 16z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-neutral-600 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/livelihood-system" target="blank" aria-label="LinkedIn" className="text-neutral-600 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.807 0-9.728h3.554v1.375c.427-.659 1.191-1.592 2.897-1.592 2.117 0 3.704 1.385 3.704 4.362v5.583zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.704 1.957-1.704 1.188 0 1.915.753 1.94 1.704 0 .946-.752 1.704-1.982 1.704zm1.582 11.597H3.635V9.124h3.284v11.328zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@LHS-LivelihoodSystem" aria-label="YouTube" target="blank" className="text-neutral-600 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* RESOURCES COLUMN */}
          <div className="flex flex-col gap-10">
            <h3 className="text-xl font-bold text-neutral-800">Resources</h3>
            <nav className="flex flex-col gap-5 text-neutral-600">
              <Link href="/resources/blogs" className="hover:text-primary transition-colors text-lg">
                Blogs
              </Link>
              <Link href="/resources/case-studies" className="hover:text-primary transition-colors text-lg">
                Case studies
              </Link>
              <Link href="/resources/videos" className="hover:text-primary transition-colors text-lg">
                Videos
              </Link>
            </nav>
          </div>

          {/* COMPANY COLUMN */}
          <div className="flex flex-col gap-10">
            <h3 className="text-xl font-bold text-neutral-800">Company</h3>
            <nav className="flex flex-col gap-5 text-neutral-600">
              <a href="/technology" className="hover:text-primary transition-colors text-lg">
                Technology
              </a>
              <a href="/delivery-framework" className="hover:text-primary transition-colors text-lg">
                Delivery Framework
              </a>
              <Link href="/career" className="hover:text-primary transition-colors text-lg">
                Careers
              </Link>
            </nav>
          </div>

          {/* PRODUCTS COLUMN */}
          {/* <div className="flex flex-col gap-10">
            <h3 className="text-xl font-bold text-neutral-800">Products</h3>
            <nav className="flex flex-col gap-5 text-neutral-600">
              <a href="#" className="hover:text-primary transition-colors text-lg">
                Products 1
              </a>
              <a href="#" className="hover:text-primary transition-colors text-lg">
                Products 2
              </a>
              <a href="#" className="hover:text-primary transition-colors text-lg">
                Products 3
              </a>
            </nav>
          </div> */}

          {/* CONTACTS COLUMN */}
          <div className="flex flex-col gap-10">
            <h3 className="text-xl font-bold text-neutral-800">Contact us</h3>
            <div className="flex flex-col gap-5">
              {/* Email */}
              <div className="flex gap-3 items-start text-neutral-600">
                <svg className="w-5 h-5 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:admin@lhsindia.com" className="hover:text-primary transition-colors text-lg leading-relaxed">
                  admin@lhsindia.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex gap-3 items-start text-neutral-600">
                <svg className="w-5 h-5 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+414687-5892" className="hover:text-primary transition-colors text-lg leading-relaxed">
                  (414) 687 - 5892
                </a>
              </div>

              {/* Address */}
              <div className="flex gap-3 items-start text-neutral-600">
                <svg className="w-5 h-5 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-lg leading-relaxed">
                  NO-12, Ranapratap Path, Behind ICICI Bank, Kadma, Jamshedpur, Jharkhand, 831005
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER DIVIDER */}
        <div className="border-t border-neutral-300 my-8"></div>

        {/* FOOTER BOTTOM */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-neutral-600 text-lg">
          <p>Copyright © 2026 Livelihood System</p>
          <div className="flex gap-2 flex-wrap">
            <span>All Rights Reserved |</span>
            <Link href="#" className="text-primary hover:underline">
              Terms and Conditions
            </Link>
            <span>|</span>
            <Link href="#" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        :root {
          --primary: #00c2a8;
          --neutral-600: #6f6c90;
          --neutral-800: #170f49;
          --neutral-300: #eff0f6;
        }

        .text-primary {
          color: var(--color-primary-1, #00c2a8);
        }

        .text-neutral-600 {
          color: var(--color-neutral-600, #6f6c90);
        }

        .text-neutral-800 {
          color: var(--color-neutral-800, #170f49);
        }

        .border-neutral-300 {
          border-color: var(--color-neutral-300, #eff0f6);
        }

        .font-afacad {
          font-family: "Afacad", sans-serif;
          letter-spacing: 0.28px;
        }

        .hover\:text-primary:hover {
          color: var(--color-primary-1, #00c2a8);
        }
      `}</style>
    </footer>
  );
}