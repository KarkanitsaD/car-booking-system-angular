import {CityModel} from "../../domain/models/city/city.model";
import {CountryModel} from "../../domain/models/country/country.model";

export const locationState = 'location';

export interface LocationState {
  cities: CityModel[];
  citiesLoaded: boolean;
  countries: CountryModel[];
  countriesLoaded: boolean;
}

export const initialLocationState: LocationState = {
  cities: [],
  citiesLoaded: false,
  countries: [],
  countriesLoaded: false
};
