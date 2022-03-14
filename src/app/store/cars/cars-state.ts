import {CarFiltrationModel} from "../../domain/models/car/car-filtration.model";
import {CarModel} from "../../domain/models/car/car.model";

export const carsState = "cars";

export interface CarsState {
  filtrationModel: CarFiltrationModel | null,
  cars: Array<CarModel>,
  carsTotalCount: number | null
};

export const initialCarsState: CarsState = {
  filtrationModel: null,
  cars: [],
  carsTotalCount: null
};
