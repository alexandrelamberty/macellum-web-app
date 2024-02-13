import { createReducer } from "@reduxjs/toolkit";

import { fetchAnalytics } from "@/store/actions/analytics.actions";
import { Analytics } from "@/store/schemas/analytics.schema";

export type AnalyticsState = {
  analytics: Analytics | null;
  status: "idle" | "pending" | "succeeded" | "failed";
  errors: string | null;
};

const initialState: AnalyticsState = {
  analytics: null,
  status: "idle",
  errors: null,
};

const analyticsReducer = createReducer(initialState, (builder) => {
  builder
    // Analytics overview
    .addCase(fetchAnalytics.pending, (state) => {
      state.status = "pending";
    })
    .addCase(fetchAnalytics.rejected, (state) => {
      state.status = "failed";
    })
    .addCase(fetchAnalytics.fulfilled, (state, action) => {
      const analytics = action.payload;
      state.analytics = analytics;
      state.status = "idle";
    });
});

export default analyticsReducer;
