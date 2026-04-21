import {services} from "@/app/components/sections/home/Services/services.data";
import {ServiceCard} from "@/app/components/sections/home/Services/component/ServiceCard/ServiceCard";




export default function Services() {
  return (
    <section className="max-w-7xl mx-auto py-16 md:py-20 px-4 md:px-6">

      {/* HEADER */}
      <div className="text-center mb-12 md:mb-16">

        {/*  small label */}
        <h5 className="text-heading-sm uppercase tracking-wide text-primary mb-2 md:mb-3">
          — Scaling With
        </h5>

        {/* ✅ section title */}
        <h2 className="text-heading-lg">
          Building the future alongside global pioneers
        </h2>

      </div>

      {/* MOBILE */}
      <div className="mt-10 flex flex-col gap-6 lg:hidden">
        {services.map((item, i) => (
          <ServiceCard key={i} {...item} />
        ))}
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:flex flex-col gap-6 mt-10">

        <div className="grid grid-cols-2 gap-6">
          {services.slice(0, 2).map((item, i) => (
            <ServiceCard key={i} {...item} />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6">
          {services.slice(2, 5).map((item, i) => (
            <ServiceCard key={i} {...item} />
          ))}
        </div>

      </div>

    </section>
  );
}