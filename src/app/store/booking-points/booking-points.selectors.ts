import {createFeatureSelector, createSelector} from "@ngrx/store";
import {bookingPointsState, BookingPointsState} from "./booking-points-state";

export const bookingPointsSelector = createFeatureSelector<BookingPointsState>(bookingPointsState);

export const currentBookingPointsFiltrationModelSelector = createSelector(
  bookingPointsSelector,
  state => state.currentFiltrationModel
);
