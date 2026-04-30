"use client";

import { Testimonial } from "../../services/ServicesTestimonials/components/ServicesTestimonials.types";
import { TestimonialCard } from "../../services/ServicesTestimonials/components/TestimonialCard";



const testimonials: Testimonial[] = [

  {
    // id: "testimonial2",
    name: "Sakthi Narayanan K",
    title: "UI/UX Designer",
    titleContent: "Speedy Developer Turnaround",
    quote: "I found the perfect developer in hours, and the turnaround was fast and exceeded expectations!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    // id: "testimonial3",
    name: "Manoj kumar",
    title: "Full stack developer",
    titleContent: "Scaling with Top Talent",
    quote: "We scaled quickly with exceptional talent and seamless, top-notch work!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    // id: "testimonial4",
    name: "Raj kachapp",
    title: "Senior-lead",
    titleContent: "Effortless Design Solutions",
    quote: "Finding the perfect graphic designer was effortless, and the results were on-point!",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    // id: "testimonial5",
    name: "Jankiraman",
    title: "Founder",
    titleContent: "Exceeded Expectations",
    quote: "I connected with talented developers who delivered faster than expected!",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

export default function CareerTestimonials() {
  // Duplicating the array multiple times so the infinite scroll doesn't run out of screen space
  const row1 = [...testimonials, ...testimonials, ...testimonials];
  // const row2 = [...testimonials.slice().reverse(), ...testimonials.slice().reverse(), ...testimonials.slice().reverse()];

  return (
    <section className="  px-4 md:px-6">
      <div className="mx-auto max-w-[100vw]">

        {/* RESPONSIVE MASK (copied exactly from your previous component) */}
        <div className="space-y-4 md:space-y-6 overflow-hidden pause-on-hover py-4 md:py-8 
          [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] 
          [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] 
          md:[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] 
          md:[-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
        >

          {/* ROW 1 → RIGHT */}
          <div className="overflow-hidden">
            <div className="flex gap-4 md:gap-6 w-max scroll-left">
              {row1.map((t, i) => (
                // Adjusted card width: 280px on mobile, 320px on desktop
                <div key={i} className="w-[280px] md:w-[320px] shrink-0">
                  <TestimonialCard {...t} />
                </div>
              ))}


            </div>
          </div>

        </div>
      </div>
    </section>
  );
}