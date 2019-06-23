import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { OMDbService } from './omdb/omdb.service';

@Injectable()
export class URLInterceptor implements HttpInterceptor {

  private API_URL: string = "http://localhost:3000/api"

  constructor(private omdb: OMDbService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // No not touch OMDb requests
    if (this.omdb.isOMDbRequest(req))
      return next.handle(req)

    return next.handle(req.clone({
      url: `${this.API_URL}${req.url}`
    }))
  }
}
