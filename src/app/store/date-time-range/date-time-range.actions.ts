import {createAction, props} from "@ngrx/store";
import {DateTimeRangeModel} from "../../domain/models/date-time-range/date-time-range.model";

export const setTimeRange = createAction(
  '[TimeRange] set time range',
  props<{dateTimeRange: DateTimeRangeModel}>()
);
