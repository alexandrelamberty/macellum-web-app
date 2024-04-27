import { Customer } from "@eevos/macellum-api-client-typescript";
import { createReducer } from "@reduxjs/toolkit";

import { createCustomer, deleteCustomer, fetchAllCustomers, updateCustomer } from "../actions/customer.actions";

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
        .addCase(fetchAllCustomers.pending, (state) => {
            state.status = "pending";
        })
        .addCase(fetchAllCustomers.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(fetchAllCustomers.fulfilled, (state, action) => {
            const customers = action.payload;
            state.customers = customers;
            state.count = state.customers.length;
            state.status = "idle";
        })
        .addCase(createCustomer.pending, (state) => {
            state.status = "pending";
        })
        .addCase(createCustomer.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(createCustomer.fulfilled, (state, action) => {
            const customer = action.payload;
            state.customers.push(customer);
            state.count = state.customers.length;
        })
        .addCase(updateCustomer.pending, (state) => {
            state.status = "pending";
        })
        .addCase(updateCustomer.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(updateCustomer.fulfilled, (state, action) => {
            const customerId = action.payload.id;
            state.customers = state.customers.filter((customer) => customer.id !== customerId);
            state.count = state.customers.length;
        })
        .addCase(deleteCustomer.pending, (state) => {
            state.status = "pending";
        })
        .addCase(deleteCustomer.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(deleteCustomer.fulfilled, () => {
            // TODO: remove customer from state
        });
});

export default customerReducer;
