import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllNotification = createAsyncThunk(
  "notifications/fetch",
  async () => {
    // const response = await notificationsAPI.fetch()
    // return response.data
    return [];
  },
);
