import {UserModel} from "../../domain/models/user/user.model";

export const authState = 'auth';

export interface AuthState {
  loggedInUser: UserModel | undefined;
  isAuthenticationInProgress: boolean;
}

export const initialAuthState: AuthState = {
  loggedInUser: undefined,
  isAuthenticationInProgress: false
};
