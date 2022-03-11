export interface CarFiltrationModel {
  rentalPointId: string;
  pickUpTime: Date | null;
  handOverTime: Date | null;
  minPricePerDay?: number;
  maxPricePerDay?: number;
  brand?: string;
  minNumberOfSeats?: number;
  maxNumberOfSeats?: number;
  transmissionTypeId?: string;
};
