import { createReducer } from "@reduxjs/toolkit";

import English from "@/lang/en.json";
// import French from "@/lang/fr.json";
import { fetchSettingsById, resetSettings, updateSettings } from "@/store/actions/settings.actions";

export type Messages = {
  "app.name": string;
  "menu.dashboard": string;
  "menu.calendars": string;
  "menu.customers": string;
  "menu.products": string;
  "menu.orders": string;
  "menu.providers": string;
  "menu.carts": string;
  "menu.team": string;
  "menu.settings": string;
};

export type SettingsState = {
  theme: string;
  lang: string;
  messages: Messages;
  status: "idle" | "pending" | "succeeded" | "failed";
  errors: string | null;
};

const initialSettingsState: SettingsState = {
  theme: "dark",
  lang: "en-US",
  messages: English,
  status: "idle",
  errors: null,
};

const teamReducer = createReducer(initialSettingsState, (builder) => {
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
    .addCase(updateSettings.fulfilled, (state) => {
      //   const settings = action.payload;
      //   state.theme = settings.theme;
      //   state.lang = settings.lang;
      state.status = "idle";
    })
    // Reset
    .addCase(resetSettings.pending, (state) => {
      state.status = "pending";
    })
    .addCase(resetSettings.rejected, (state) => {
      state.status = "failed";
    })
    .addCase(resetSettings.fulfilled, (state) => {
      state.theme = initialSettingsState.theme;
      state.status = "idle";
    });
});

export default teamReducer;
