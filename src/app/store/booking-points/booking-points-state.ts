import {BookingPointFiltrationModel} from "../../domain/models/booking-point/booking-point-filtration.model";
import {BookingPointModel} from "../../domain/models/booking-point/booking-point.model";

export const bookingPointsState = 'bookingPoints';

export interface BookingPointsState {
  filtrationModel: BookingPointFiltrationModel | null;
  bookingPoints: Array<BookingPointModel>,
  bookingPointsTotalCount: number | null
};

export const initialBookingPointsState: BookingPointsState = {
  filtrationModel: null,
  bookingPoints: [],
  bookingPointsTotalCount: null
};
