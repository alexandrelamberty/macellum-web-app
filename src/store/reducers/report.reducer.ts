import { Report } from "@eevos/macellum-api-client-typescript";
import { createReducer } from "@reduxjs/toolkit";

import { fetchAllReports } from "@/store/actions/report.actions";

export type ReportState = {
    reports: Report[];
    status: "idle" | "pending" | "succeeded" | "failed";
    errors: string | null;
};

const initialState: ReportState = {
    reports: [],
    status: "idle",
    errors: null,
};

const reportReducer = createReducer(initialState, (builder) => {
    builder
        // Report overview
        .addCase(fetchAllReports.pending, (state) => {
            state.status = "pending";
        })
        .addCase(fetchAllReports.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(fetchAllReports.fulfilled, (state, action) => {
            const report = action.payload;
            state.reports = report;
            state.status = "idle";
        });
});

export default reportReducer;
