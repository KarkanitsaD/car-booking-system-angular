import {createAction, props} from "@ngrx/store";
import {PaginationResponseModel} from "../../domain/models/pagination-response.model";
import {CarModel} from "../../domain/models/car/car.model";

export const setCurrentBookingPointId = createAction(
  '[CARS] set booking point id',
  props<{rentalPointId: string}>()
);

export const setMinPricePerDay = createAction(
  '[CARS] set min price per day',
  props<{minPricePerDay: number}>()
);

export const setMaxPricePerDay = createAction(
  '[CARS] set max price per day',
  props<{maxPricePerDay: number}>()
);

export const setMinNumberOfSeats = createAction(
  '[CARS] set min number of seats',
  props<{minNumberOfSeats: number}>()
);

export const setMaxNumberOfSeats = createAction(
  '[CARS] set max number of seats',
  props<{maxNumberOfSeats: number}>()
);

export const setBrand = createAction(
  '[CARS] set brand',
  props<{brand: string}>()
);

export const setTransmissionTypeId = createAction(
  '[CARS] set transmission type id',
  props<{transmissionTypeId: string}>()
);

export const filterCars = createAction(
  '[CARS] filter cars'
);

export const filterCarsSuccess = createAction(
  '[CARS] filter cars success',
  props<{pageResult: PaginationResponseModel<CarModel>}>()
);

export const filterCarsError = createAction(
  '[CARS] filter cars error',
  props<{error: Error}>()
);
