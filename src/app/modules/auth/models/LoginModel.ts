import { UserModel } from "./UserModel";

export interface LoginModel {
  accessToken: string;
  user: UserModel;
}
