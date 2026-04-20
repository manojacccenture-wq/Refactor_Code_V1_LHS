import { z } from "zod";

export const applySchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.email({ message: "Invalid email" }),
  phone: z.string().min(10, { message: "Invalid phone number" }),
  coverLetter: z.string().optional(),
  resume: z.any().refine((file) => file instanceof File, {
    message: "Resume is required",
  }),
});

export type ApplyFormData = z.infer<typeof applySchema>;