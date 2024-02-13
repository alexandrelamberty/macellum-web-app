import { z } from "zod";

export const dashboardSchema = z.object({
  total_revenue: z.object({
    value: z.number(),
    currency: z.string(),
    evolution: z.string(),
  }),
  subscriptions: z.object({
    value: z.number(),
    evolution: z.string(),
  }),
  sales: z.object({
    value: z.number(),
    evolution: z.string(),
  }),
  actives: z.object({
    value: z.number(),
    evolution: z.string(),
  }),
  recent_sales: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      status: z.string(),
      label: z.string(),
      price: z.number(),
      date: z.string(),
    }),
  ),
  status: z.string(),
  label: z.string(),
});

export type Dashboard = z.infer<typeof dashboardSchema>;
