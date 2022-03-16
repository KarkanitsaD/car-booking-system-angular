import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {Observable} from "rxjs";
import {PaginationResponseModel} from "../../domain/models/pagination-response.model";
import {CarModel} from "../../domain/models/car/car.model";
import {CarRequestModel} from "../../domain/models/car/car-request.model";
import {HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";

const cars = 'cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private httpService: HttpService) { }

  public getCarsPage(filter: CarRequestModel): Observable<PaginationResponseModel<CarModel>> {
    let params = new HttpParams();

    Object.entries(filter).forEach(function ([key, value]) {
      if(value) {
        if(value instanceof Date) {
          params = params.append(key, value.toJSON());
        }
        else {
          params = params.append(key, value);
        }
      }
    });

    return this.httpService.get<PaginationResponseModel<CarModel>>(environment.api_url + cars, params);
  }
}
