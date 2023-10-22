import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginResponseModel } from "../../../modules/auth/models/LoginResponseModel";
import { UserModel } from "../../../modules/auth/models/UserModel";

export interface AuthState {
  user: UserModel | null;
  accessToken: string | null;
}

interface PayloadAuth extends PayloadAction<LoginResponseModel> {}

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
