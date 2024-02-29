import { CreateTeamRequest, Team, UpdateTeamRequest } from "@eevos/macellum-api-client-typescript";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { StoreThunk } from "@/store";

export const fetchAllTeams = createAsyncThunk<Team[], void, { extra: StoreThunk }>(
    "team/fetchAll",
    async (_, thunkAPI) => {
        const response = await thunkAPI.extra.teams.getTeams();
        return response.data;
    },
);

export const fetchTeamById = createAsyncThunk<Team, string, { extra: StoreThunk }>(
    "team/fetchById",
    async (id, thunkAPI) => {
        const response = await thunkAPI.extra.teams.getTeam(id);
        return response.data;
    },
);

export const createTeam = createAsyncThunk<Team, CreateTeamRequest, { extra: StoreThunk }>(
    "team/create",
    async (data, thunkAPI) => {
        const response = await thunkAPI.extra.teams.createTeam(data);
        return response.data;
    },
);

export const updateTeam = createAsyncThunk<Team, { id: string; data: UpdateTeamRequest }, { extra: StoreThunk }>(
    "team/update",
    async ({ id, data }, thunkAPI) => {
        const response = await thunkAPI.extra.teams.updateTeam(id, data);
        return response.data;
    },
);

export const deleteTeam = createAsyncThunk<boolean, string, { extra: StoreThunk }>(
    "team/delete",
    async (id, thunkAPI) => {
        const response = await thunkAPI.extra.teams.deleteTeam(id);
        return response.data;
    },
);
