"use client";

import { useState } from "react";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const applySchema = z.object({
  fullName: z.string().min(2, { message: "Name is required" }),
  email: z.email({ message: "Invalid email" }),
  phone: z.string().min(10, { message: "Invalid phone number" }),
  address: z.string().min(2, { message: "Address is required" }),
  position: z.string().min(1, { message: "Position is required" }),
  coverLetter: z.string().optional(),
});

type ApplyFormData = z.infer<typeof applySchema>;

interface ApplyFormProps {
  jobTitle?: string;
}

export default function ApplyForm({ jobTitle = "Position" }: ApplyFormProps) {
  const [cvFile, setCvFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ApplyFormData>({
    resolver: zodResolver(applySchema),
    defaultValues: {
      position: jobTitle,
    },
  });

  const onSubmit = async (data: ApplyFormData) => {
    if (!cvFile) {
      alert("Please upload your CV/resume.");
      return;
    }

    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;

    if (!BASE_URL) {
      throw new Error("API base URL is not defined");
    }

    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("address", data.address);
    formData.append("position", data.position);
    formData.append("coverLetter", data.coverLetter || "");
    formData.append("cvFile", cvFile);

    try {
      const res = await fetch(`${BASE_URL}/Account/SendApplication`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      reset();
      setCvFile(null);
      alert("Application submitted successfully!");
    } catch {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
<div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 lg:p-10 w-full max-w-5xl">
      <h2 >
        Apply Here
      </h2>
      <p className="mt-[3%] mb-[3%]">
        Discover top remote tech opportunities and land your next role with ease, through our streamlined process.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 md:space-y-6 w-full">
        {/* Name */}
        <Input
          label="Name"
          type="text"
          placeholder="John Carter"
          error={errors.fullName?.message as string}
          {...register("fullName")}
        />

        {/* Email */}
        <Input
          label="Email"
          type="email"
          placeholder="johncarter@email.cm"
          error={errors.email?.message as string}
          {...register("email")}
        />

        {/* Phone Number */}
        <Input
          label="Phone Number"
          type="tel"
          placeholder="+91 9876543210"
          error={errors.phone?.message as string}
          {...register("phone")}
        />

        {/* Address */}
        <Input
          label="Address"
          type="text"
          placeholder="123 Main St, City, Country"
          error={errors.address?.message as string}
          {...register("address")}
        />

        {/* Applying For */}
        <Input
          label="Applying For"
          type="text"
          placeholder="Position"
          error={errors.position?.message as string}
          {...register("position")}
        />

        {/* Upload Resume */}
        <Input
          label="Upload your resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className="file:mr-4 file:py-2 md:file:py-3 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white cursor-pointer"
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            setCvFile(target.files?.[0] ?? null);
          }}
        />

        {/* Cover Letter */}
        <Input
          label="Cover Letter"
          textarea
          rows={5}
          placeholder="Enter your message"
          error={errors.coverLetter?.message as string}
          {...register("coverLetter")}
        />

        {/* Submit Button */}
        <div className="pt-2 md:pt-4">
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="w-full bg-primary text-white px-6 py-3 md:py-4 rounded-full font-medium text-sm md:text-base hover:opacity-90 transition-opacity"
          >
            {isSubmitting ? "Submitting..." : "Apply now"}
          </Button>
        </div>
      </form>
    </div>
  );
}