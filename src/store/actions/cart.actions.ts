import { createAction, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

import cart_data from "@/data/carts.json";
import { Cart } from "@/store/schemas/cart.schema";

export const fetchCartById = createAsyncThunk(
  "carts/fetchById",
  async (userId: number) => {
    console.log(userId);
    // const response = await userAPI.fetchById(userId)
    // return response.data
    return null;
  },
);

export const fetchAllCart = createAsyncThunk<Cart[]>(
  "carts/fetch",
  async function fetch() {
    return cart_data;
    // try {
    // } catch (err) {
    //   // You can choose to use the message attached to err or write a custom error
    //   return isRejectedWithValue("Opps there seems to be an error");
    // }
  },
);

export const cartInsert = createAction(
  "carts/insert",
  function insert(cart: Cart) {
    return {
      payload: {
        ...cart,
        id: nanoid(),
        createdAt: new Date().toISOString(),
      },
    };
  },
);

export const cartDelete = createAction<string>("carts/delete");
