import {ImageModel} from "../image.model";

export class UpdateCarRequestModel {
  pricePerDay: number;
  images: ImageModel[];

  constructor(
    pricePerDay: number,
    images: ImageModel[]
  ) {
    this.pricePerDay = pricePerDay;
    this.images = images;
  }
}
