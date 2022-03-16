export interface BookingPointRequestModel {
  countryId: string | null;
  cityId: string | null;
  pageIndex: number;
  pageSize: number;
  pickUpTime: Date;
  handOverTime: Date;
}
