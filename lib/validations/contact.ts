import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),

  email: z.email({ message: "Invalid email" }),

  subject: z
    .string()
    .min(3, { message: "Subject is too short" })
    .optional()
    .or(z.literal("")), // allows empty string from input

  message: z.string().min(10, { message: "Message is too short" }),
});

export type ContactFormData = z.infer<typeof contactSchema>;