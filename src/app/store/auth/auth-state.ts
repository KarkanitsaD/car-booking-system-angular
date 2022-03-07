import {UserModel} from "../../domain/models/user/user.model";

export const authState = 'auth';

export interface AuthState {
  loggedInUser: UserModel | undefined;
}

export const initialAuthState: AuthState = {
  loggedInUser: new UserModel('1', 'email', 'dima', 'karkanitsa', 'phone', '12', [])
};
