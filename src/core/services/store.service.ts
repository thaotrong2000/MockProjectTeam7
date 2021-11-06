import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  tokenAuth: string | null = 'demo';
  constructor() {
    this.tokenAuth = localStorage.getItem('token');
  }

  public getToken(): string {
    return this.tokenAuth || '';
  }

  public setToken(valueToken: string): void {
    this.tokenAuth = valueToken;
    console.log(this.tokenAuth);
  }
}
