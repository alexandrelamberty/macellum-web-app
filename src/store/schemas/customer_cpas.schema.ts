import { z } from "zod";

export const customerSchemaCPAS = z.object({
    id: z.number(),
    nationality: z.string(),
    gender: z.string(),
    national_number: z.string(),
    notes: z.string(),
    // active | inactive | transit
    status: z.string(),
    label: z.string(),
    priority: z.string(),
    // Validity
    validity: z.object({
        date: z.string(),
        updated: z.string(),
        control: z.number(),
        state: z.string(),
        assistant: z.string(),
    }),
    // Family
    //   family: z.array(customerFamilySchema),
});

// const customerFamilySchema = z.object({
//   id: z.string(),
//   person: z.object(customerSchemaCPAS),
//   relation: z.enum(["Husband", "Wife", "Son", "Daughter"]),
// });

export type CustomerCPAS = z.infer<typeof customerSchemaCPAS>;
