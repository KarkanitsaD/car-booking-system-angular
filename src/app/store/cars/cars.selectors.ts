import {createFeatureSelector, createSelector} from "@ngrx/store";
import {carsState, CarsState} from "./cars-state";

export const carsSelector = createFeatureSelector<CarsState>(carsState);

export const carsBookingPointIdSelector = createSelector(
  carsSelector,
  state => state.bookingPointId
);

export const carsMinPricePerDaySelector = createSelector(
  carsSelector,
  state => state.minPricePerDay
);

export const carsMaxPricePerDaySelector = createSelector(
  carsSelector,
  state => state.maxPricePerDay
);

export const carsBrandSelector = createSelector(
  carsSelector,
  state => state.brand
);

export const carsMinNumberOfSeatsSelector = createSelector(
  carsSelector,
  state => state.minNumberOfSeats
);

export const carsMaxNumberOfSeatsSelector = createSelector(
  carsSelector,
  state => state.maxNumberOfSeats
);

export const carsTransmissionTypeIdSelector = createSelector(
  carsSelector,
  state => state.transmissionTypeId
);

export const carsArraySelector = createSelector(
  carsSelector,
  state => state.cars
);

export const carsTotalCountSelector = createSelector(
  carsSelector,
  state => state.carsTotalCount
);

