import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllNotifications = createAsyncThunk("notifications/fetch", async () => {
    // const response = await notificationsAPI.fetch()
    // return response.data
    return [];
});
