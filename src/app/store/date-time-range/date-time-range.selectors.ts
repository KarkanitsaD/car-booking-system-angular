import {createFeatureSelector, createSelector} from "@ngrx/store";
import {DateTimeRangeState, dateTimeRangeState} from "./date-time-range-state";

export const dateTimeRangeFeatureSelector = createFeatureSelector<DateTimeRangeState>(dateTimeRangeState);

export const dateTimeRangeSelector = createSelector(
  dateTimeRangeFeatureSelector,
  state => state.dateTimeRangeModel
);

