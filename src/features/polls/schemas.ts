import { z } from "zod";

export const pollOptionSchema = z.object({
  text: z
    .string()
    .trim()
    .min(1, "Option text is required"),
});

export const createPollSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title is required"),

  description: z
    .string()
    .trim()
    .optional(),

  options: z
    .array(pollOptionSchema)
    .min(2, "At least 2 options are required")
    .max(6, "Maximum 6 options allowed"),
});

export type CreatePollInput = z.infer<typeof createPollSchema>;