import { createAsyncThunk } from "@reduxjs/toolkit";

import profile_data from "@/data/profile.json";

export const fetchProfileById = createAsyncThunk(
  "profile/fetchById",
  async (userId: number) => {
    console.log(userId);
    return profile_data;
    // const response = await teamAPI.fetchById(userId)
    // return response.data
    return null;
  },
);

export const updateProfile = createAsyncThunk("teams/insert", async () => {
  return profile_data;
});
