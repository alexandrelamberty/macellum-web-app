import { createReducer } from "@reduxjs/toolkit";

import {
    cartDelete,
    cartInsert,
    fetchAllCart,
} from "@/store/actions/cart.actions";
import { Cart } from "@/store/schemas/cart.schema";

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
    .addCase(fetchAllCart.pending, (state) => {
      state.status = "pending";
    })
    .addCase(fetchAllCart.rejected, (state) => {
      state.status = "failed";
    })
    .addCase(fetchAllCart.fulfilled, (state, action) => {
      const carts = action.payload;
      state.carts = carts;
      state.count = state.carts.length;
      state.status = "idle";
    })
    .addCase(cartInsert, (state, action) => {
      const cart = action.payload;
      state.carts.push(cart);
      state.count = state.carts.length;
    })
    .addCase(cartDelete, (state, action) => {
      const cartId = action.payload;
      state.carts = state.carts.filter((cart) => cart.id !== cartId);
      state.count = state.carts.length;
    });
});

export default cartReducer;
