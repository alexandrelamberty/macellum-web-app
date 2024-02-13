import { createAction, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

import team_data from "@/data/teams.json";
import { TeamMember } from "@/store/schemas/team.schema";

export const teamFetchById = createAsyncThunk(
  "users/fetchById",
  async (userId: number) => {
    console.log(userId);
    // const response = await teamAPI.fetchById(userId)
    // return response.data
    return null;
  },
);

export const fetchAllTeam = createAsyncThunk<TeamMember[]>(
  "teams/fetch",
  async function fetch() {
    return team_data;
    // try {
    // const response = await teamAPI.fetchAll(userId)
    // return response.data
    // } catch (err) {
    //   // You can choose to use the message attached to err or write a custom error
    //   return isRejectedWithValue("Opps there seems to be an error");
    // }
  },
);

export const teamInsert = createAction(
  "teams/insert",
  function insert(team: TeamMember) {
    return {
      payload: {
        ...team,
        id: nanoid(),
        createdAt: new Date().toISOString(),
      },
    };
  },
);

export const teamDelete = createAction<string>("teams/delete");
