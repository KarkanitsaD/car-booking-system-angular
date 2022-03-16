import {BookingPointModel} from "../../domain/models/booking-point/booking-point.model";

export const bookingPointsState = 'bookingPoints';

export interface BookingPointsState {
  countryId: string | null;
  cityId: string | null;
  pageIndex: number;
  bookingPoints: BookingPointModel[];
  bookingPointsTotalCount: number;
}

export const initialBookingPointsState: BookingPointsState = {
  countryId: null,
  cityId: null,
  pageIndex: 0,
  bookingPoints: [
    new BookingPointModel('s','s','s','s','s',),
    new BookingPointModel('s','s','s','s','s',),
    new BookingPointModel('s','s','s','s','s',),
    new BookingPointModel('s','s','s','s','s',),
    new BookingPointModel('s','s','s','s','s',),
    new BookingPointModel('s','s','s','s','s',),
    new BookingPointModel('s','s','s','s','s',),
  ],
  bookingPointsTotalCount: 0
};
