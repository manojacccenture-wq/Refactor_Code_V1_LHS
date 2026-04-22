"use client";

import Button from "../../ui/Button";
import Input from "../../ui/Input";
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
    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 lg:p-10 w-full max-w-3xl mx-auto transition-all px-2">
      <h2 >
        Apply Here
      </h2>
      <p className="mt-[3%] mb-[3%]">
        Discover top remote tech opportunities and land your next role with ease, through our streamlined process.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 md:space-y-6">
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
          placeholder="John Carter"
          error={errors.email?.message as string}
          {...register("email")}
        />

        {/* Phone Number */}
        <Input
          label="Phone Number"
          type="tel"
          placeholder="John Carter"
          error={errors.phone?.message as string}
          {...register("phone")}
        />

        {/* Upload Resume */}
        <Input
          label="Upload your resume"
          type="file"
          accept=".pdf,.doc,.docx"
          error={errors.resume?.message as string}
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            const file = target.files?.[0];
            setValue("resume", file);
          }}
          className="file:mr-4 file:py-2 md:file:py-3 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white cursor-pointer"
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