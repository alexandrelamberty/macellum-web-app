import { createReducer } from "@reduxjs/toolkit";

import {
    fetchAllProvider,
    providerDelete,
    providerInsert,
} from "@/store/actions/provider.actions";
import { Provider } from "@/store/schemas/provider.schema";

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
    .addCase(fetchAllProvider.pending, (state) => {
      state.status = "pending";
    })
    .addCase(fetchAllProvider.rejected, (state) => {
      state.status = "failed";
    })
    .addCase(fetchAllProvider.fulfilled, (state, action) => {
      const providers = action.payload;
      state.providers = providers;
      state.count = state.providers.length;
      state.status = "idle";
    })
    .addCase(providerInsert, (state, action) => {
      const provider = action.payload;
      state.providers.push(provider);
      state.count = state.providers.length;
    })
    .addCase(providerDelete, (state, action) => {
      const providerId = action.payload;
      state.providers = state.providers.filter(
        (provider) => provider.id !== providerId,
      );
      state.count = state.providers.length;
    });
});

export default providerReducer;
