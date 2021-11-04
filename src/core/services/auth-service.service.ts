import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  public login(): BehaviorSubject<any> {
    return this.http.get(
      'http://localhost:3000/api/user'
    ) as BehaviorSubject<any>;
  }
}
