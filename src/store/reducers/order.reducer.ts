import { Order } from "@eevos/macellum-api-client-typescript";
import { createReducer } from "@reduxjs/toolkit";

import { createOrder, deleteOrder, fetchAllOrders, updateOrder } from "../actions/order.actions";

export type OrderState = {
    orders: Order[];
    order: Order | null;
    count: number;
    status: "idle" | "pending" | "succeeded" | "failed";
    errors: string | null;
};

const initialState: OrderState = {
    orders: [],
    order: null,
    count: 0,
    status: "idle",
    errors: null,
};

const orderReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchAllOrders.pending, (state) => {
            state.status = "pending";
        })
        .addCase(fetchAllOrders.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(fetchAllOrders.fulfilled, (state, action) => {
            const orders = action.payload;
            state.orders = orders;
            state.count = state.orders.length;
            state.status = "idle";
        })
        .addCase(createOrder.pending, (state) => {
            state.status = "pending";
        })
        .addCase(createOrder.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(createOrder.fulfilled, (state, action) => {
            const order = action.payload;
            state.orders.push(order);
            state.count = state.orders.length;
        })
        .addCase(updateOrder.pending, (state) => {
            state.status = "pending";
        })
        .addCase(updateOrder.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(updateOrder.fulfilled, (state, action) => {
            const orderId = action.payload.id;
            state.orders = state.orders.filter((order) => order.id !== orderId);
            state.count = state.orders.length;
        })
        .addCase(deleteOrder.pending, (state) => {
            state.status = "pending";
        })
        .addCase(deleteOrder.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(deleteOrder.fulfilled, (state, action) => {
            // TODO: remove order from state
        });
});

export default orderReducer;
