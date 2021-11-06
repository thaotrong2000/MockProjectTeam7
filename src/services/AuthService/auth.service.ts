import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public getToken(): Observable<any> {
    return this.http.post('http://localhost:3000/api/users/login', {
      user: {
        email: 'jake@jake.jake',
        password: 'jakejake',
      },
    });
  }
}
