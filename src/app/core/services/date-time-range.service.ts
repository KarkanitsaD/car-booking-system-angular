import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {ApplicationStore} from "../../store";
import {DateTimeRangeModel} from "../../domain/models/date-time-range/date-time-range.model";
import {dateTimeRangeSelector} from "../../store/date-time-range/date-time-range.selectors";
import {take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DateTimeRangeService {

  constructor
  (
    private store: Store<ApplicationStore>
  ) {}

  public getCurrentDateTimeRange() {
    let dateTimeRange!: DateTimeRangeModel;

    this.store.select(dateTimeRangeSelector).pipe(take(1)).subscribe(data => dateTimeRange = data);

    let pickUpDate = new Date();
    pickUpDate.setDate(dateTimeRange.firstDate.getDate());
    pickUpDate.setUTCHours(dateTimeRange.firstHours);
    pickUpDate.setUTCMinutes(dateTimeRange.firstMinutes);
    pickUpDate.setUTCSeconds(0);

    let handOverDate = new Date();
    handOverDate.setDate(dateTimeRange.secondDate.getDate());
    handOverDate.setUTCHours(dateTimeRange.secondHours);
    handOverDate.setUTCMinutes(dateTimeRange.secondMinutes);
    handOverDate.setUTCSeconds(0);

    return {pickUpDate: pickUpDate, handOverDate: handOverDate};
  }
}
