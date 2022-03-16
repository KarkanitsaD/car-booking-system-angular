import {createReducer, on} from "@ngrx/store";
import {initialCarsState} from "./cars-state";
import {
  filterCarsSuccess,
  setBrand,
  setCurrentBookingPointId,
  setMaxNumberOfSeats,
  setMaxPricePerDay,
  setMinNumberOfSeats,
  setMinPricePerDay, setTransmissionTypeId
} from "./cars.actions";

export const carsStateReducer = createReducer(
  initialCarsState,
  on(setCurrentBookingPointId, (state, action) => ({
    ...state,
    rentalPointId: action.rentalPointId
  })),
  on(setMinPricePerDay, (state, action) => ({
    ...state,
    minPricePerDay: action.minPricePerDay
  })),
  on(setMaxPricePerDay, (state, action) => ({
    ...state,
    maxPricePerDay: action.maxPricePerDay
  })),
  on(setMinNumberOfSeats, (state, action) => ({
    ...state,
    minNumberOfSeats: action.minNumberOfSeats
  })),
  on(setMaxNumberOfSeats, (state, action) => ({
    ...state,
    maxNumberOfSeats: action.maxNumberOfSeats
  })),
  on(setBrand, (state, action) => ({
    ...state,
    brand: action.brand
  })),
  on(setTransmissionTypeId, (state, action) => ({
    ...state,
    transmissionTypeId: action.transmissionTypeId
  })),
  on(filterCarsSuccess, (state, action) => ({
    ...state,
    cars: action.pageResult.items,
    carsTotalCount: action.pageResult.itemsTotalCount
  })),
);
