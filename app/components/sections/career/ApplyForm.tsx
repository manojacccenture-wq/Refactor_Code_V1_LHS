"use client";

import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applySchema } from "@/lib/validations/apply";
import { submitApplication } from "@/lib/api/apply";
import { z } from "zod";

interface ApplyFormProps {
  jobTitle?: string;
}

type ApplyFormData = z.infer<typeof applySchema>;

export default function ApplyForm({ jobTitle = "Position" }: ApplyFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ApplyFormData>({
    resolver: zodResolver(applySchema),
  });

  const onSubmit = async (data: ApplyFormData) => {
    try {
      await submitApplication(data);

      reset(); // ✅ Reset form

      alert("Application submitted successfully!");
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 w-full">
      <h2 className="text-neutral-800 font-bold mb-2">Apply Here</h2>
      <p className="text-neutral-600 mb-8">
        Discover top remote tech opportunities and land your next role with ease, through our streamlined process.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-neutral-700 text-sm font-medium">Name</label>
          <input
            type="text"
            placeholder="John Carter"
            {...register("name")}
            className="border border-neutral-300 rounded-lg px-4 py-3 text-base placeholder-neutral-500 focus:outline-none focus:border-primary"
          />
          {errors.name?.message && (
            <p className="text-red-500 text-xs">
              {String(errors.name.message)}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-neutral-700 text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="John Carter"
            {...register("email")}
            className="border border-neutral-300 rounded-lg px-4 py-3 text-base placeholder-neutral-500 focus:outline-none focus:border-primary"
          />
          {errors.email?.message && (
            <p className="text-red-500 text-xs">
              {String(errors.email.message)}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <label className="text-neutral-700 text-sm font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="John Carter"
            {...register("phone")}
            className="border border-neutral-300 rounded-lg px-4 py-3 text-base placeholder-neutral-500 focus:outline-none focus:border-primary"
          />
          {errors.phone?.message && (
            <p className="text-red-500 text-xs">
              {String(errors.phone.message)}
            </p>
          )}
        </div>

        {/* Upload Resume */}
        <div className="flex flex-col gap-2">
          <label className="text-neutral-700 text-sm font-medium">
            Upload your resume
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => {
              const file = e.target.files?.[0];
              setValue("resume", file);
            }}
            className="border border-neutral-300 rounded-lg px-4 py-3 text-base file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white cursor-pointer"
          />
          {errors.resume?.message && (
            <p className="text-red-500 text-xs">
              {String(errors.resume.message)}
            </p>
          )}
          <span className="text-neutral-500 text-xs">No file chosen</span>
        </div>

        {/* Cover Letter */}
        <div className="flex flex-col gap-2">
          <label className="text-neutral-700 text-sm font-medium">
            Cover Letter
          </label>
          <textarea
            placeholder="Enter your message"
            rows={5}
            {...register("coverLetter")}
            className="border border-neutral-300 rounded-lg px-4 py-3 text-base placeholder-neutral-500 focus:outline-none focus:border-primary resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="w-full bg-primary text-white px-6 py-4 rounded-full font-medium text-base hover:opacity-90 transition-opacity"
          >
            {isSubmitting ? "Submitting..." : "Apply now"}
          </Button>
        </div>
      </form>
    </div>
  );
}