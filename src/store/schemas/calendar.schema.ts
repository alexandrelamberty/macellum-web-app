import { z } from "zod";
import { calendarEventSchema } from "./calendar-event.schema";

export const calendarSchema = z.object({
    id: z.string(),
    name: z.string(),
    color: z.string(),
    events: z.array(calendarEventSchema).optional(),
});

export type Calendar = z.infer<typeof calendarSchema>;
