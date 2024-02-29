import { AuthUser } from "@eevos/macellum-api-client-typescript";
import { createReducer } from "@reduxjs/toolkit";

import { loginUser, registerUser } from "@/store/actions/auth.actions";

export type AuthState = {
    auth: AuthUser | null;
    status: "idle" | "pending" | "succeeded" | "failed";
    errors: string | null;
};

const initialState: AuthState = {
    auth: {
        id: "1",
        firstName: "Alexandre",
        lastName: "",
        token: "",
    },
    status: "idle",
    errors: null,
};

const authReducer = createReducer(initialState, (builder) => {
    builder
        // Login
        .addCase(loginUser.pending, (state) => {
            state.status = "pending";
        })
        .addCase(loginUser.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            const auth = action.payload;
            state.auth = auth;
            state.status = "idle";
        })
        // Register
        .addCase(registerUser.pending, (state) => {
            state.status = "pending";
        })
        .addCase(registerUser.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            const auth = action.payload;
            state.auth = auth;
            state.status = "idle";
        });
});

export default authReducer;
