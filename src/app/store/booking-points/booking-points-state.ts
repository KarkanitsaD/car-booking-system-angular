import {BookingPointModel} from "../../domain/models/booking-point/booking-point.model";
import {BookingPointFiltrationModel} from "../../domain/models/booking-point/booking-point-filtration.model";

export const bookingPointsState = 'bookingPoints';

export interface BookingPointsState {
  bookingPoints: BookingPointModel[];
  currentFiltrationModel: BookingPointFiltrationModel;
};

export const initialBookingPointsState: BookingPointsState = {
  bookingPoints: [],
  currentFiltrationModel: getInitialBookingPointFiltrationModel()
};

function getInitialBookingPointFiltrationModel(): BookingPointFiltrationModel {
  let currentDate = new Date();

  let firstDate = new Date();
  firstDate.setUTCDate(currentDate.getDate() + 1);
  firstDate.setUTCHours(10);
  firstDate.setUTCMinutes(0);

  let secondDate = new Date();
  secondDate.setUTCDate(currentDate.getDate() + 2);
  secondDate.setUTCHours(10);
  secondDate.setUTCMinutes(0);

  return new BookingPointFiltrationModel(firstDate, secondDate, null, null);
}
