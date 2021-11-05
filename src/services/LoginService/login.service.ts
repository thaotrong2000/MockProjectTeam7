import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  logedIn: boolean = false;

  token: string = '';

  user: any = {};

  baseUrl = 'http://localhost:3000/api';

  constructor(private readonly http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    return this.http.post(this.baseUrl + '/users', user);
  }

  loginWithAuth(user: any): Observable<any> {
    return this.http.post(this.baseUrl + '/users/login', user);
  }

  logInSuccess(user: any) {
    this.logedIn = true;
    this.user = user;
    this.token = user.token;
  }

  getCurrenUser() : Observable<any>{
    return this.http.get(this.baseUrl + '/user');
  }

  updateUser(user: any) : Observable<any>{
    return this.http.put(this.baseUrl + '/user', user);
  }
}
