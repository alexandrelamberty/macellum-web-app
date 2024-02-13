import { z } from "zod";

export const calendarSchema = z.object({
  id: z.string(),
  title: z.string(),
  label: z.string(),
  events: z.array(z.string()).optional(),
});

export type Calendar = z.infer<typeof calendarSchema>;
