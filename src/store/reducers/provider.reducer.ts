import { Provider } from "@eevos/macellum-api-client-typescript";
import { createReducer } from "@reduxjs/toolkit";

import { createProvider, deleteProvider, fetchAllProviders, updateProvider } from "../actions/provider.actions";

export type ProviderState = {
    providers: Provider[];
    provider: Provider | null;
    count: number;
    status: "idle" | "pending" | "succeeded" | "failed";
    errors: string | null;
};

const initialState: ProviderState = {
    providers: [],
    provider: null,
    count: 0,
    status: "idle",
    errors: null,
};

const providerReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchAllProviders.pending, (state) => {
            state.status = "pending";
        })
        .addCase(fetchAllProviders.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(fetchAllProviders.fulfilled, (state, action) => {
            const providers = action.payload;
            state.providers = providers;
            state.count = state.providers.length;
            state.status = "idle";
        })
        .addCase(createProvider.pending, (state) => {
            state.status = "pending";
        })
        .addCase(createProvider.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(createProvider.fulfilled, (state, action) => {
            const provider = action.payload;
            state.providers.push(provider);
            state.count = state.providers.length;
        })
        .addCase(updateProvider.pending, (state) => {
            state.status = "pending";
        })
        .addCase(updateProvider.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(updateProvider.fulfilled, (state, action) => {
            const providerId = action.payload.id;
            state.providers = state.providers.filter((provider) => provider.id !== providerId);
            state.count = state.providers.length;
        })
        .addCase(deleteProvider.pending, (state) => {
            state.status = "pending";
        })
        .addCase(deleteProvider.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(deleteProvider.fulfilled, (state, action) => {
            // TODO: remove provider from state
        });
});

export default providerReducer;
