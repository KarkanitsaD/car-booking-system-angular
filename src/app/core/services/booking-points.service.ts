import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";
import {BookingPointRequestModel} from "../../domain/models/booking-point/booking-point-request.model";
import {Observable} from "rxjs";
import {PaginationResponseModel} from "../../domain/models/pagination-response.model";
import {BookingPointModel} from "../../domain/models/booking-point/booking-point.model";
import {HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";

const bookingPoints = 'bookingPoints'

@Injectable()
export class BookingPointsService {
  constructor(private httpService: HttpService) {}

  public getBookingPointsPage(filter: BookingPointRequestModel): Observable<PaginationResponseModel<BookingPointModel>> {
    let params = new HttpParams();

    Object.entries(filter).forEach(function ([key, value]) {
      if(value !== null && value !== undefined) {
        if(value instanceof Date) {
          params = params.append(key, value.toJSON());
        }
        else {
          params = params.append(key, value);
        }
      }
    });

    return this.httpService.get<PaginationResponseModel<BookingPointModel>>(environment.api_url + bookingPoints, params);
  }
}
