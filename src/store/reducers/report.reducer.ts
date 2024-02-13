import { createReducer } from "@reduxjs/toolkit";

import { fetchReport } from "@/store/actions/report.actions";
import { Report } from "@/store/schemas/report.schema";

export type ReportState = {
  report: Report | null;
  status: "idle" | "pending" | "succeeded" | "failed";
  errors: string | null;
};

const initialState: ReportState = {
  report: null,
  status: "idle",
  errors: null,
};

const reportReducer = createReducer(initialState, (builder) => {
  builder
    // Report overview
    .addCase(fetchReport.pending, (state) => {
      state.status = "pending";
    })
    .addCase(fetchReport.rejected, (state) => {
      state.status = "failed";
    })
    .addCase(fetchReport.fulfilled, (state, action) => {
      const report = action.payload;
      state.report = report;
      state.status = "idle";
    });
});

export default reportReducer;
