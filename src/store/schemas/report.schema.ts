import { z } from "zod";

export const reportSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
});

export type Report = z.infer<typeof reportSchema>;
