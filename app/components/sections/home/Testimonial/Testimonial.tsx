import Image from "next/image";

type Props = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

function TestimonialCard({
  name,
  role,
  image,
  quote,
}: Props) {
  return (
    <div
      className="
        card
        bg-primary-soft-gradient
        relative
        p-8 md:p-36
        rounded-[32px]

      "
    // style={{
    //   background:
    //     "linear-gradient(135deg, rgba(0,194,168,0.08), rgba(0,194,168,0.02))",
    // }}
    >
      {/* TOP PROFILE */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className="object-cover w-auto h-10"
          />
        </div>

        <div className="text-left">
          {/* ✅ NAME */}
          <h6 className="text-heading-sm text-neutral-800">
            {name}
          </h6>

          {/* ✅ ROLE */}
          <p className="text-body-sm text-neutral-500">
            {role}
          </p>
        </div>
      </div>

      {/* QUOTE ICON */}
      <div className="absolute right-10 top-10 text-[120px] text-neutral-200 opacity-40 pointer-events-none">
        “
      </div>

      {/* ✅ QUOTE */}
      <h3 className="text-quote text-neutral-500">
        {quote}
      </h3>
    </div>
  );
}

export default function Testimonial() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20">
      <TestimonialCard
        name="Jankiraman"
        role="Managing Director at Livelihood System"
        image="/Janakai_Ramana.png"
        quote={`"Technology is easy. Making it work consistently on the field is the real problem we solve."`}
      />
    </section>
  );
}