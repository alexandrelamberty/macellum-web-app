import { Team } from "@eevos/macellum-api-client-typescript";
import { createReducer } from "@reduxjs/toolkit";

import { createTeam, deleteTeam, fetchAllTeams, updateTeam } from "../actions/team.actions";

export type TeamState = {
    teams: Team[];
    count: number;
    status: "idle" | "pending" | "succeeded" | "failed";
    errors: string | null;
};

const initialState: TeamState = {
    teams: [],
    count: 0,
    status: "idle",
    errors: null,
};

const teamReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchAllTeams.pending, (state) => {
            state.status = "pending";
        })
        .addCase(fetchAllTeams.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(fetchAllTeams.fulfilled, (state, action) => {
            const teams = action.payload;
            state.teams = teams;
            state.count = state.teams.length;
            state.status = "idle";
        })
        .addCase(createTeam.pending, (state) => {
            state.status = "pending";
        })
        .addCase(createTeam.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(createTeam.fulfilled, (state, action) => {
            const team = action.payload;
            state.teams.push(team);
            state.count = state.teams.length;
        })
        .addCase(updateTeam.pending, (state) => {
            state.status = "pending";
        })
        .addCase(updateTeam.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(updateTeam.fulfilled, (state, action) => {
            const teamId = action.payload.id;
            state.teams = state.teams.filter((team) => team.id !== teamId);
            state.count = state.teams.length;
        })
        .addCase(deleteTeam.pending, (state) => {
            state.status = "pending";
        })
        .addCase(deleteTeam.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(deleteTeam.fulfilled, (state, action) => {
            // TODO: remove team from state
        });
});

export default teamReducer;
