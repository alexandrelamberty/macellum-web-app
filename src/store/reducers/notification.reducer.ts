import { createReducer } from "@reduxjs/toolkit";

import { fetchAllNotifications } from "@/store/actions/notification.actions";
import { Notification } from "@/store/schemas/notification.schema";

export type NotificationState = {
    notifications: Notification[];
    toast: {
        title: string;
        description: string;
        action: string;
    } | null;
    status: "idle" | "pending" | "succeeded" | "failed";
    errors: string | null;
};

const initialState: NotificationState = {
    notifications: [
        {
            id: "0",
            title: "Welcome back!",
            status: "",
            label: "",
        },
    ],
    toast: null,
    status: "idle",
    errors: null,
};

const notificationReducer = createReducer(initialState, (builder) => {
    builder
        // Notification overview
        .addCase(fetchAllNotifications.pending, (state) => {
            state.status = "pending";
        })
        .addCase(fetchAllNotifications.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(fetchAllNotifications.fulfilled, (state, action) => {
            const notifications = action.payload;
            state.notifications = notifications;
            state.status = "idle";
        });
});

export default notificationReducer;
