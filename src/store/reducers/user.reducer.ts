import { User } from "@eevos/macellum-api-client-typescript";
import { createReducer } from "@reduxjs/toolkit";

import { deleteUser, fetchAllUsers, updateUser } from "@/store/actions/user.actions";

export type UserState = {
    users: User[];
    count: number;
    status: "idle" | "pending" | "succeeded" | "failed";
    errors: string | null;
};

const initialState: UserState = {
    users: [],
    count: 0,
    status: "idle",
    errors: null,
};

const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchAllUsers.pending, (state) => {
            state.status = "pending";
        })
        .addCase(fetchAllUsers.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(fetchAllUsers.fulfilled, (state, action) => {
            const users = action.payload;
            state.users = users;
            state.count = state.users.length;
            state.status = "idle";
        })
        // .addCase(createUser.pending, (state) => {
        //     state.status = "pending";
        // })
        // .addCase(createUser.rejected, (state) => {
        //     state.status = "failed";
        // })
        // .addCase(createUser.fulfilled, (state, action) => {
        //     const user = action.payload;
        //     state.users.push(user);
        //     state.count = state.users.length;
        // })
        .addCase(updateUser.pending, (state) => {
            state.status = "pending";
        })
        .addCase(updateUser.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            const userId = action.payload.id;
            state.users = state.users.filter((user) => user.id !== userId);
            state.count = state.users.length;
        })
        .addCase(deleteUser.pending, (state) => {
            state.status = "pending";
        })
        .addCase(deleteUser.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
            // TODO: remove user from state
        });
});

export default userReducer;
