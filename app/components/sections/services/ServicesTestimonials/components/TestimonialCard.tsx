import { Testimonial } from "@/app/components/sections/services/ServicesTestimonials/components/ServicesTestimonials.types";

export function TestimonialCard({ name, title, titleContent, quote, image }: Testimonial) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition h-full">
      {/* Quote and Content */}
      <div className="p-6 flex flex-col h-full">
        {/* Bold Title */}
        <h6 className="font-bold-token mb-3">
          &quot;{titleContent}&quot;
        </h6>

        {/* Body Text / Quote */}
        <p className="  mb-4 text-black font-regular-token">
          {quote}
        </p>

        {/* Author Info */}
        <div className="mt-auto flex items-center gap-3 pt-6 border-neutral-300">
          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            {/* Added text-primary to match the cyan name color in the design */}
            <p className="font-bold-token text-primary">
              {name}
            </p>
            <p className=" text-black">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}