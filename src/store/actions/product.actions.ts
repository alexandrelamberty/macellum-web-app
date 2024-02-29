import { CreateProductRequest, Product, UpdateProductRequest } from "@eevos/macellum-api-client-typescript";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { StoreThunk } from "@/store";

export const fetchAllProducts = createAsyncThunk<Product[], void, { extra: StoreThunk }>(
    "product/fetchAll",
    async (_, thunkAPI) => {
        const response = await thunkAPI.extra.products.getProducts();
        return response.data;
    },
);

export const fetchProductById = createAsyncThunk<Product, string, { extra: StoreThunk }>(
    "product/fetchById",
    async (id, thunkAPI) => {
        const response = await thunkAPI.extra.products.getProduct(id);
        return response.data;
    },
);

export const createProduct = createAsyncThunk<Product, CreateProductRequest, { extra: StoreThunk }>(
    "product/create",
    async (data, thunkAPI) => {
        const response = await thunkAPI.extra.products.createProduct(data);
        return response.data;
    },
);

export const updateProduct = createAsyncThunk<
    Product,
    { id: string; data: UpdateProductRequest },
    { extra: StoreThunk }
>("product/update", async ({ id, data }, thunkAPI) => {
    const response = await thunkAPI.extra.products.updateProduct(id, data);
    return response.data;
});

export const deleteProduct = createAsyncThunk<boolean, string, { extra: StoreThunk }>(
    "product/delete",
    async (id, thunkAPI) => {
        const response = await thunkAPI.extra.products.deleteProduct(id);
        return response.data;
    },
);
