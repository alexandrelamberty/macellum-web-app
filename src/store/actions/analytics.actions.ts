import { Analytics } from "@eevos/macellum-api-client-typescript";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { StoreThunk } from "@/store";

export const fetchAnalytics = createAsyncThunk<Analytics[], void, { extra: StoreThunk }>(
    "analytics/fetchAll",
    async (_, thunkAPI) => {
        const response = await thunkAPI.extra.analytics.getAnalytics();
        return response.data;
    },
);
