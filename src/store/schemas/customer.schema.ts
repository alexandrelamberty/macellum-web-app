import { z } from "zod";

export const customerSchema = z.object({
  id: z.string(),
  name: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export type Customer = z.infer<typeof customerSchema>;
