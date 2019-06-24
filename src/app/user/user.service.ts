import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AuthenticationService
} from '../authentication/authentication.service';
import { Observable } from 'rxjs';
import { User } from './user';
import { map } from 'rxjs/operators';
import { RegisterResponse } from './register-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User

  constructor(
    private auth: AuthenticationService,
    private http: HttpClient
  ) {}

  register(username: string, password: string): Observable<User> {
    return this.http.post<RegisterResponse<User>>('kinograf/users', {
      username: username,
      password: password,
    }).pipe(map(
      (res: RegisterResponse<User>) => {
        this.auth.setToken(res.token)
        this.user = res.user
        return res.user
      }))
  }

  login(username: string, password: string): Promise<boolean> {
    return new Promise(resolve => {
      this.auth.refreshToken(username, password).subscribe(
        _res => resolve(true),
        _err => resolve(false) // probably want to pass this error forward
      )
    })
  }

  getUser(): User {
    return this.user
  }
}
