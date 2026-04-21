"use client";

export default function HeroWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="hero-bg w-full flex justify-center">

      {/* Gradient */}
      <div className="hero-gradient" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl text-center pt-24 md:pt-32">
        {children}
      </div>

    </section>
  );
}