import {createReducer, on} from "@ngrx/store";
import {dateTimeRangeState, initialDateTimeRangeState} from "./date-time-range-state";
import {setTimeRange} from "./date-time-range.actions";

export const dateTimeRangeStateReducer = createReducer(
  initialDateTimeRangeState,
  on(setTimeRange, (state, action) => ({
    ...state,
    dateTimeRangeModel: action.dateTimeRange
  }))
);
