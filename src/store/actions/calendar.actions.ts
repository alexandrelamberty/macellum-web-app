import { createAction, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

import calendar_data from "@/data/calendars.json";
import { Calendar } from "@/store/schemas/calendar.schema";

export const fetchCalendarById = createAsyncThunk(
  "calendars/fetchById",
  async (userId: number) => {
    console.log(userId);
    // const response = await userAPI.fetchById(userId)
    // return response.data
    return null;
  },
);

export const fetchAllCalendar = createAsyncThunk<Calendar[]>(
  "calendars/fetch",
  async function fetch() {
    return calendar_data;
    // try {
    // } catch (err) {
    //   // You can choose to use the message attached to err or write a custom error
    //   return isRejectedWithValue("Opps there seems to be an error");
    // }
  },
);

export const calendarInsert = createAction(
  "calendars/insert",
  function insert(calendar: Calendar) {
    return {
      payload: {
        ...calendar,
        id: nanoid(),
        createdAt: new Date().toISOString(),
      },
    };
  },
);

export const calendarDelete = createAction<string>("calendars/delete");
