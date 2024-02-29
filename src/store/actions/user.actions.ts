import { InviteUserRequest, UpdateUserRequest, User } from "@eevos/macellum-api-client-typescript";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { StoreThunk } from "@/store";

export const fetchAllUsers = createAsyncThunk<User[], void, { extra: StoreThunk }>(
    "user/fetchAll",
    async (_, thunkAPI) => {
        const response = await thunkAPI.extra.users.getUsers();
        return response.data;
    },
);

export const fetchUserById = createAsyncThunk<User, string, { extra: StoreThunk }>(
    "user/fetchById",
    async (id, thunkAPI) => {
        const response = await thunkAPI.extra.users.getUser(id);
        return response.data;
    },
);

export const inviteUser = createAsyncThunk<User, InviteUserRequest, { extra: StoreThunk }>(
    "user/invite",
    async (data, thunkAPI) => {
        const response = await thunkAPI.extra.users.inviteUser(data);
        return response.data;
    },
);

export const updateUser = createAsyncThunk<User, { id: string; data: UpdateUserRequest }, { extra: StoreThunk }>(
    "user/update",
    async ({ id, data }, thunkAPI) => {
        const response = await thunkAPI.extra.users.updateUser(id, data);
        return response.data;
    },
);

export const deleteUser = createAsyncThunk<boolean, string, { extra: StoreThunk }>(
    "user/delete",
    async (id, thunkAPI) => {
        const response = await thunkAPI.extra.users.deleteUser(id);
        return response.data;
    },
);
