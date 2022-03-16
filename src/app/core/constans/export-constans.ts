import {AuthService} from "../services/auth.service";
import {HttpService} from "../services/http.service";
import {BookingPointsService} from "../services/booking-points.service";

export const serviceDeclarations =
  [
    HttpService,
    AuthService,
    BookingPointsService
  ];
