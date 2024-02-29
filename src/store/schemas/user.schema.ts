import { z } from "zod";

export const userSchema = z.object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    birthdate: z.string(),
    phone: z.string(),
    notes: z.string(),
    // active | inactive
    status: z.string(),
    label: z.string(),
    priority: z.string(),
});

export type User = z.infer<typeof userSchema>;
