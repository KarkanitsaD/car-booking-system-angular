import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {hoursViewsValues, minutesViewsValues} from "../../core/constans/time-arrays-constans";
import {DateTimeRangeModel} from "../../domain/models/date-time-range/date-time-range.model";

@Component({
  selector: 'app-date-time-range-picker',
  templateUrl: './date-time-range-picker.component.html',
  styleUrls: ['./date-time-range-picker.component.scss']
})
export class DateTimeRangePickerComponent implements OnInit {

  @Input() range!: DateTimeRangeModel;
  @Input() dateTimeRange!: DateTimeRangeModel;
  @Output() dateTimeRangeChange: EventEmitter<DateTimeRangeModel> = new EventEmitter<DateTimeRangeModel>();

  public hoursViewsValues = hoursViewsValues;
  public minutesViewsValues = minutesViewsValues;

  constructor() { }

  ngOnInit(): void {
    this.range = {
      firstDate: this.dateTimeRange.firstDate,
      firstHours: this.dateTimeRange.firstHours,
      firstMinutes: this.dateTimeRange.firstMinutes,
      secondDate: this.dateTimeRange.secondDate,
      secondHours: this.dateTimeRange.secondHours,
      secondMinutes: this.dateTimeRange.secondMinutes
    }
  }

  public timeRangeChange(): void {
    this.dateTimeRangeChange.emit(this.range);
  }
}
