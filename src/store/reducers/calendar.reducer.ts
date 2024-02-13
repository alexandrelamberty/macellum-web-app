import { createReducer } from "@reduxjs/toolkit";

import {
    calendarDelete,
    calendarInsert,
    fetchAllCalendar,
} from "@/store/actions/calendar.actions";
import { Calendar } from "@/store/schemas/calendar.schema";

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
    .addCase(fetchAllCalendar.pending, (state) => {
      state.status = "pending";
    })
    .addCase(fetchAllCalendar.rejected, (state) => {
      state.status = "failed";
    })
    .addCase(fetchAllCalendar.fulfilled, (state, action) => {
      const calendars = action.payload;
      state.calendars = calendars;
      state.count = state.calendars.length;
      state.status = "idle";
    })
    .addCase(calendarInsert, (state, action) => {
      const calendar = action.payload;
      state.calendars.push(calendar);
      state.count = state.calendars.length;
    })
    .addCase(calendarDelete, (state, action) => {
      const calendarId = action.payload;
      state.calendars = state.calendars.filter(
        (calendar) => calendar.id !== calendarId,
      );
      state.count = state.calendars.length;
    });
});

export default calendarReducer;
