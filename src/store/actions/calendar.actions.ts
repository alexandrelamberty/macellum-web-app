import { Calendar, CreateCalendarRequest, UpdateCalendarRequest } from "@eevos/macellum-api-client-typescript";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { StoreThunk } from "@/store";

export const fetchAllCalendars = createAsyncThunk<Calendar[], void, { extra: StoreThunk }>(
    "calendar/fetchAll",
    async (_, thunkAPI) => {
        const response = await thunkAPI.extra.calendars.getCalendars();
        return response.data;
    },
);

export const fetchCalendarById = createAsyncThunk<Calendar, string, { extra: StoreThunk }>(
    "calendar/fetchById",
    async (id, thunkAPI) => {
        const response = await thunkAPI.extra.calendars.getCalendar(id);
        return response.data;
    },
);

export const createCalendar = createAsyncThunk<Calendar, CreateCalendarRequest, { extra: StoreThunk }>(
    "calendar/create",
    async (data, thunkAPI) => {
        const response = await thunkAPI.extra.calendars.createCalendar(data);
        return response.data;
    },
);

export const updateCalendar = createAsyncThunk<
    Calendar,
    { id: string; data: UpdateCalendarRequest },
    { extra: StoreThunk }
>("calendar/update", async ({ id, data }, thunkAPI) => {
    const response = await thunkAPI.extra.calendars.updateCalendar(id, data);
    return response.data;
});

export const deleteCalendar = createAsyncThunk<boolean, string, { extra: StoreThunk }>(
    "calendar/delete",
    async (id, thunkAPI) => {
        const response = await thunkAPI.extra.calendars.deleteCalendar(id);
        return response.data;
    },
);
