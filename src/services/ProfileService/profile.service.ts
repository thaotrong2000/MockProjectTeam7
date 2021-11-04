import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUrl = 'http://localhost:3000/api';

  constructor(private readonly http: HttpClient) { }

  getProfileByUser(username: any){
    return this.http.get(this.baseUrl + `/:${username}`);
  }

  // call api follow ???

}
