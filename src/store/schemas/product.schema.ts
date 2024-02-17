import { z } from "zod";

const Weight = z.object({
  quantity: z.number().positive(),
  unit: z.enum(["g", "kg", "lb", "ml", "l"]),
});

export const productSchema = z.object({
  id: z.string(),
  code: z.string(),
  name: z.string(),
  brand: z.string(),
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
  //   type: z.enum(["food", "non_food"]),
  //   priority: z.string(),
  //   image: z.string(),
});

export type Product = z.infer<typeof productSchema>;
