import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/AuthService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  public login(): void {
    this.authService.getToken().subscribe((data) => {
      localStorage.setItem('token', data.user.token);
      console.log('Login Success');
      this.router.navigate(['']);
    });
  }
}
