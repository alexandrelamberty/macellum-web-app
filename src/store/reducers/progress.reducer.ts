import { createReducer } from "@reduxjs/toolkit";

import { progressActionBegin, progressActionInc } from "@/store/actions/progress.actions";

export type ProgressState = {
    count: number;
    status: "idle" | "pending" | "succeeded" | "failed";
    errors: string | null;
};

const initialState: ProgressState = {
    count: 1,
    status: "idle",
    errors: null,
};

const progressReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(progressActionBegin.pending, (state) => {
            state.errors = null;
            state.status = "pending";
        })
        .addCase(progressActionBegin.rejected, (state, action) => {
            state.status = "failed";
            state.errors = action.error.message!;
            if (action.error.name === "ConditionError") {
                state.errors = "Condition";
            }
            console.log(action);
        })
        .addCase(progressActionBegin.fulfilled, (state) => {
            state.status = "succeeded";
        })
        .addCase(progressActionInc, (state, action) => {
            state.count = action.payload;
        });
});

export default progressReducer;
