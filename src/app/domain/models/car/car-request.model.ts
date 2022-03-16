export interface CarRequestModel {
  bookingPointId: string;
  pickUpTime: Date;
  handOverTime: Date;
  minPricePerDay: number | null;
  maxPricePerDay: number | null;
  brand: string | null;
  minNumberOfSeats: number | null;
  maxNumberOfSeats: number | null;
  transmissionTypeId: string | null;
}

export class CarRequestModelClass {
  bookingPointId: string = '';
  pickUpTime: Date = new Date();
  handOverTime: Date = new Date();
  minPricePerDay: number | null = null;
  maxPricePerDay: number | null = null;
  brand: string | null = null;
  minNumberOfSeats: number | null = null;
  maxNumberOfSeats: number | null = null;
  transmissionTypeId: string | null = null;
}
