import { createReducer } from "@reduxjs/toolkit";

import { fetchDashboard } from "@/store/actions/dashboard.actions";
import { Dashboard } from "@/store/schemas/dashboard-overview.schema";

export type DashboardState = {
    dashboard: Dashboard | null;
    status: "idle" | "pending" | "succeeded" | "failed";
    errors: string | null;
};

const initialState: DashboardState = {
    dashboard: null,
    status: "idle",
    errors: null,
};

const dashboardReducer = createReducer(initialState, (builder) => {
    builder
        // Dashboard overview
        .addCase(fetchDashboard.pending, (state) => {
            state.status = "pending";
        })
        .addCase(fetchDashboard.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(fetchDashboard.fulfilled, (state, action) => {
            const dashboard = action.payload;
            state.dashboard = dashboard;
            state.status = "idle";
        });
});

export default dashboardReducer;
