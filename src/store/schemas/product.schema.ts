import { z } from "zod";

import { providerSchema } from "./provider.schema";

// const zodEnum = <T>(arr: T[]): [T, ...T[]] => arr as [T, ...T[]];

// type ProductWeightUnit = "g" | "kg" | "lb" | "ml" | "l";
// const productWightUnitTypes = ["g", "kg", "lb", "ml", "l"] satisfies ProductWeightUnit[];

// type ProductType = "" | "food" | "nonfood";
// const productTypes = ["", "food", "nonfood"] satisfies ProductType[];

const Weight = z.object({
    // value: z.number().positive(),
    value: z.string(),
    unit: z.string(),
});

export const productSchema = z.object({
    id: z.string(),
    code: z.string(),
    name: z.string(),
    brand: z.string().optional(),
    price: z.object({
        include_vat: z.string(),
        exclude_vat: z.string(),
        currency: z.string(),
    }),
    weight: Weight,
    providers: z.array(providerSchema),
    product_type: z.string(),
    // category: z.object({
		// 		id: z.number(),
		// 		created_at: z.string(),
		// 		updated_at: z.string(),
    //     name: z.string(),
    // }),
    // FIXME:
    category: z.string(),
    stock: z.object({
        shelf: z.string(),
        quantity: z.string(),
        // FIXME:
        // quantity_preference: z.number(),
        // in_stock: z.boolean(),
        in_store: z.boolean(),
    }),
    store: z.object({
        shelf: z.string(),
        quantity: z.string(),
        // FIXME:
        // quantity_preference: z.number(),
        in_stock: z.boolean(),
    }),
    //   priority: z.string(),
    //   image: z.string(),
});

export type Product = z.infer<typeof productSchema>;
export type ProductForm = z.infer<typeof productSchema>;
