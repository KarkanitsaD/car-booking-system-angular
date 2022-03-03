import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }

  get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.httpClient.get<T>(path, { params });
  }

  post<T>(path: string, body: Object = new Object()): Observable<T> {
    return this.httpClient.post<T>(path, JSON.stringify(body));
  }

  put<T>(path: string, body: Object = {}): Observable<T> {
    return this.httpClient.put<T>(path, JSON.stringify(body));
  }

  delete<T>(path: string): Observable<T> {
    return this.httpClient.delete<T>(path);
  }
}
