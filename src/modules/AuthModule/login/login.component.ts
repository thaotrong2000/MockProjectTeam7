import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public email!: string;
  public password!: any;

  public checkSubmit(ngForm: NgForm): void {
    if (ngForm.invalid) {
      alert('Form is invalid');
    } else {
      alert('Form is submitted');
    }
  }

}
