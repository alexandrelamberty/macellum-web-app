import { createReducer } from "@reduxjs/toolkit";

import {
    fetchSettingsById,
    resetSettings,
    updateSettings,
} from "@/store/actions/settings.actions";

export type SettingsState = {
  theme: string;
  status: "idle" | "pending" | "succeeded" | "failed";
  errors: string | null;
};

const initialState: SettingsState = {
  theme: "dark",
  status: "idle",
  errors: null,
};

const teamReducer = createReducer(initialState, (builder) => {
  builder
    // Fetch
    .addCase(fetchSettingsById.pending, (state) => {
      state.status = "pending";
    })
    .addCase(fetchSettingsById.rejected, (state) => {
      state.status = "failed";
    })
    .addCase(fetchSettingsById.fulfilled, (state, action) => {
      const settings = action.payload;
      state.theme = settings.theme;
      state.status = "idle";
    })
    // Update
    .addCase(updateSettings.pending, (state) => {
      state.status = "pending";
    })
    .addCase(updateSettings.rejected, (state) => {
      state.status = "failed";
    })
    .addCase(updateSettings.fulfilled, (state, action) => {
      const settings = action.payload;
      state.theme = settings.theme;
      state.status = "idle";
    })
    // Reset
    .addCase(resetSettings.pending, (state) => {
      state.status = "pending";
    })
    .addCase(resetSettings.rejected, (state) => {
      state.status = "failed";
    })
    .addCase(resetSettings.fulfilled, (state, action) => {
      const settings = action.payload;
      state.theme = settings.theme;
      state.status = "idle";
    });
});

export default teamReducer;
