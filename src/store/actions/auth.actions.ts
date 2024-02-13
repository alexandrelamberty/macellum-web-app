import { createAsyncThunk } from "@reduxjs/toolkit";

import auth_data from "@/data/auth.json";
import { AuthLogin, AuthRegister } from "@/store/schemas/auth.schema";

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }: AuthLogin) => {
    console.log(email, password);
    // try {
    //   const response = await authAPI.login(email, password)
    //   return response.data
    // } catch (err) {
    //   return isRejectedWithValue("Opps there seems to be an error");
    // }
    return auth_data;
  },
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (register: AuthRegister) => {
    console.log(register);
    return auth_data;
    // try {
    //   const response = await authAPI.register(register)
    //   return response.data
    // } catch (err) {
    //   return isRejectedWithValue("Opps there seems to be an error");
    // }
  },
);
