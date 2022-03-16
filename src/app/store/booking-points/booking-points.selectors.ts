import {createFeatureSelector, createSelector} from "@ngrx/store";
import {bookingPointsState, BookingPointsState} from "./booking-points-state";

export const bookingPointsSelector = createFeatureSelector<BookingPointsState>(bookingPointsState);

export const bookingPointsCountryIdSelector = createSelector(
  bookingPointsSelector,
  state => state.countryId
);

export const bookingPointsCityIdSelector = createSelector(
  bookingPointsSelector,
  state => state.cityId
);

export const bookingPointsPageIndexSelector = createSelector(
  bookingPointsSelector,
  state => state.pageIndex
);

export const filteredBookingPointsSelector = createSelector(
  bookingPointsSelector,
  state => state.bookingPoints
);

export const bookingsPointTotalCountSelector = createSelector(
  bookingPointsSelector,
  state => state.bookingPointsTotalCount
);
