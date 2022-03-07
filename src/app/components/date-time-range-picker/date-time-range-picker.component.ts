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

  @Input()dateTimeRange!: Date[];
  @Output()dateTimeRangeChange = new EventEmitter<Date[]>();

  public timeRange!: DateTimeRangeModel;
  public hoursViewsValues = hoursViewsValues;
  public minutesViewsValues = minutesViewsValues;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    let currentDate = new Date();

    let firstDate = new Date();
    firstDate.setDate(currentDate.getDate() + 1);

    let secondDate = new Date();
    secondDate.setDate(currentDate.getDate() + 2);

    this.timeRange = {
      firstDate: firstDate,
      firstHours: 10,
      firstMinutes: 0,
      secondDate: secondDate,
      secondHours: 19,
      secondMinutes: 0
    };
  }

  public timeRangeChange(): void {
    this.dateTimeRangeChange.emit(this.getDateTimeRange());
  }

  private getDateTimeRange(): Date[] {
    let firstDate = this.timeRange.firstDate;
    firstDate.setUTCHours(this.timeRange.firstHours);
    firstDate.setUTCMinutes(this.timeRange.firstMinutes);

    let secondDate = this.timeRange.secondDate;
    secondDate.setUTCHours(this.timeRange.secondHours);
    secondDate.setUTCMinutes(this.timeRange.secondMinutes);

    return [firstDate, secondDate];
  }
}
