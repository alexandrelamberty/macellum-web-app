import { z } from "zod";

export const calendarEventSchema = z.object({
    id: z.string(),
    calendar: z.string(),
    title: z.string(),
    label: z.string(),
    date: z.string(),
});

export type CalendarEvent = z.infer<typeof calendarEventSchema>;
