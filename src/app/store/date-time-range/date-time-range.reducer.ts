import {createReducer} from "@ngrx/store";
import {dateTimeRangeState, initialDateTimeRangeState} from "./date-time-range-state";

export const dateTimeRangeStateReducer = createReducer(
  initialDateTimeRangeState,
);
