"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";
import clsx from "clsx";
import "@/app/styles/components/dropdown.css";

type NavItem =
  | { name: string; href: string }
  | { name: string; type: "dropdown" };

const nav: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Industries we serve", href: "/industries" },
  { name: "Resources", type: "dropdown" }, // ✅ clean integration
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

          {/* LOGO */}
          <Link href="/" className="nav-logo flex items-center">
            <Image
              src="/logo.png"
              alt="LHS Logo"
              width={80}
              height={40}
              priority
              className="h-7 sm:h-12 md:h-14 lg:h-14 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => {

              // ✅ HANDLE DROPDOWN FIRST
              if ("type" in item && item.type === "dropdown") {
                return (
                  <div
                    key="resources"
                    className="relative"
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className={clsx(
                        "nav-link flex items-center gap-1",
                        (pathname?.includes("/resources") || isResourcesOpen) &&
                        "nav-link-active"
                      )}
                    >
                      Resources
                    </Button>

                    <div
                      className={clsx(
                        "dropdown-menu",
                        isResourcesOpen && "dropdown-open"
                      )}
                    >
                      {resourcesDropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className={clsx(
                            "dropdown-item",
                            pathname === sub.href && "dropdown-item-active"
                          )}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              // ✅ NOW TYPESCRIPT KNOWS: item HAS href
              if (!("href" in item)) return null;
              const isActive =
                "href" in item && pathname === item.href;

              return (
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
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm" href="http://103.61.225.80/LHSWebPortal/login">
              Log In
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <Button
            variant="ghost"
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

        {/* MOBILE NAV */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-[80px] left-0 right-0 mx-4 bg-[var(--color-bg-card)] rounded-2xl shadow-lg p-6 space-y-4 z-50">

            {nav
            .filter((item): item is { name: string; href: string } => !("type" in item))
              .map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-body-md text-neutral-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

            {/* RESOURCES */}
            <div className="pt-2 border-t border-[var(--color-border)]">
              <p className="text-heading-sm text-neutral-500 mb-2">
                Resources
              </p>

              {resourcesDropdown.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-body-md text-neutral-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-[var(--color-border)]">
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