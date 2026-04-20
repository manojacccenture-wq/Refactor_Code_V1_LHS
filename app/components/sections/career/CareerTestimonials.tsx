"use client";

interface Testimonial {
  id: string;
  header: string;
  quote: string;
  role: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    id: "testimonial1",
    header:`Speedy Developer Turnaround` ,
    quote: "I found the perfect developer in hours, and the turnaround was fast and exceeded expectations!",
    role: "UI/UX Designer",
    name: "Sakthi Narayanan K",
  },
  {
    id: "testimonial2",
    header: "Scaling with Top Talent",
    quote: "We scaled quickly with exceptional talent and seamless, top-notch work!",
    role: "Full stack developer",
    name: "Manoj kumar",
  },
  {
    id: "testimonial3",
    header: "Effortless Design Solutions",
    quote: "Finding the perfect graphic designer was effortless, and the results were on-point!",
    role: "Senior-lead",
    name: "Raj kachapp",
  },
  {
    id: "testimonial4",
    header: "Speedy Developer Turnaround",
    quote: "I connected with talented developers who delivered faster than expected!",
    role: "Founder, InnovateCo",
    name: "Mike Warren",
  },
];

export default function CareerTestimonials() {
  return (
    <section className="py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-neutral-300 rounded-2xl shadow-sm p-6 flex flex-col justify-between h-80"
            >
              {/* Quote Preview */}
              <h4 className="text-neutral-800 font-bold text-base line-clamp-2 mb-4">
                "{testimonial.header}"
              </h4>

              {/* Full Quote */}
              <p className="text-neutral-600 text-base font-normal mb-6 line-clamp-3">
                {testimonial.quote}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-2">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-blue-400 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-neutral-600 text-sm font-normal truncate">
                    {testimonial.role}
                  </p>
                  <p className="text-primary text-sm font-bold truncate">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
