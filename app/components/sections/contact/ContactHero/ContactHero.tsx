"use client";

import Button from "../../../ui/Button";
import Input from "../../../ui/Input"; // Imporing the reusable Input
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContact } from "@/lib/api/contact";

// ✅ Schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.email({ message: "Invalid email" }),
  subject: z.string().min(2, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message is too short" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactInfoCardProps {
  title: string;
  description: string;
}

function ContactInfoCard({ title, description }: ContactInfoCardProps) {
  return (
    <div className="flex flex-col gap-3 w-full max-w-xs">
      <h3 className=" leading-[35px]">{title}</h3>
      <h5 className="text-neutral-600 leading-7 max-w-md">
        {description}</h5>
    </div>
  );
}

export default function ContactHero() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await submitContact(data);

      reset();

      alert("Message sent successfully!");
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="w-full pb-20 py-44 px-6  relative bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">

      {/* ================= BACKGROUND GLOWS ================= */}
      {/* Bottom Left Glow (behind Reach out / Needs assistance) */}
      <div
        className="absolute bottom-[10%] -left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-[var(--color-primary-1)] blur-[100px] md:blur-[140px] opacity-20 pointer-events-none z-0"
      />

      {/* Right Glow (behind the form card) */}
      <div
        className="absolute top-[30%] -right-[15%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-[var(--color-primary-1)] blur-[100px] md:blur-[160px] opacity-[0.15] pointer-events-none z-0"
      />
      {/* ================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-primary  font-bold-token leading-[46px]">Contact US</h2>
              <h5 className="text-neutral-600 leading-7 max-w-md">
                We&apos;d love to hear from you. Whether you have a question, need support, or want to discuss a project, feel free to reach out to us anytime.
              </h5>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <p className=" leading-7">admin@lhsindia.com</p>
              </div>
              {/* <div className="flex gap-3 items-start">
                <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="  leading-7">9098789045</p>
              </div> */}
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <ContactInfoCard
                title="Reach out"
                description="We&apos;re here to connect. Reach out to us for inquiries, collaborations, or support — and we&apos;ll respond promptly."
              />
              <ContactInfoCard
                title="Needs assistance"
                description="Have questions or need assistance? Our team is ready to help you with the right solutions."
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-white rounded-3xl border border-neutral-300 p-8 shadow-sm h-fit sticky top-20">
            <div className="mb-8">
              <h2 className="text-primary  font-bold-token leading-[35px] mb-2">Get in touch here</h2>
              <p className="text-neutral-600  leading-7">You can reach us any time</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              {/* Name */}
              <Input
                label="Name"
                type="text"
                placeholder="John Carter"
                error={errors.name?.message as string}
                {...register("name")}
              />

              {/* Email */}
              <Input
                label="Email"
                type="email"
                placeholder="john@example.com"
                error={errors.email?.message as string}
                {...register("email")}
              />

              {/* Subject */}
              <Input
                label="Subject"
                type="text"
                placeholder="How can we help you?"
                error={errors.subject?.message as string}
                {...register("subject")}
              />

              {/* Message */}
              <Input
                label="Message"
                textarea
                rows={3}
                placeholder="Tell us about your project..."
                error={errors.message?.message as string}
                {...register("message")}
              />

              {/* Button */}
              <Button
                type="submit"
                variant="primary" // Assuming your Button component has a variant prop
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-full transition-colors text-lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}