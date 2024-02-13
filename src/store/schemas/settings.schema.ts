import { z } from "zod";

export const settingsSchema = z.object({
  id: z.string(),
  theme: z.string(),
  status: z.string(),
  label: z.string(),
});

export type Settings = z.infer<typeof settingsSchema>;
