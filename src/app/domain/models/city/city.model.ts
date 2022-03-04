export class CityModel {
  id: string;
  title: string;
  countryId: string;

  constructor(id: string, title: string, countryId: string) {
    this.id = id;
    this.title = title;
    this.countryId = countryId;
  }
}
