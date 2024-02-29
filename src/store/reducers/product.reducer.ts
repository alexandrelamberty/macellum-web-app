import { Product } from "@eevos/macellum-api-client-typescript";
import { createReducer } from "@reduxjs/toolkit";

import { createProduct, deleteProduct, fetchAllProducts, updateProduct } from "../actions/product.actions";

export type ProductState = {
    products: Product[];
    product: Product | null;
    count: number;
    status: "idle" | "pending" | "succeeded" | "failed";
    errors: string | null;
};

const initialState: ProductState = {
    products: [],
    product: null,
    count: 0,
    status: "idle",
    errors: null,
};

const productReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchAllProducts.pending, (state) => {
            state.status = "pending";
        })
        .addCase(fetchAllProducts.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(fetchAllProducts.fulfilled, (state, action) => {
            const products = action.payload;
            state.products = products;
            state.count = state.products.length;
            state.status = "idle";
        })
        .addCase(createProduct.pending, (state) => {
            state.status = "pending";
        })
        .addCase(createProduct.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(createProduct.fulfilled, (state, action) => {
            const product = action.payload;
            state.products.push(product);
            state.count = state.products.length;
        })
        .addCase(updateProduct.pending, (state) => {
            state.status = "pending";
        })
        .addCase(updateProduct.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(updateProduct.fulfilled, (state, action) => {
            const productId = action.payload.id;
            state.products = state.products.filter((product) => product.id !== productId);
            state.count = state.products.length;
        })
        .addCase(deleteProduct.pending, (state) => {
            state.status = "pending";
        })
        .addCase(deleteProduct.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(deleteProduct.fulfilled, (state, action) => {
            // TODO: remove product from state
        });
});

export default productReducer;
