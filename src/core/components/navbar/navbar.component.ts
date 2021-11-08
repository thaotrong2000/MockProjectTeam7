import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() checkLogin: boolean = false;
  @Input() newArticle: boolean = false;
  @Output() clickNewArticle: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public clickCheckNew(): void {
    this.clickNewArticle.emit(true);
  }
}
