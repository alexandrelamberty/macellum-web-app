import { z } from "zod";

export const settingsSchema = z.object({
    id: z.string(),
    theme: z.string(),
    lang: z.string(),
});

export const updateSettingsSchema = z.object({
    theme: z.string().optional(),
    lang: z.string().optional(),
});

export type Settings = z.infer<typeof settingsSchema>;
export type UpdateSettings = z.infer<typeof updateSettingsSchema>;
