import { createReducer } from "@reduxjs/toolkit";

import {
    fetchAllOrder,
    orderDelete,
    orderInsert,
} from "@/store/actions/order.actions";
import { Order } from "@/store/schemas/order.schema";

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
    .addCase(fetchAllOrder.pending, (state) => {
      state.status = "pending";
    })
    .addCase(fetchAllOrder.rejected, (state) => {
      state.status = "failed";
    })
    .addCase(fetchAllOrder.fulfilled, (state, action) => {
      const orders = action.payload;
      state.orders = orders;
      state.count = state.orders.length;
      state.status = "idle";
    })
    .addCase(orderInsert, (state, action) => {
      const order = action.payload;
      state.orders.push(order);
      state.count = state.orders.length;
    })
    .addCase(orderDelete, (state, action) => {
      const orderId = action.payload;
      state.orders = state.orders.filter((order) => order.id !== orderId);
      state.count = state.orders.length;
    });
});

export default orderReducer;
