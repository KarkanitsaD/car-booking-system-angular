import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

const headersConfig = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({setHeaders: headersConfig});
    return next.handle(req);
  }
}
