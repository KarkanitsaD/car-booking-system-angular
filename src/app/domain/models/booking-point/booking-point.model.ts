export class BookingPointModel {
  id: string;
  title: string;
  address: string;
  country: string;
  city: string;

  constructor(id: string, title: string, address: string, country: string, city: string) {
    this.id = id;
    this.title = title;
    this.address = address;
    this.country = country;
    this.city = city;
  }
}
