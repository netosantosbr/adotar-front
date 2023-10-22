import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginModel } from "../../../modules/auth/models/LoginModel";
import { UserModel } from "../../../modules/auth/models/UserModel";

export interface AuthState {
  user: UserModel | null;
  accessToken: string | null;
}

interface PayloadAuth extends PayloadAction<LoginModel> {}

const initialState: AuthState = {
  user: null,
  accessToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadAuth: (state, action: PayloadAuth) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
  },
});

export const { loadAuth } = authSlice.actions;
