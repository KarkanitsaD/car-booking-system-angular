import {CarFiltrationModel} from "../../domain/models/car/car-filtration.model";

export const carsState = "cars";

export interface CarsState {
  filtrationModel: CarFiltrationModel | null
};

export const initialCarsState: CarsState = {
  filtrationModel: null
};
