import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookingPointModel} from "../../../domain/models/booking-point/booking-point.model";

@Component({
  selector: 'app-booking-point-item',
  templateUrl: './booking-point-item.component.html',
  styleUrls: ['./booking-point-item.component.scss']
})
export class BookingPointItemComponent implements OnInit {

  @Input() bookingPoint: BookingPointModel = new BookingPointModel('00-000--00-00-0-0', 'First booking point', 'Belye Rosy 45', 'Belarus', 'Grodno');
  @Output() onBookingPointSelected = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {

  }

  onSeeCarsClick(): void {
    debugger
    this.onBookingPointSelected.emit(this.bookingPoint.id);
  }

}
