import { z } from "zod";

export const authSchema = z.object({
    id: z.string(),
    name: z.string(),
    token: z.string(),
    label: z.string(),
});

export const authLoginSchema = z.object({
    email: z.string(),
    password: z.string(),
});

export const authRegisterSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    password: z.string(),
    invite_token: z.string(),
});

export type Auth = z.infer<typeof authSchema>;
export type AuthLogin = z.infer<typeof authLoginSchema>;
export type AuthRegister = z.infer<typeof authRegisterSchema>;
