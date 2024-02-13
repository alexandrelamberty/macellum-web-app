import { createReducer } from "@reduxjs/toolkit";

import {
    customerDelete,
    customerInsert,
    fetchAllCustomer,
} from "@/store/actions/customer.actions";
import { Customer } from "@/store/schemas/customer.schema";

export type CustomerState = {
  customers: Customer[];
  customer: Customer | null;
  count: number;
  status: "idle" | "pending" | "succeeded" | "failed";
  errors: string | null;
};

const initialState: CustomerState = {
  customers: [],
  customer: null,
  count: 0,
  status: "idle",
  errors: null,
};

const customerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchAllCustomer.pending, (state) => {
      state.status = "pending";
    })
    .addCase(fetchAllCustomer.rejected, (state) => {
      state.status = "failed";
    })
    .addCase(fetchAllCustomer.fulfilled, (state, action) => {
      const customers = action.payload;
      state.customers = customers;
      state.count = state.customers.length;
      state.status = "idle";
    })
    .addCase(customerInsert, (state, action) => {
      const customer = action.payload;
      state.customers.push(customer);
      state.count = state.customers.length;
    })
    .addCase(customerDelete, (state, action) => {
      const customerId = action.payload;
      state.customers = state.customers.filter(
        (customer) => customer.id !== customerId,
      );
      state.count = state.customers.length;
    });
});

export default customerReducer;
