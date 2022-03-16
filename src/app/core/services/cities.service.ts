import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {CityModel} from "../../domain/models/city/city.model";

const cities = 'cities';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor
  (
    private httpService: HttpService,
  ) {}

  public getAllCities(): Observable<CityModel[]> {
    return this.httpService.get<CityModel[]>(environment.api_url + cities);
  }
}
