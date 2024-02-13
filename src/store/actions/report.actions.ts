import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReport = createAsyncThunk("reports/fetch", async () => {
  // const response = await analyticsAPI.fetch()
  // return response.data
  return null;
});
