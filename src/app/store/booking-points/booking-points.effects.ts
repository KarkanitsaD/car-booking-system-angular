import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {BookingPointsService} from "../../core/services/booking-points.service";
import {ApplicationStore} from "../index";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {getBookingPointsPage, getBookingPointsPageSuccess} from "./booking-points.actions";
import {concatMap, map, take} from "rxjs/operators";
import {BookingPointRequestModel} from "../../domain/models/booking-point/booking-point-request.model";
import {dateTimeRangeSelector} from "../date-time-range/date-time-range.selectors";
import {DateTimeRangeModel} from "../../domain/models/date-time-range/date-time-range.model";
import {bookingPointsPageSize} from "../../core/constans/booking-points.constans";
import {
  bookingPointsCityIdSelector,
  bookingPointsCountryIdSelector,
  bookingPointsPageIndexSelector
} from "./booking-points.selectors";
import {DateTimeRangeService} from "../../core/services/date-time-range.service";

@Injectable()
export class BookingPointsEffects {
  constructor
  (
    private actions$: Actions,
    private bookingPointsService: BookingPointsService,
    private store: Store<ApplicationStore>,
    private dateTimeRangeService: DateTimeRangeService
  ) {}

  loadBookingPoints$ = createEffect(
    () => this.actions$.pipe(
      ofType(getBookingPointsPage),
      concatMap(() => this.bookingPointsService.getBookingPointsPage(this.getBookingPointsRequestModel())),
      map(pageResult => getBookingPointsPageSuccess({pageResult: pageResult}))
    )
  );

  private getBookingPointsRequestModel(): BookingPointRequestModel {
    let countryId!: string | null ;
    let cityId!: string | null;
    let pageIndex: number = 0;

    this.store.select(bookingPointsCountryIdSelector).pipe(take(1)).subscribe(data => countryId = data);
    this.store.select(bookingPointsCityIdSelector).pipe(take(1)).subscribe(data => cityId = data);
    this.store.select(bookingPointsPageIndexSelector).pipe(take(1)).subscribe(data => pageIndex = data);

    let dateTimeRange = this.dateTimeRangeService.getCurrentDateTimeRange();

    return {
      countryId: countryId,
      cityId: cityId,
      pageIndex: pageIndex,
      pageSize: bookingPointsPageSize,
      pickUpTime: dateTimeRange.pickUpDate,
      handOverTime: dateTimeRange.handOverDate
    };
  }
}
