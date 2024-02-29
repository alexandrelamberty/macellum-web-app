import { CreateOrderRequest, Order, UpdateOrderRequest } from "@eevos/macellum-api-client-typescript";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { StoreThunk } from "@/store";

export const fetchAllOrders = createAsyncThunk<Order[], void, { extra: StoreThunk }>(
    "order/fetchAll",
    async (_, thunkAPI) => {
        const response = await thunkAPI.extra.orders.getOrders();
        return response.data;
    },
);

export const fetchOrderById = createAsyncThunk<Order, string, { extra: StoreThunk }>(
    "order/fetchById",
    async (id, thunkAPI) => {
        const response = await thunkAPI.extra.orders.getOrder(id);
        return response.data;
    },
);

export const createOrder = createAsyncThunk<Order, CreateOrderRequest, { extra: StoreThunk }>(
    "order/create",
    async (data, thunkAPI) => {
        const response = await thunkAPI.extra.orders.createOrder(data);
        return response.data;
    },
);

export const updateOrder = createAsyncThunk<Order, { id: string; data: UpdateOrderRequest }, { extra: StoreThunk }>(
    "order/update",
    async ({ id, data }, thunkAPI) => {
        const response = await thunkAPI.extra.orders.updateOrder(id, data);
        return response.data;
    },
);

export const deleteOrder = createAsyncThunk<boolean, string, { extra: StoreThunk }>(
    "order/delete",
    async (id, thunkAPI) => {
        const response = await thunkAPI.extra.orders.deleteOrder(id);
        return response.data;
    },
);
