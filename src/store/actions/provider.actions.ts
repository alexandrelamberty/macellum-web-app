import { CreateProviderRequest, Provider, UpdateProviderRequest } from "@eevos/macellum-api-client-typescript";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { StoreThunk } from "@/store";

export const fetchAllProviders = createAsyncThunk<Provider[], void, { extra: StoreThunk }>(
    "provider/fetchAll",
    async (_, thunkAPI) => {
        const response = await thunkAPI.extra.providers.getProviders();
        return response.data;
    },
);

export const fetchProviderById = createAsyncThunk<Provider, string, { extra: StoreThunk }>(
    "provider/fetchById",
    async (id, thunkAPI) => {
        const response = await thunkAPI.extra.providers.getProvider(id);
        return response.data;
    },
);

export const createProvider = createAsyncThunk<Provider, CreateProviderRequest, { extra: StoreThunk }>(
    "provider/create",
    async (data, thunkAPI) => {
        const response = await thunkAPI.extra.providers.createProvider(data);
        return response.data;
    },
);

export const updateProvider = createAsyncThunk<
    Provider,
    { id: string; data: UpdateProviderRequest },
    { extra: StoreThunk }
>("provider/update", async ({ id, data }, thunkAPI) => {
    const response = await thunkAPI.extra.providers.updateProvider(id, data);
    return response.data;
});

export const deleteProvider = createAsyncThunk<boolean, string, { extra: StoreThunk }>(
    "provider/delete",
    async (id, thunkAPI) => {
        const response = await thunkAPI.extra.providers.deleteProvider(id);
        return response.data;
    },
);
