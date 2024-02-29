import { z } from "zod";

export const customerSchema = z.object({
    id: z.string(),
    code: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    birthdate: z.string(),
    address: z.object({
        street: z.string(),
        number: z.string(),
        postal_code: z.string(),
        city: z.string(),
        country: z.string(),
    }),
    phone: z.string(),
    email: z.string(),
    notes: z.string(),
    // active | inactive
    status: z.string(),
    label: z.string(),
});

export type Customer = z.infer<typeof customerSchema>;
