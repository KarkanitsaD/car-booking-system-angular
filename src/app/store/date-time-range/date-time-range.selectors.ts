import {createFeatureSelector} from "@ngrx/store";
import {dateTimeRangeState} from "./date-time-range-state";

export const dateTimeRangeSelectors = createFeatureSelector(dateTimeRangeState);
