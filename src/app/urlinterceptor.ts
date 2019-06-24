import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLService } from './url.service';

@Injectable()
export class URLInterceptor implements HttpInterceptor {

  constructor(private url: URLService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const [api, endpoint] = req.url.split('/')
    return next.handle(req.clone({
      url: `${this.url.getURL(api) || api }${endpoint}`
    }))
  }
}
