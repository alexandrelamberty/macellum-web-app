import { z } from "zod";

export const productStockSchema = z.object({
  min: z.string(),
  max: z.string(),
  current: z.string(),
  stock: z.number(),
  store: z.string(),
});

export const productSchema = z.object({
  id: z.string(),
  code: z.string(),
  name: z.string(),
  brand: z.string(),
  price_ivat: z.number(),
  price_evat: z.number(),
  discount_percent: z.number(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
  providers: z.array(z.string()),
  //   stock: productStockSchema,
});

export type Product = z.infer<typeof productSchema>;
