import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/core/services/store.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    if (this.storeService.getToken()) {
      console.log(
        '%cBạn đã đăng nhập - bạn ĐƯỢC PHÉP sử dụng Profile',
        'background: red; color: white'
      );
    } else {
      console.log(
        '%cBạn chưa đăng nhập - bạn KHÔNG được sử dụng ở Profile',
        'background: red; color: white'
      );
    }
  }
}
