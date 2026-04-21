"use client";



export default function HeroWrapper({ children }: { children: React.ReactNode }) {
 return (
    <section className="hero-bg w-full min-h-[600px] flex items-center justify-center">

      {/* 🔥 GRADIENT LAYER (IMPORTANT) */}
      <div className="hero-gradient" />


      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-7xl px-6 text-center">
        {children}
      </div>

    </section>
  );
}