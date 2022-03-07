export class BookingPointFiltrationModel {
  countryId: string | null;
  cityId: string | null;
  pickUpTime: Date | null;
  handOverTime: Date | null;

  constructor(pickUpTime: Date | null, handOverTime: Date | null, countryId: string | null, cityId: string | null) {
    this.countryId = countryId;
    this.cityId = cityId;
    this.pickUpTime = pickUpTime;
    this.handOverTime = handOverTime;
  }
};
