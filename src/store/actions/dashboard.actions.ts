import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDashboard = createAsyncThunk("dashboard/fetch", async (userId: number) => {
    console.log(userId);
    // const response = await dashboardAPI.fetchById(userId)
    // return response.data
    return null;
});
