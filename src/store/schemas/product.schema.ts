import { z } from "zod";

// const zodEnum = <T>(arr: T[]): [T, ...T[]] => arr as [T, ...T[]];

// type ProductWeightUnit = "g" | "kg" | "lb" | "ml" | "l";
// const productWightUnitTypes = ["g", "kg", "lb", "ml", "l"] satisfies ProductWeightUnit[];

// type ProductType = "" | "food" | "nonfood";
// const productTypes = ["", "food", "nonfood"] satisfies ProductType[];

const Weight = z.object({
    quantity: z.number().positive(),
    unit: z.string(),
});

export const productSchema = z.object({
    id: z.string(),
    code: z.string(),
    name: z.string(),
    brand: z.string().optional(),
    price: z.object({
        ivat: z.number(),
        evat: z.number(),
        currency: z.string(),
    }),
    weight: Weight,
    providers: z.array(z.string()),
    stock: z.object({
        shelf: z.number(),
        quantity: z.number(),
        in_stock: z.boolean(),
    }),
    store: z.object({
        shelf: z.number(),
        quantity: z.number(),
        in_store: z.boolean(),
    }),
    category: z.string(),
    product_type: z.string(),
    //   priority: z.string(),
    //   image: z.string(),
});

export type Product = z.infer<typeof productSchema>;
export type ProductForm = z.infer<typeof productSchema>;
