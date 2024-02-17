import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

import settings_data from "@/data/settings.json";
import { Messages } from "@/store/reducers/settings.reducer";
import { UpdateSettings } from "@/store/schemas/settings.schema";

export const fetchSettingsById = createAsyncThunk("settings/fetchById", async (settingsId: number) => {
  console.log(settingsId);
  // const response = await settingsAPI.fetchById(settingsId)
  // return response.data
  return settings_data;
});

export const updateSettings = createAsyncThunk("settings/update", (settings: UpdateSettings) => {
  return {
    ...settings,
    // updatedAt: new Date().toISOString(),
  };
});

export const resetSettings = createAsyncThunk("settings/reset", () => {
  // Initial state
  const settings = {
    theme: "dark",
    lang: "en-US",
    status: "idle",
    errors: null,
  };

  return {
    payload: {
      ...settings,
      createdAt: new Date().toISOString(),
    },
  };
});

export const updateLocales = createAction("settings/update-locales", (locales: Messages) => {
  return {
    payload: {
      ...locales,
    },
  };
});

export const teamDelete = createAction<string>("teams/delete");
