import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StoreService } from 'src/core/services/store.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public name!: string;
  public email!: string;
  public pass!: any;
  public passConfirm!: any;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    if (this.storeService.getToken()) {
      console.log(
        '%cBạn đã đăng nhập, bạn KHÔNG ĐƯỢC ở mục register!',
        'background: red; color: white'
      );
    } else {
      console.log(
        '%cBạn chưa đăng nhập - bạn ĐƯỢC PHÉP sử dụng ở Register',
        'background: red; color: white'
      );
    }
  }

  checkRegister(ngForm: NgForm): void{

  }
}
