import {createReducer} from "@ngrx/store";
import {initialLocationState} from "./location-state";

export const locationStateReducer = createReducer(
  initialLocationState,
)
