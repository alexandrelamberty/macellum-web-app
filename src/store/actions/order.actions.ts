import { createAction, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

import order_data from "@/data/orders.json";
import { Order } from "@/store/schemas/order.schema";

export const fetchOrderById = createAsyncThunk("orders/fetchById", async (userId: number) => {
  console.log(userId);
  // const response = await userAPI.fetchById(userId)
  // return response.data
  return null;
});

export const fetchAllOrder = createAsyncThunk<Order[]>("orders/fetch", async () => {
  return order_data;
  // try {
  // } catch (err) {
  //   // You can choose to use the message attached to err or write a custom error
  //   return isRejectedWithValue("Opps there seems to be an error");
  // }
});

export const orderInsert = createAction("orders/insert", function insert(order: Order) {
  return {
    payload: {
      ...order,
      id: nanoid(),
      createdAt: new Date().toISOString(),
    },
  };
});

export const orderDelete = createAction<string>("orders/delete");
