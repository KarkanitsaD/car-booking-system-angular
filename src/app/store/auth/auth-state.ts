import {UserModel} from "../../domain/models/user/user.model";

export const auth = 'auth';

export interface AuthState {
  loggedInUser: UserModel | undefined;
}

export const initialAuthState: AuthState = {
  loggedInUser: undefined
};
