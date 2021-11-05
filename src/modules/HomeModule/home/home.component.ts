import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  demoArray: Array<any> = [0, 1, 2, 3, 4];
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event']) // for window scroll events
  public onScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      console.log('Bạn đã load thêm vài dữ liệu');
      this.demoArray.push(5, 6, 7, 8, 9);
    }
  }
}
