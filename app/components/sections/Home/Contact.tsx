"use client";

import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContact } from "@/lib/api/contact";
import { contactSchema } from "@/lib/validations/contact";



type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
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
      reset(); // ✅ Reset form
      alert("Message sent successfully!");
    } catch (error) {
      alert("Something went wrong. Please try again."); // ✅ Generic error
    }
  };

  return (
    <section className="max-w-2xl mx-auto py-16 md:py-2 px-4 md:px-6">
      {/* HEADER */}
      <div className="text-center mb-10 md:mb-12">
        <h2
          className="text-2xl md:text-4xl font-bold mb-2 md:mb-4"
          style={{ color: "var(--color-neutral-800)" }}
        >
          Contact Us
        </h2>
        <p
          className="text-base md:text-lg"
          style={{ color: "var(--color-neutral-600)" }}
        >
We’re here to answer your questions and help you find the right solution.
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 md:space-y-6 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-200"
      >
        {/* Name Input */}
        <div>
          <label
            className="block text-xs md:text-sm font-semibold mb-2"
            style={{ color: "var(--color-neutral-800)" }}
          >
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            className="w-full border border-neutral-300 rounded-xl px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-1)] focus:border-transparent transition"
            placeholder="Your name"
            style={{ backgroundColor: "var(--color-neutral-100)" }}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <label
            className="block text-xs md:text-sm font-semibold mb-2"
            style={{ color: "var(--color-neutral-800)" }}
          >
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            className="w-full border border-neutral-300 rounded-xl px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-1)] focus:border-transparent transition"
            placeholder="your@email.com"
            style={{ backgroundColor: "var(--color-neutral-100)" }}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Subject Input */}
        <div>
          <label
            className="block text-xs md:text-sm font-semibold mb-2"
            style={{ color: "var(--color-neutral-800)" }}
          >
            Subject
          </label>
          <input
            {...register("subject")}
            type="text"
            className="w-full border border-neutral-300 rounded-xl px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-1)] focus:border-transparent transition"
            placeholder="What is this about?"
            style={{ backgroundColor: "var(--color-neutral-100)" }}
          />

          {/* ✅ ADD THIS */}
          {errors.subject && (
            <p className="text-red-500 text-xs mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message Textarea */}
        <div>
          <label
            className="block text-xs md:text-sm font-semibold mb-2"
            style={{ color: "var(--color-neutral-800)" }}
          >
            Message
          </label>
          <textarea
            {...register("message")}
            className="w-full border border-neutral-300 rounded-xl px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-1)] focus:border-transparent transition resize-none"
            placeholder="Your message"
            rows={6}
            style={{ backgroundColor: "var(--color-neutral-100)" }}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center md:justify-end pt-2 md:pt-4">
          <Button variant="primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </section>
  );
}