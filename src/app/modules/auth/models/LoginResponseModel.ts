import { UserModel } from "./UserModel";

export interface LoginResponseModel {
  accessToken: string;
  user: UserModel;
}
