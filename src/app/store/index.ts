import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {environment} from "../../environments/environment";
import {authState, AuthState} from "./auth/auth-state";
import {authStateReducer} from "./auth/auth-state.reducer";
import {LocationState, locationState} from "./location/location-state";
import {locationStateReducer} from "./location/location-state.reducer";

export interface ApplicationStore {
  [authState]: AuthState,
  [locationState]: LocationState
}

export const reducers: ActionReducerMap<ApplicationStore> = {
  [authState]: authStateReducer,
  [locationState]: locationStateReducer
};

export const metaReducers: MetaReducer<ApplicationStore>[] = !environment.production ? [] : [];
