import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAnalytics = createAsyncThunk("analytics/fetch", async () => {
  // const response = await analyticsAPI.fetch()
  // return response.data
  return null;
});
