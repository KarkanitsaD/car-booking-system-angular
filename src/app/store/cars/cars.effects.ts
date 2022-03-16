import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {ApplicationStore} from "../index";
import {filterCars, filterCarsSuccess} from "./cars.actions";
import {concatMap, map, max, take} from "rxjs/operators";
import {of} from "rxjs";
import {PaginationResponseModel} from "../../domain/models/pagination-response.model";
import {CarModel} from "../../domain/models/car/car.model";
import {CarRequestModel} from "../../domain/models/car/car-request.model";
import {DateTimeRangeService} from "../../core/services/date-time-range.service";
import {
  carsBookingPointIdSelector,
  carsBrandSelector, carsMaxNumberOfSeatsSelector,
  carsMaxPricePerDaySelector, carsMinNumberOfSeatsSelector,
  carsMinPricePerDaySelector, carsTransmissionTypeIdSelector
} from "./cars.selectors";
import {CarsService} from "../../core/services/cars.service";

@Injectable()
export class CarsEffects {
  constructor
  (
    private actions$: Actions,
    private store: Store<ApplicationStore>,
    private dateTimeRangeService: DateTimeRangeService,
    private carsService: CarsService
  ) {}

  loadCars$ = createEffect(
    () => this.actions$.pipe(
      ofType(filterCars),
      concatMap(() => this.carsService.getCarsPage(this.getCarRequestModel())),
      map((pageResult: PaginationResponseModel<CarModel>) => filterCarsSuccess({pageResult: pageResult}))
    )
  );

  private getCarRequestModel(): CarRequestModel {
    let bookingPointId!: string;
    let minPricePerDay!: number | null;
    let maxPricePerDay!: number | null;
    let brand!: string | null;
    let minNumberOfSeats!: number | null;
    let maxNumberOfSeats!: number | null;
    let transmissionTypeId!: string | null;

    this.store.select(carsBookingPointIdSelector).pipe(take(1)).subscribe(data => bookingPointId = data);
    this.store.select(carsMinPricePerDaySelector).pipe(take(1)).subscribe(data => minPricePerDay = data);
    this.store.select(carsMaxPricePerDaySelector).pipe(take(1)).subscribe(data => maxPricePerDay = data);
    this.store.select(carsBrandSelector).pipe(take(1)).subscribe(data => brand = data);
    this.store.select(carsMinNumberOfSeatsSelector).pipe(take(1)).subscribe(data => minNumberOfSeats = data);
    this.store.select(carsMaxNumberOfSeatsSelector).pipe(take(1)).subscribe(data => maxNumberOfSeats = data);
    this.store.select(carsTransmissionTypeIdSelector).pipe(take(1)).subscribe(data => transmissionTypeId = data);

    let dateTimeRange = this.dateTimeRangeService.getCurrentDateTimeRange();

    return {
      bookingPointId: bookingPointId,
      minPricePerDay: minPricePerDay,
      maxPricePerDay: maxPricePerDay,
      brand: brand,
      minNumberOfSeats: minNumberOfSeats,
      maxNumberOfSeats: maxNumberOfSeats,
      transmissionTypeId: transmissionTypeId,
      pickUpTime: dateTimeRange.pickUpDate,
      handOverTime: dateTimeRange.handOverDate
    };
  }
}
