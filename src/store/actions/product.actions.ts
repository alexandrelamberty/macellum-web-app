import { createAction, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

import product_data from "@/data/products.json";
import { Product } from "@/store/schemas/product.schema";

export const fetchProductById = createAsyncThunk(
  "products/fetchById",
  async (userId: number) => {
    console.log(userId);
    // const response = await userAPI.fetchById(userId)
    // return response.data
    return null;
  },
);

export const fetchAllProduct = createAsyncThunk<Product[]>(
  "products/fetch",
  async function fetch() {
    return product_data;
    // try {
    // } catch (err) {
    //   // You can choose to use the message attached to err or write a custom error
    //   return isRejectedWithValue("Opps there seems to be an error");
    // }
  },
);

export const productInsert = createAction(
  "products/insert",
  function insert(product: Product) {
    return {
      payload: {
        ...product,
        id: nanoid(),
        createdAt: new Date().toISOString(),
      },
    };
  },
);

export const productDelete = createAction<string>("products/delete");
