import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { OMDbService } from '../omdb/omdb.service';
import { AuthenticationService } from './authentication.service';
import { URLService } from '../url.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthenticationService,
    private url: URLService
  ) {}

  intercept(
      req: HttpRequest<any>,
      next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // If the URL used is for OMDb we do not need any auth headers
    if (this.url.isOMDbRequest(req))
      return next.handle(req)

    // If the request already has an Authorization haeder we do nothing
    if (req.headers.get("Authorization") != null)
      return next.handle(req)

    return next.handle(req.clone({
      setHeaders: {
        "Authorization": `Token ${this.auth.getToken()}`
      }
    }))
  }
}
