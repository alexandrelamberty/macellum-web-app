import { AuthUser } from "@eevos/macellum-api-client-typescript";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { StoreThunk } from "@/store";
import { AuthLogin, AuthRegister } from "@/store/schemas/auth.schema";

export const loginUser = createAsyncThunk<AuthUser, AuthLogin, { extra: StoreThunk }>(
    "auth/login",
    async (credentials, thunkAPI) => {
        const response = await thunkAPI.extra.auth.loginUser(credentials);
        return response.data;
    },
);

export const registerUser = createAsyncThunk<AuthUser, AuthRegister, { extra: StoreThunk }>(
    "auth/register",
    async (user, thunkAPI) => {
        const response = await thunkAPI.extra.auth.registerUser(user);
        return response.data;
    },
);
