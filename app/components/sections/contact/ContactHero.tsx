"use client";

import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContact } from "@/lib/api/contact";

// ✅ Schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.email({ message: "Invalid email" }),
  phone: z.string().min(10, { message: "Invalid phone number" }),
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
      <h3 className="text-black font-bold text-2xl leading-[35px]">{title}</h3>
      <p className="text-neutral-600 text-base leading-[28.916px]">{description}</p>
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
    <section className="w-full pb-20 px-6 relative bg-gradient-to-b from-primary/5 to-transparent pt-[var(--hero-offset)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h1 className="text-primary text-4xl font-bold leading-[46px]">Contact US</h1>
              <p className="text-neutral-600 text-lg leading-7 max-w-md">
                We'd love to hear from you. Whether you have a question, need support, or want to discuss a project, feel free to reach out to us anytime.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-neutral-600 text-lg leading-7">LHS@india.com</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-neutral-600 text-lg leading-7">9098789045</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <ContactInfoCard
                title="Reach out"
                description="We're here to connect. Reach out to us for inquiries, collaborations, or support — and we'll respond promptly."
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
              <h2 className="text-primary text-2xl font-bold leading-[35px] mb-2">Get in touch here</h2>
              <p className="text-neutral-600 text-lg leading-7">You can reach us any time</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Name */}
              <div className="flex flex-col gap-3">
                <label className="text-neutral-800 text-sm font-normal">Name</label>
                <input
                  type="text"
                  placeholder="John Carter"
                  {...register("name")}
                  className="border border-neutral-300 rounded-2xl px-4 py-3 text-base placeholder-neutral-500 focus:outline-none focus:border-primary transition-colors"
                />
                {errors.name?.message && (
                  <p className="text-red-500 text-xs">{String(errors.name.message)}</p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-3">
                <label className="text-neutral-800 text-sm font-normal">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  {...register("email")}
                  className="border border-neutral-300 rounded-2xl px-4 py-3 text-base placeholder-neutral-500 focus:outline-none focus:border-primary transition-colors"
                />
                {errors.email?.message && (
                  <p className="text-red-500 text-xs">{String(errors.email.message)}</p>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-3">
                <label className="text-neutral-800 text-sm font-normal">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  {...register("phone")}
                  className="border border-neutral-300 rounded-2xl px-4 py-3 text-base placeholder-neutral-500 focus:outline-none focus:border-primary transition-colors"
                />
                {errors.phone?.message && (
                  <p className="text-red-500 text-xs">{String(errors.phone.message)}</p>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-3">
                <label className="text-neutral-800 text-sm font-normal">Message</label>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={3}
                  {...register("message")}
                  className="border border-neutral-300 rounded-2xl px-4 py-3 text-base placeholder-neutral-500 focus:outline-none focus:border-primary transition-colors resize-none"
                />
                {errors.message?.message && (
                  <p className="text-red-500 text-xs">{String(errors.message.message)}</p>
                )}
              </div>

              {/* Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-full transition-colors text-lg"
              >
                {isSubmitting ? "Sending..." : "Apply Now"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}