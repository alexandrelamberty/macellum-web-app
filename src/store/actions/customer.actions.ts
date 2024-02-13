import { createAction, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

import customer_data from "@/data/customers.json";
import { Customer } from "@/store/schemas/customer.schema";

export const fetchCustomerById = createAsyncThunk(
  "customers/fetchById",
  async (userId: number) => {
    console.log(userId);
    // const response = await userAPI.fetchById(userId)
    // return response.data
    return null;
  },
);

export const fetchAllCustomer = createAsyncThunk<Customer[]>(
  "customers/fetch",
  async function fetch() {
    return customer_data;
    // try {
    // } catch (err) {
    //   // You can choose to use the message attached to err or write a custom error
    //   return isRejectedWithValue("Opps there seems to be an error");
    // }
  },
);

export const customerInsert = createAction(
  "customers/insert",
  function insert(customer: Customer) {
    return {
      payload: {
        ...customer,
        id: nanoid(),
        createdAt: new Date().toISOString(),
      },
    };
  },
);

export const customerDelete = createAction<string>("customers/delete");
