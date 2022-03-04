import {ImageModel} from "../image.model";

export class CarModel {
  pricePerDay: number;
  brand: string;
  model: string;
  fuelConsumption: number;
  numberOfSeats: number;
  carTransmissionId: string;
  images: ImageModel[];

  constructor(
    pricePerDay: number,
    brand: string,
    model: string,
    fuelConsumption: number,
    numberOfSeats: number,
    carTransmissionId: string,
    bookingPointId: string,
    images: ImageModel[]
  ) {
    this.pricePerDay = pricePerDay;
    this.brand = brand;
    this.model = model;
    this.fuelConsumption = fuelConsumption;
    this.numberOfSeats = numberOfSeats;
    this.carTransmissionId = carTransmissionId;
    this.images = images;
  }
}
