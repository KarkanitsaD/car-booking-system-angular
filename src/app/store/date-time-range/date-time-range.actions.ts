import {createAction, props} from "@ngrx/store";

export const setTimeRange = createAction(
  '[TimeRange] set time range',
  props<{firstDateTime: Date; secondDateTime: Date}>()
);
