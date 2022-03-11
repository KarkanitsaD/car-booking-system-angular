import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {hoursViewsValues, minutesViewsValues} from "../../core/constans/time-arrays-constans";

export interface DateTimeRangeModel {
  firstDate: Date;
  firstHours: number;
  firstMinutes: number;
  secondDate: Date;
  secondHours: number;
  secondMinutes: number;
}

@Component({
  selector: 'app-date-time-range-picker',
  templateUrl: './date-time-range-picker.component.html',
  styleUrls: ['./date-time-range-picker.component.scss']
})
export class DateTimeRangePickerComponent implements OnInit {

  @Input() dateTimeRange!: DateTimeRangeModel;
  @Output() dateTimeRangeChange: EventEmitter<DateTimeRangeModel> = new EventEmitter<DateTimeRangeModel>();

  public hoursViewsValues = hoursViewsValues;
  public minutesViewsValues = minutesViewsValues;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  public timeRangeChange(): void {
    this.dateTimeRangeChange.emit(this.dateTimeRange);
  }
}
