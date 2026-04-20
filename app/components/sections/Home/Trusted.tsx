import Image from "next/image";

const logos = [
  { src: "/krpl.png", name: "TICL" },
  { src: "/js.png", name: "Google" },
  { src: "/tatasteellogo.png", name: "Amazon" },

  { src: "/krpl.png", name: "TICL" },
  { src: "/js.png", name: "Google" },
  { src: "/tatasteellogo.png", name: "Amazon" },

  { src: "/krpl.png", name: "TICL" },
  { src: "/js.png", name: "Google" },
  { src: "/tatasteellogo.png", name: "Amazon" },

];

export default function Trusted() {
  return (
    <section className="text-center py-12 md:py-20 overflow-hidden">
      {/* HEADER */}
      <div className="mb-8 md:mb-12">
        <h3
          className="text-xs md:text-lg font-bold uppercase tracking-wider mb-2 md:mb-3 text-primary"

        >
          — Trusted By
        </h3>
        <h2
          className="text-2xl md:text-4xl font-bold"
        >
          Don&apos;t take our word for it
        </h2>
      </div>

      {/* MARQUEE WRAPPER */}
      <div className="relative mt-12 pause-on-hover">
        {/* LEFT BLUR */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />

        {/* RIGHT BLUR */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />


        {/* TRACK */}
        <div className="relative mt-12 pause-on-hover">
          <div className="flex w-max scroll-left gap-12 opacity-100 py-6">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 flex items-center h-16">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={160}
                  height={64}
                  className="
            h-12 md:h-13 lg:h-13 w-auto
            opacity-40 grayscale
            hover:opacity-100 hover:grayscale-0 hover:scale-105
            transition-all duration-700 ease-in-out
          "
          // style={{width:"auto",height:"auto"}}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}