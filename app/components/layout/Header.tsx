"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";
import clsx from "clsx";
import "@/app/styles/components/dropdown.css";


const nav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Industries we serve", href: "/industries" },
  { name: "Career", href: "/career" },
  { name: "Contact us", href: "/contact" },
];

const resourcesDropdown = [
  { name: "Case studies", href: "/resources/case-studies" },
  { name: "Blogs", href: "/resources/blogs" },
  { name: "Videos", href: "/resources/videos" },
];

export default function Header() {
  const pathname = usePathname();
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header header-bordered">
      <div className="nav-container">
        <div className="navbar">

          {/* Logo */}
          <Link href="/" className="nav-logo flex items-center">
            <Image
              src="/logo.svg"
              alt="LHS Logo"
              width={80}
              height={40}
              priority
              className="h-12 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => {
              const isActive = pathname === item.href;

              return (
                <React.Fragment key={item.name}>
                  {/* Normal Nav Item */}
                  <Link
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      "nav-link",
                      isActive && "nav-link-active"
                    )}
                  >
                    {item.name}
                  </Link>

                  {/* 👉 Inject Resources AFTER Industries */}
                  {item.name === "Industries we serve" && (
                    <div
                      key="resources"
                      className="relative group"
                    >
                      <button
                        onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                        onMouseEnter={() => setIsResourcesOpen(true)}
                        onMouseLeave={() => setIsResourcesOpen(false)}
                        className={clsx(
                          "nav-link flex items-center gap-1",
                          (pathname?.includes("/resources") || isResourcesOpen) &&
                          "text-primary-1"
                        )}
                      >
                        Resources
                      </button>

                      {/* Dropdown Menu */}
                      <div
                        className={clsx(
                          "dropdown-menu",
                          isResourcesOpen ? "dropdown-open" : ""
                        )}
                        onMouseEnter={() => setIsResourcesOpen(true)}
                        onMouseLeave={() => setIsResourcesOpen(false)}
                      >
                        {resourcesDropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={clsx(
                              "dropdown-item",
                              pathname === item.href && "dropdown-item-active"
                            )}
                            onClick={() => setIsResourcesOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}

          </nav>



          {/* CTA */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
            >
              Log In
            </Button>
          </div>

          <Button
            variant="outline"
            className="md:hidden flex items-center justify-center w-10 h-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-neutral-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </Button>

        </div>

        {/* Mobile Device Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-[80px] left-0 right-0 mx-4 bg-white rounded-2xl shadow-lg p-6 space-y-4 z-50">
            {nav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-neutral-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Resources */}
            <div className="pt-2 border-t">
              <p className="text-sm font-semibold text-neutral-500 mb-2">Resources</p>
              {resourcesDropdown.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-base text-neutral-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="pt-4 border-t">
              <Button
                variant="primary"
                size="sm"
                className="w-full justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}