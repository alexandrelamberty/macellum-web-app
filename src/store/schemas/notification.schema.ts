import { z } from "zod";

export const notificationSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
});

export type Notification = z.infer<typeof notificationSchema>;
