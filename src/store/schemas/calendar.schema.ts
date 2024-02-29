import { z } from "zod";

export const calendarSchema = z.object({
    id: z.string(),
    name: z.string(),
    color: z.string(),
    events: z.array(z.string()).optional(),
});

export type Calendar = z.infer<typeof calendarSchema>;
