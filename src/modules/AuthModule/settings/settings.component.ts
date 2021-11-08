import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/core/services/store.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  public name!: string;
  public image!: string;
  public email!: string;
  public password!: number;
  public message!: any;

  constructor(private storeService: StoreService, private router: Router) {}

  ngOnInit(): void {
    if (this.storeService.getToken()) {
      console.log('%cBạn đã đăng nhập ', 'background: red; color: white');
    } else {
      console.log('%cBạn chưa đăng nhập ', 'background: red; color: white');
    }
  }

  logOut(): void {
    localStorage.removeItem('token');
    this.storeService.setTokenCurrent(localStorage.getItem('token'));
    this.router.navigate(['/']);
  }
}
