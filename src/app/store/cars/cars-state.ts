import {CarModel} from "../../domain/models/car/car.model";

export const carsState = "cars";

export interface CarsState {
  bookingPointId: string;
  minPricePerDay: number | null;
  maxPricePerDay: number | null;
  brand: string | null;
  minNumberOfSeats: number | null;
  maxNumberOfSeats: number | null;
  transmissionTypeId: string | null;
  cars: CarModel[],
  carsTotalCount: number
}

export const initialCarsState: CarsState = {
  bookingPointId: '',
  minPricePerDay: null,
  maxPricePerDay: null,
  brand: null,
  minNumberOfSeats: null,
  maxNumberOfSeats: null,
  transmissionTypeId: null,
  cars: [],
  carsTotalCount: 0
};
