import { createReducer } from "@reduxjs/toolkit";

import {
    fetchAllTeam,
    teamDelete,
    teamInsert,
} from "@/store/actions/team.actions";
import { TeamMember } from "@/store/schemas/team.schema";

export type TeamState = {
  members: TeamMember[];
  team: TeamMember | null;
  count: number;
  status: "idle" | "pending" | "succeeded" | "failed";
  errors: string | null;
};

const initialState: TeamState = {
  members: [],
  team: null,
  count: 0,
  status: "idle",
  errors: null,
};

const teamReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchAllTeam.pending, (state) => {
      state.status = "pending";
    })
    .addCase(fetchAllTeam.rejected, (state) => {
      state.status = "failed";
    })
    .addCase(fetchAllTeam.fulfilled, (state, action) => {
      const teams = action.payload;
      state.members = teams;
      state.count = state.members.length;
      state.status = "idle";
    })
    .addCase(teamInsert, (state, action) => {
      const team = action.payload;
      state.members.push(team);
      state.count = state.members.length;
    })
    .addCase(teamDelete, (state, action) => {
      const teamId = action.payload;
      state.members = state.members.filter((team) => team.id !== teamId);
      state.count = state.members.length;
    });
});

export default teamReducer;
