import { Cart } from "@eevos/macellum-api-client-typescript";
import { createReducer } from "@reduxjs/toolkit";

import { createCart, deleteCart, fetchAllCarts, updateCart } from "../actions/cart.actions";

export type CartState = {
    carts: Cart[];
    cart: Cart | null;
    count: number;
    status: "idle" | "pending" | "succeeded" | "failed";
    errors: string | null;
};

const initialState: CartState = {
    carts: [],
    cart: null,
    count: 0,
    status: "idle",
    errors: null,
};

const cartReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchAllCarts.pending, (state) => {
            state.status = "pending";
        })
        .addCase(fetchAllCarts.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(fetchAllCarts.fulfilled, (state, action) => {
            const carts = action.payload;
            state.carts = carts;
            state.count = state.carts.length;
            state.status = "idle";
        })
        .addCase(createCart.pending, (state) => {
            state.status = "pending";
        })
        .addCase(createCart.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(createCart.fulfilled, (state, action) => {
            const cart = action.payload;
            state.carts.push(cart);
            state.count = state.carts.length;
        })
        .addCase(updateCart.pending, (state) => {
            state.status = "pending";
        })
        .addCase(updateCart.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(updateCart.fulfilled, (state, action) => {
            const cartId = action.payload.id;
            state.carts = state.carts.filter((cart) => cart.id !== cartId);
            state.count = state.carts.length;
        })
        .addCase(deleteCart.pending, (state) => {
            state.status = "pending";
        })
        .addCase(deleteCart.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(deleteCart.fulfilled, () => {
            // TODO: remove cart from state
        });
});

export default cartReducer;
