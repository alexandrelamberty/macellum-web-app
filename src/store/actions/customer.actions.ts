import { CreateCustomerRequest, Customer, UpdateCustomerRequest } from "@eevos/macellum-api-client-typescript";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { StoreThunk } from "@/store";

export const fetchAllCustomers = createAsyncThunk<Customer[], void, { extra: StoreThunk }>(
    "customer/fetchAll",
    async (_, thunkAPI) => {
        const response = await thunkAPI.extra.customers.getCustomers();
        return response.data;
    },
);

export const fetchCustomerById = createAsyncThunk<Customer, string, { extra: StoreThunk }>(
    "customer/fetchById",
    async (id, thunkAPI) => {
        const response = await thunkAPI.extra.customers.getCustomer(id);
        return response.data;
    },
);

export const createCustomer = createAsyncThunk<Customer, CreateCustomerRequest, { extra: StoreThunk }>(
    "customer/create",
    async (data, thunkAPI) => {
        const response = await thunkAPI.extra.customers.createCustomer(data);
        return response.data;
    },
);

export const updateCustomer = createAsyncThunk<
    Customer,
    { id: string; data: UpdateCustomerRequest },
    { extra: StoreThunk }
>("customer/update", async ({ id, data }, thunkAPI) => {
    const response = await thunkAPI.extra.customers.updateCustomer(id, data);
    return response.data;
});

export const deleteCustomer = createAsyncThunk<boolean, string, { extra: StoreThunk }>(
    "customer/delete",
    async (id, thunkAPI) => {
        const response = await thunkAPI.extra.customers.deleteCustomer(id);
        return response.data;
    },
);
