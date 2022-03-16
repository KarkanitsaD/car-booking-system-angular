import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ApplicationStore} from "../../../store";
import {Observable} from "rxjs";
import {BookingPointModel} from "../../../domain/models/booking-point/booking-point.model";
import {
  bookingPointsPageIndexSelector, bookingsPointTotalCountSelector,
  filteredBookingPointsSelector
} from "../../../store/booking-points/booking-points.selectors";
import {bookingPointsPageSize} from "../../../core/constans/booking-points.constans";
import {PageEvent} from "@angular/material/paginator";
import {getBookingPointsPage, setBookingPointsPageIndex} from "../../../store/booking-points/booking-points.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-booking-points-page',
  templateUrl: './booking-points-page.component.html',
  styleUrls: ['./booking-points-page.component.scss']
})
export class BookingPointsPageComponent implements OnInit {

  public pageSize = bookingPointsPageSize;
  public initialPageIndex$ = this.store.select(bookingPointsPageIndexSelector);
  public bookingPointsTotalCount$ = this.store.select(bookingsPointTotalCountSelector);
  public bookingPointsTotalCount!: number;
  public bookingPoints$: Observable<BookingPointModel[]> = this.store.select(filteredBookingPointsSelector);
  public bookingPoints: BookingPointModel[] = [];

  constructor
  (
    private store: Store<ApplicationStore>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.bookingPoints$.subscribe(data => this.bookingPoints = data);
    this.bookingPointsTotalCount$.subscribe(data => this.bookingPointsTotalCount = data);
  }

  public onFilter(): void {
    this.store.dispatch(getBookingPointsPage());
  }

  public onPageChanged(event: PageEvent): void {
    this.store.dispatch(setBookingPointsPageIndex({pageIndex: event.pageIndex}));
    this.onFilter();
  }

  public onBookingPointSelected($event: string): void {
    debugger
    this.router.navigate(['bookingPoints/' + $event + '/cars']);
  }
}
