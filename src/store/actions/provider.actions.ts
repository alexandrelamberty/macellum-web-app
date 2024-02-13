import { createAction, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

import provider_data from "@/data/providers.json";
import { Provider } from "@/store/schemas/provider.schema";

export const providerFetchById = createAsyncThunk(
  "providers/fetchById",
  async (userId: number) => {
    console.log(userId);
    // const response = await providerAPI.fetchById(userId)
    // return response.data
    return null;
  },
);

export const fetchAllProvider = createAsyncThunk<Provider[]>(
  "providers/fetch",
  async function fetch() {
    return provider_data;
    // try {
    // const response = await providerAPI.fetchAll(userId)
    // return response.data
    // } catch (err) {
    //   // You can choose to use the message attached to err or write a custom error
    //   return isRejectedWithValue("Opps there seems to be an error");
    // }
  },
);

export const providerInsert = createAction(
  "providers/insert",
  function insert(provider: Provider) {
    return {
      payload: {
        ...provider,
        id: nanoid(),
        createdAt: new Date().toISOString(),
      },
    };
  },
);

export const providerDelete = createAction<string>("providers/delete");
