import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from 'src/core/services/store.service';
import { AuthService } from 'src/services/AuthService/auth.service';
import { LoginService } from 'src/services/LoginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private storeService: StoreService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginService.setCheckRouterLogin(true);
  }

  public email!: string;
  public password!: any;

  public checkSubmit(ngForm: NgForm): void {
    this.authService.getToken().subscribe((data) => {
      localStorage.setItem('token', data.user.token);
      if (localStorage.getItem('token')) {
        this.router.navigate(['']);
      }
      this.storeService.setToken(data.user.token);
    });
  }
}
