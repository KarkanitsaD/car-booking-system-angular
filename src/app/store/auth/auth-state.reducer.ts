import {createReducer, on} from "@ngrx/store";
import {initialAuthState} from "./auth-state";
import {loginUser, logOutUser} from "./auth-state.actions";

export const authStateReducer = createReducer(
  initialAuthState,
  on(loginUser, (state, action) =>({
    ...state,
    loggedInUser: action.user,
  })),
  on(logOutUser, state => ({
    ...state,
    loggedInUser: undefined
  }))
);
