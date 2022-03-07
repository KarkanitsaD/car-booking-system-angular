export class BookingPointModel {
  title: string;
  address: string;
  country: string;
  city: string;

  constructor(title: string, address: string, country: string, city: string) {
    this.title = title;
    this.address = address;
    this.country = country;
    this.city = city;
  }
}
