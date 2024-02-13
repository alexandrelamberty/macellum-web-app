import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

import settings_data from "@/data/settings.json";
import { Settings } from "@/store/schemas/settings.schema";

export const fetchSettingsById = createAsyncThunk(
  "settings/fetchById",
  async (settingsId: number) => {
    console.log(settingsId);
    // const response = await settingsAPI.fetchById(settingsId)
    // return response.data
    return settings_data;
  },
);

export const updateSettings = createAsyncThunk(
  "settings/update",
  function insert(settings: Settings) {
    return {
      ...settings,
      updatedAt: new Date().toISOString(),
    };
  },
);

export const resetSettings = createAsyncThunk(
  "settings/reset",
  function insert(settings: Settings) {
    return {
      ...settings,
      updatedAt: new Date().toISOString(),
    };
  },
);

export const teamDelete = createAction<string>("teams/delete");
