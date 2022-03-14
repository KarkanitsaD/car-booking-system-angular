import {createReducer} from "@ngrx/store";
import {initialBookingPointsState} from "./booking-points-state";

export const bookingPointsReducer = createReducer(
  initialBookingPointsState,
);
