import {ImageModel} from "../image.model";

export class CreateCarRequestModel {
  pricePerDay: number;
  brand: string;
  model: string;
  fuelConsumption: string;
  numberOfSeats: number;
  carTransmissionId: string;
  bookingPointId: string;
  images: ImageModel[];

  constructor(
    pricePerDay: number,
    brand: string,
    model: string,
    fuelConsumption: string,
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
    this.bookingPointId = bookingPointId;
    this.images = images;
  }
}
