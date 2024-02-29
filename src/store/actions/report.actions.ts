import { Report } from "@eevos/macellum-api-client-typescript";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { StoreThunk } from "@/store";

export const fetchAllReports = createAsyncThunk<Report[], void, { extra: StoreThunk }>(
    "report/fetchAll",
    async (_, thunkAPI) => {
        const response = await thunkAPI.extra.reports.getReports();
        return response.data;
    },
);

export const fetchReportById = createAsyncThunk<Report, string, { extra: StoreThunk }>(
    "report/fetchById",
    async (id, thunkAPI) => {
        const response = await thunkAPI.extra.reports.getReport(id);
        return response.data;
    },
);
