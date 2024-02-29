import { Calendar } from "@eevos/macellum-api-client-typescript";
import { createReducer } from "@reduxjs/toolkit";

import { createCalendar, deleteCalendar, fetchAllCalendars, updateCalendar } from "@/store/actions/calendar.actions";

export type CalendarState = {
    calendars: Calendar[];
    calendar: Calendar | null;
    count: number;
    status: "idle" | "pending" | "succeeded" | "failed";
    errors: string | null;
};

const initialState: CalendarState = {
    calendars: [],
    calendar: null,
    count: 0,
    status: "idle",
    errors: null,
};

const calendarReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchAllCalendars.pending, (state) => {
            state.status = "pending";
        })
        .addCase(fetchAllCalendars.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(fetchAllCalendars.fulfilled, (state, action) => {
            const calendars = action.payload;
            state.calendars = calendars;
            state.count = state.calendars.length;
            state.status = "idle";
        })
        .addCase(createCalendar.pending, (state) => {
            state.status = "pending";
        })
        .addCase(createCalendar.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(createCalendar.fulfilled, (state, action) => {
            const calendar = action.payload;
            state.calendars.push(calendar);
            state.count = state.calendars.length;
        })
        .addCase(updateCalendar.pending, (state) => {
            state.status = "pending";
        })
        .addCase(updateCalendar.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(updateCalendar.fulfilled, (state, action) => {
            const calendarId = action.payload.id;
            state.calendars = state.calendars.filter((calendar) => calendar.id !== calendarId);
            state.count = state.calendars.length;
        })
        .addCase(deleteCalendar.pending, (state) => {
            state.status = "pending";
        })
        .addCase(deleteCalendar.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(deleteCalendar.fulfilled, (state, action) => {
            // TODO: remove calendar from state
        });
});

export default calendarReducer;
