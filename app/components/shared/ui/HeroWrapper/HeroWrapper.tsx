"use client";

export default function HeroWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="hero-bg w-full flex justify-center">

      <div className="hero-gradient" />

      {/* 🔥 ADD THIS */}
      <div className="hero-fade" />

<div className="relative z-10 w-full max-w-7xl  text-center pt-[var(--hero-offset)] pb-16 md:pb-24">
  {children}
</div>

    </section>
  );
}