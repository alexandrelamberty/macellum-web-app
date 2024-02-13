import { z } from "zod";

export const profileSchema = z.object({
  id: z.string(),
  name: z.string(),
  status: z.string(),
  label: z.string(),
});

export type Profile = z.infer<typeof profileSchema>;
