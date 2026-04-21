import { Testimonial } from "@/app/components/sections/services/ServicesTestimonials/components/ServicesTestimonials.types";

export function TestimonialCard({ name, title, quote, image }: Testimonial) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-neutral-300 shadow-sm hover:shadow-md transition">
      {/* Quote and Content */}
      <div className="p-6 h-full flex flex-col">
        <h6
        className="font-bold-token "
        >
          &quot;{quote}&quot;
        </h6>

        {/* Author Info */}
        <div className="mt-auto flex items-center gap-3 pt-6 border-t border-neutral-300">
          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h6 
              className="text-primary "
              // style={{ color: "var(--color-primary-1)" }}
            >
              {name}
            </h6>
            <p
              // className="text-xs"
              // style={{ color: "var(--color-text-subtitle)" }}
            >
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}