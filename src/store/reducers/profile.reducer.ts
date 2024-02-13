import { createReducer } from "@reduxjs/toolkit";

import {
    fetchProfileById,
    updateProfile,
} from "@/store/actions/profile.actions";
import { Profile } from "@/store/schemas/profile.schema";

export type ProfileState = {
  profile: Profile | null;
  status: "idle" | "pending" | "succeeded" | "failed";
  errors: string | null;
};

const initialState: ProfileState = {
  profile: null,
  status: "idle",
  errors: null,
};

const profileReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchProfileById.pending, (state) => {
      state.status = "pending";
    })
    .addCase(fetchProfileById.rejected, (state) => {
      state.status = "failed";
    })
    .addCase(fetchProfileById.fulfilled, (state, action) => {
      const profile = action.payload;
      state.profile = profile;
      state.status = "idle";
    })
    // Update
    .addCase(updateProfile.pending, (state) => {
      state.status = "pending";
    })
    .addCase(updateProfile.rejected, (state) => {
      state.status = "failed";
    })
    .addCase(updateProfile.fulfilled, (state, action) => {
      const profile = action.payload;
      state.profile = profile;
      state.status = "idle";
    });
});

export default profileReducer;
