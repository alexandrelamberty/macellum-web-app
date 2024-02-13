import { z } from "zod";

export const cartSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export type Cart = z.infer<typeof cartSchema>;
