'use client';

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: string;
}

function TestimonialCard({ name, title, quote, image }: Testimonial) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-neutral-300 shadow-sm hover:shadow-md transition">
      {/* Quote and Content */}
      <div className="p-6 h-full flex flex-col">
        <p
          className="font-bold text-base mb-4 leading-relaxed"
          style={{ color: "var(--color-text-title)" }}
        >
          &quot;{quote}&quot;
        </p>

        {/* Author Info */}
        <div className="mt-auto flex items-center gap-3 pt-6 border-t border-neutral-300">
          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <p
              className="font-bold text-sm"
              style={{ color: "var(--color-primary-1)" }}
            >
              {name}
            </p>
            <p
              className="text-xs"
              style={{ color: "var(--color-text-subtitle)" }}
            >
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesTestimonials() {
const testimonials: Testimonial[] = [
  {
    name: 'Sanjay B',
    title: 'CTO, CloudTech Solutions',
    quote: 'I found the perfect developer in hours, and the turnaround was fast and exceeded expectations!',
    image: '/Janakai_Ramana.png',
  },
  {
    name: 'Arjun Mehta',
    title: 'CEO, TechSolutions',
    quote: 'We scaled quickly with exceptional talent and seamless, top-notch work!',
    image: '/Janakai_Ramana.png',
  },
  {
    name: 'Rohit Sharma',
    title: 'Founder, Software Technologies',
    quote: 'Finding the perfect graphic designer was effortless, and the results were on-point!',
    image: '/Janakai_Ramana.png',
  },
  {
    name: 'Vikram Singh',
    title: 'Founder, InnovateCo',
    quote: 'I connected with talented developers who delivered faster than expected!',
    image: '/Janakai_Ramana.png',
  },
  {
    name: 'Priya Nair',
    title: 'Head of Operations, NexGen Startups',
    quote: 'The platform made finding talented professionals easy, and the results were fantastic!',
    image: '/Janakai_Ramana.png',
  },
  {
    name: 'Rahul Verma',
    title: 'CEO, Innovations Inc',
    quote: 'I got cost-effective, high-quality design work that fit my vision perfectly!',
    image: '/Janakai_Ramana.png',
  },
];

  const row1 = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
  const row2 = [...testimonials.slice(3, 6), ...testimonials.slice(3, 6)];

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "var(--color-text-title)" }}
          >
            What Our Happy User Says
          </h2>
        </div>

        {/* Testimonials Layout */}
        <div className="space-y-6 overflow-hidden pause-on-hover">

          {/* ROW 1 → RIGHT */}
          <div className="overflow-hidden">
            <div className="flex gap-6 w-max scroll-right">
              {row1.map((t, i) => (
                <div key={i} className="w-[320px] shrink-0">
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2 → LEFT */}
          <div className="overflow-hidden">
            <div className="flex gap-6 w-max scroll-left">
              {row2.map((t, i) => (
                <div key={i} className="w-[320px] shrink-0">
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
