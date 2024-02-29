import { Settings, UpdateUserSettingsRequest } from "@eevos/macellum-api-client-typescript";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

import { RootState, StoreThunk } from "@/store";

export const fetchSettings = createAsyncThunk<Settings, void, { state: RootState; extra: StoreThunk }>(
    "settings/fetchById",
    async (_, thunkAPI) => {
        const userId = thunkAPI.getState().auth.auth?.id;
        if (!userId) throw new Error("User not authenticated. Cannot fetch settings.");

        try {
            const response = await thunkAPI.extra.settings.getUserSettings(userId);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const updateSettings = createAsyncThunk<
    Settings,
    { id: string; data: UpdateUserSettingsRequest },
    { extra: StoreThunk }
>("settings/update", async ({ id, data }, thunkAPI) => {
    const response = await thunkAPI.extra.settings.updateUserSettings(id, data);
    return response.data;
});

export const changeLanguage = createAction("i18n/change", function change(language: string) {
    return {
        payload: {
            language: language,
        },
    };
});

export const updateMessages = createAction("i18n/messages", function change(messages: any) {
    return {
        payload: {
            messages: messages,
        },
    };
});

export const changeTheme = createAction("theme/change", function change(theme: string) {
    return {
        payload: {
            theme: theme,
        },
    };
});

export const changeMode = createAction("mode/change", function change(mode: string) {
    return {
        payload: {
            mode: mode,
        },
    };
});
