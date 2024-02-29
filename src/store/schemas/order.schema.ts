import { z } from "zod";

export const orderSchema = z.object({
    id: z.string(),
    title: z.string(),
    label: z.string(),
    date: z.string(),
    status: z.string(),
    priority: z.string(),
});

export type Order = z.infer<typeof orderSchema>;
