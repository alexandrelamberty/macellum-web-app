import { Cart, CreateCartRequest, UpdateCartRequest } from "@eevos/macellum-api-client-typescript";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { StoreThunk } from "@/store";

export const fetchAllCarts = createAsyncThunk<Cart[], void, { extra: StoreThunk }>(
    "cart/fetchAll",
    async (_, thunkAPI) => {
        const response = await thunkAPI.extra.carts.getCarts();
        return response.data;
    },
);

export const fetchCartById = createAsyncThunk<Cart, string, { extra: StoreThunk }>(
    "cart/fetchById",
    async (id, thunkAPI) => {
        const response = await thunkAPI.extra.carts.getCart(id);
        return response.data;
    },
);

export const createCart = createAsyncThunk<Cart, CreateCartRequest, { extra: StoreThunk }>(
    "cart/create",
    async (data, thunkAPI) => {
        const response = await thunkAPI.extra.carts.createCart(data);
        return response.data;
    },
);

export const updateCart = createAsyncThunk<Cart, { id: string; data: UpdateCartRequest }, { extra: StoreThunk }>(
    "cart/update",
    async ({ id, data }, thunkAPI) => {
        const response = await thunkAPI.extra.carts.updateCart(id, data);
        return response.data;
    },
);

export const deleteCart = createAsyncThunk<boolean, string, { extra: StoreThunk }>(
    "cart/delete",
    async (id, thunkAPI) => {
        const response = await thunkAPI.extra.carts.deleteCart(id);
        return response.data;
    },
);
