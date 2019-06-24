import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenResponse } from './token-response';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const TOKEN_STORAGE = 'TOKEN'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private http: HttpClient) { }

  getToken(): string {
    return localStorage.getItem(TOKEN_STORAGE)
  }

  setToken(token: string) {
    localStorage.setItem(TOKEN_STORAGE, token)
  }

  refreshToken(username: string, password: string): Observable<TokenResponse> {
    return this.http.post<TokenResponse>('kinograf/token', null, {
      headers: new HttpHeaders().set(
        "Authorization", `Basic ${this.basicAuth(username, password)}`
      )
    }).pipe(tap(
      res => this.setToken(res.token)
      ))
  }

  basicAuth(username: string, password: string): string {
    return btoa(`${username}:${password}`)
  }
}
