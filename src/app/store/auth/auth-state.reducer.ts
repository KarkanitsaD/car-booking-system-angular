import {createReducer, on} from "@ngrx/store";
import {initialAuthState} from "./auth-state";
import {logInUserSuccess, logOutUser} from "./auth-state.actions";

export const authStateReducer = createReducer(
  initialAuthState,
  on(logInUserSuccess, (state, action) =>({
    ...state,
    loggedInUser: action.user
  })),
  on(logOutUser, state => ({
    ...state,
    loggedInUser: undefined
  }))
);
