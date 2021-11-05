import { Component, HostListener, OnInit } from '@angular/core';
import { StoreService } from 'src/core/services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  demoArray: Array<any> = [0, 1, 2, 3, 4];
  checkLogin: boolean = false;
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.checkStatusLogin();
    if (this.checkLogin) {
      console.log('Bạn đã đăng nhập');
    } else {
      console.log('Bạn chưa đăng nhập');
    }
  }

  public checkStatusLogin(): void {
    if (this.storeService.getToken()) {
      this.checkLogin = true;
    } else {
      this.checkLogin = false;
    }
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  public onScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      console.log('Bạn đã load thêm vài dữ liệu');
      this.demoArray.push(5, 6, 7, 8, 9);
    }
  }
}
