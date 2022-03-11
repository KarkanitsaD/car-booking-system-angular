import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {environment} from "../../environments/environment";
import {authState, AuthState} from "./auth/auth-state";
import {authStateReducer} from "./auth/auth-state.reducer";
import {LocationState, locationState} from "./location/location-state";
import {locationStateReducer} from "./location/location-state.reducer";
import {DateTimeRangeState, dateTimeRangeState} from "./date-time-range/date-time-range-state";
import {dateTimeRangeStateReducer} from "./date-time-range/date-time-range.reducer";
import {CarsState, carsState} from "./cars/cars-state";
import {carsStateReducer} from "./cars/cars.reducer";

export interface ApplicationStore {
  [authState]: AuthState,
  [locationState]: LocationState,
  [dateTimeRangeState]: DateTimeRangeState,
  [carsState]: CarsState
}

export const reducers: ActionReducerMap<ApplicationStore> = {
  [authState]: authStateReducer,
  [locationState]: locationStateReducer,
  [dateTimeRangeState]: dateTimeRangeStateReducer,
  [carsState]: carsStateReducer,
};

export const metaReducers: MetaReducer<ApplicationStore>[] = !environment.production ? [] : [];
