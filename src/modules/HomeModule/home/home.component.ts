import { Component, HostListener, OnInit } from '@angular/core';
import { ArticleService } from 'src/services/ArticleService/article.service';

import { StoreService } from 'src/core/services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  articlesArray: any = [];

  limit: number = 10;

  offset: number = 0;

  array: any = [];

  demoArr: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  paginationArticle: any = [];

  demoArray: Array<any> = [0, 1, 2, 3, 4];
  checkLogin: boolean = false;

  constructor(
    private readonly articleService: ArticleService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    // this.getListArticlesGlobal();
    this.articleService
      .getArticleLimitAndOffset(this.limit, this.offset)
      .subscribe((articles) => {
        this.paginationArticle = articles;
        console.log('pagi', this.paginationArticle);
      });

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
      this.limit += 10;
      this.offset += 10;
      console.log('Bạn đã load thêm vài dữ liệu');

      this.articleService
        .getArticleLimitAndOffset(this.limit, this.offset)
        .subscribe((articles) => {
          this.paginationArticle = articles;
          console.log('pagination', this.paginationArticle);
        });
      this.demoArr.push(10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);
    }
  }

  public getListArticlesGlobal() {
    this.articleService.getListArticles().subscribe((articles) => {
      console.log('list:', articles.articles);
      this.articlesArray = articles.articles;
    });
  }
}
