import {createFeatureSelector, createSelector} from "@ngrx/store";
import {auth, AuthState} from "./auth-state";

export const authStateSelector = createFeatureSelector<AuthState>(auth);

export const loggedUserSelector = createSelector(
  authStateSelector,
  state => state.loggedInUser
);
