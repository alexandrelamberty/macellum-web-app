import { createReducer } from "@reduxjs/toolkit";

import {
    fetchAllProduct,
    productDelete,
    productInsert,
} from "@/store/actions/product.actions";
import { Product } from "@/store/schemas/product.schema";

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
    .addCase(fetchAllProduct.pending, (state) => {
      state.status = "pending";
    })
    .addCase(fetchAllProduct.rejected, (state) => {
      state.status = "failed";
    })
    .addCase(fetchAllProduct.fulfilled, (state, action) => {
      const products = action.payload;
      state.products = products;
      state.count = state.products.length;
      state.status = "idle";
    })
    .addCase(productInsert, (state, action) => {
      const product = action.payload;
      state.products.push(product);
      state.count = state.products.length;
    })
    .addCase(productDelete, (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productId,
      );
      state.count = state.products.length;
    });
});

export default productReducer;
