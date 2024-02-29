import { z } from "zod";

export const analyticsSchema = z.object({
    id: z.string(),
    name: z.string(),
    status: z.string(),
    label: z.string(),
});

export type Analytics = z.infer<typeof analyticsSchema>;
