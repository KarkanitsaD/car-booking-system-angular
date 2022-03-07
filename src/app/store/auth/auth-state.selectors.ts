import {createFeatureSelector, createSelector} from "@ngrx/store";
import {authState, AuthState} from "./auth-state";

export const authStateSelector = createFeatureSelector<AuthState>(authState);

export const loggedUserSelector = createSelector(
  authStateSelector,
  state => state.loggedInUser
);
