import {createAction, props} from "@ngrx/store";
import {PaginationResponseModel} from "../../domain/models/pagination-response.model";
import {BookingPointModel} from "../../domain/models/booking-point/booking-point.model";

export const setBookingPointsCountryId = createAction(
  '[BOOKING POINTS] set country id',
  props<{countryId: string | null}>()
);

export const setBookingPointsCityId = createAction(
  '[BOOKING POINTS] set city id',
  props<{cityId: string | null}>()
);

export const setBookingPointsPageIndex = createAction(
  '[BOOKING POINTS] set page index',
  props<{pageIndex: number}>()
);

export const getBookingPointsPage = createAction(
  '[BOOKING POINTS] get booking points page'
);

export const getBookingPointsPageSuccess = createAction(
  '[BOOKING POINTS] get booking points page success',
  props<{pageResult: PaginationResponseModel<BookingPointModel>}>()
);
