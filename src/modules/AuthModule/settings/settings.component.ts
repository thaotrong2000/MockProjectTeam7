import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/core/services/store.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    if (this.storeService.getToken()) {
      console.log('%cBạn đã đăng nhập ', 'background: red; color: white');
    } else {
      console.log('%cBạn chưa đăng nhập ', 'background: red; color: white');
    }
  }
}
