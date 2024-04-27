import { createReducer } from "@reduxjs/toolkit";

import { changeLanguage, fetchSettings, updateMessages, updateSettings } from "@/store/actions/settings.actions";

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
    mode: string;
    theme: string;
    lang: string;
    messages: any;
    status: "idle" | "pending" | "succeeded" | "failed";
    errors: string | null;
};

const initialSettingsState: SettingsState = {
    mode: "light",
    theme: "frost-banana",
    lang: "en-us",
    messages: "",
    status: "idle",
    errors: null,
};

const settingsReducer = createReducer(initialSettingsState, (builder) => {
    builder
        // Fetch
        .addCase(fetchSettings.pending, (state) => {
            state.status = "pending";
        })
        .addCase(fetchSettings.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(fetchSettings.fulfilled, (state, action) => {
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
        // .addCase(resetSettings.pending, (state) => {
        //     state.status = "pending";
        // })
        // .addCase(resetSettings.rejected, (state) => {
        //     state.status = "failed";
        // })
        // .addCase(resetSettings.fulfilled, (state) => {
        //     state.theme = initialSettingsState.theme;
        //     state.status = "idle";
        // })
        // Update Language
        .addCase(changeLanguage, (state, action) => {
            state.lang = action.payload.language;
        })
        // // Update Locale
        .addCase(updateMessages, (state, action) => {
            state.messages = action.payload.messages;
        });
});

export default settingsReducer;
