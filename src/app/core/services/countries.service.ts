import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {Observable} from "rxjs";
import {CountryModel} from "../../domain/models/country/country.model";
import {environment} from "../../../environments/environment";

const countries = 'countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor
  (
    private httpService: HttpService,
  ) {}

  public getAllCountries(): Observable<CountryModel[]> {
    return this.httpService.get<CountryModel[]>(environment.api_url + countries);
  }
}
