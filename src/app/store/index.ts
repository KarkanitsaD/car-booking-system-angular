import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {environment} from "../../environments/environment";
import {auth, AuthState} from "./auth/auth-state";
import {authStateReducer} from "./auth/auth-state.reducer";

export interface Store {
  [auth]: AuthState
}

export const reducers: ActionReducerMap<Store> = {
  [auth]: authStateReducer
};

export const metaReducers: MetaReducer<Store>[] = !environment.production ? [] : [];
