import {createReducer, on} from "@ngrx/store";
import {initialBookingPointsState} from "./booking-points-state";
import {
  getBookingPointsPageSuccess,
  setBookingPointsCityId,
  setBookingPointsCountryId,
  setBookingPointsPageIndex
} from "./booking-points.actions";

export const bookingPointsReducer = createReducer(
  initialBookingPointsState,
  on(setBookingPointsCountryId, (state, action) => ({
    ...state,
    countryId: action.countryId
  })),
  on(setBookingPointsCityId, (state, action) => ({
    ...state,
    cityId: action.cityId
  })),
  on(setBookingPointsPageIndex, (state, action) => ({
    ...state,
    pageIndex: action.pageIndex
  })),
  on(getBookingPointsPageSuccess, (state, action) => ({
    ...state,
    bookingPoints: action.pageResult.items,
    bookingPointsTotalCount: action.pageResult.itemsTotalCount
  }))
);
