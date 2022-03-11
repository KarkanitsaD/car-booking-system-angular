import {createReducer} from "@ngrx/store";
import {initialCarsState} from "./cars-state";

export const carsStateReducer = createReducer(
  initialCarsState
);
