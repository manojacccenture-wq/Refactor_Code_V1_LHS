"use client";

import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input"; // ✅ NEW
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
      reset();
      alert("Message sent successfully!");
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="max-w-2xl mx-auto py-16 md:py-2 px-4 md:px-6">

      {/* ✅ HEADER */}
      <div className="text-center mb-10 md:mb-12">

        {/* FIXED */}
        <h2 className="text-heading-lg mb-2 md:mb-4">
          Contact Us
        </h2>

        {/* FIXED */}
        <p className="text-body-md">
          We’re here to answer your questions and help you find the right solution.
        </p>

      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 md:space-y-6 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-200"
      >

        {/* ✅ NAME */}
        <Input
          label="Name"
          placeholder="Your name"
          {...register("name")}
          error={errors.name?.message}
        />

        {/* ✅ EMAIL */}
        <Input
          label="Email"
          type="email"
          placeholder="your@email.com"
          {...register("email")}
          error={errors.email?.message}
        />

        {/* ✅ SUBJECT */}
        <Input
          label="Subject"
          placeholder="What is this about?"
          {...register("subject")}
          error={errors.subject?.message}
        />

        {/* ✅ MESSAGE */}
        <Input
          label="Message"
          textarea
          rows={6}
          placeholder="Your message"
          {...register("message")}
          error={errors.message?.message}
        />

        {/* BUTTON */}
        <div className="flex justify-center md:justify-end pt-2 md:pt-4">
          <Button variant="primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>

      </form>
    </section>
  );
}