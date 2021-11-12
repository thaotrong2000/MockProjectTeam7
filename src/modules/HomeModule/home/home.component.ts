import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ArticleService } from 'src/services/ArticleService/article.service';

import { StoreService } from 'src/core/services/store.service';
import { HomeService } from 'src/services/HomeService/home.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/LoginService/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('mainScreen') elementView: ElementRef = new ElementRef('demo');
  @ViewChild('someVar') el: ElementRef = new ElementRef('demo1');
  @ViewChild('demo') elDemo: ElementRef = new ElementRef('demo2');

  viewHeight: number = 0;

  tags: Array<any> = [];

  articlesArray: any = [];

  limit: number = 10;

  offset: number = 0;

  array: any = [];

  Articles: Array<any> = [];

  paginationArticle: any = [];

  checkLogin: boolean = false;

  checkStatusFeed: boolean = false;

  checkTabActive: number = 0;

  checkClickNew: boolean = false;

  checkContent: number = 1;

  userNameCurrent: string = '';

  constructor(
    private readonly articleService: ArticleService,
    private storeService: StoreService,
    private homeService: HomeService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.checkStatusLogin();
    this.getListTags();

    this.loginService.getCurrenUser().subscribe((data) => {
      this.userNameCurrent = data.user.username;
    });

    this.storeService.getTokenCurrent().subscribe((data) => {
      if (data) {
        this.checkLogin = true;
      } else {
        this.checkLogin = false;
      }
    });
    console.log(this.checkLogin);

    if (this.checkLogin) {
      this.whenStatusFeed();
    } else {
      this.whenStatusGlobal();
    }

    this.storeService.setUrlCurrent(this.router.url);
    this.storeService.getUrlCurrent().subscribe((data) => console.log(data));

    this.storeService.getUrlCurrent().subscribe((data) => {
      if (data == '/') {
        this.checkClickNew = false;
      } else {
        this.checkClickNew = true;
      }
    });
  }

  /**
   * Sử dụng Scroll trong Angular
   * Created by: THAONT119
   * */
  ngAfterViewInit(): void {
    this?.el?.nativeElement.addEventListener('scroll', () => {
      this.onScroll();
    });
  }

  /**
   * Khi chọn trạng thái là Global
   * Created by: THAONT119
   * */
  public whenStatusGlobal(): void {
    // Tự động lấy 10 bài viết Global khi chưa Login
    this.Articles = [];
    this.articleService
      .getArticleLimitAndOffset(this.limit, this.offset)
      .subscribe((articles) => {
        this.Articles = articles.articles;
        console.log(this.Articles);
      });

    this.checkStatusFeed = false;
  }

  /**
   * Khi trạng thái là Feed
   * Created by: THAONT119
   * */
  public whenStatusFeed(): void {
    this.Articles = [];
    this.checkStatusFeed = true;
    // Lấy bài viết của những người đang theo dõi
    this.getFeedArticles();
  }

  /**
   * Xử lý sự kiện: Load thêm dữ liệu khi kéo đến cuối trang
   * Created by: THAONT119 && GIANGNT67
   * */
  public onScroll() {
    // Cộng thêm 56 - vì 56 là chiều cao cố định của Navbar
    if (
      window.innerHeight ==
      this.elDemo.nativeElement.getBoundingClientRect().top
    ) {
      // Mỗi khi kéo xuống vị trị BOTTOM(cuối cùng của trang web)
      // Sẽ gọi thêm dữ liệu để đưa vào trang web
      this.offset += 10;

      if (this.checkStatusFeed == false) {
        this.articleService
          .getArticleLimitAndOffset(this.limit, this.offset)
          .subscribe((articles) => {
            // Nếu có dữ liệu trả về - thì add nó vào Articles
            // để cập nhật cho người dùng
            if (articles.articles?.length) {
              console.log(articles.articles);
              for (const article of articles.articles) {
                this.Articles.push(article);
              }
            }
          });
      }
    }
  }

  /**
   * Kiểm tra trạng thái Login
   * checkLogin: True - đã login, False - chưa login
   * Created by: THAONT119
   * */
  public checkStatusLogin(): void {
    if (this.storeService.getToken()) {
      this.checkLogin = true;
    } else {
      this.checkLogin = false;
    }
  }

  /**
   * Lấy toàn bộ Articles (Global)
   * Created by: GIANGNT67
   * */
  public getListArticlesGlobal() {
    this.articleService.getListArticles().subscribe((articles) => {
      console.log('list:', articles.articles);
      this.articlesArray = articles.articles;
    });
  }

  /**
   * Lấy toàn bộ Tags
   * Created by: THAONT119
   * */
  public getListTags(): void {
    this.homeService.getTags().subscribe((data) => {
      this.tags = data.tags;
      // Console - hiển thị ra tất cả các Tags hiện có
      console.log(this.tags);
    });
  }

  /**
   * Lấy toàn bộ bài viết - của những người mình đang follow
   * Created by: THAONT119
   * */
  public getFeedArticles(): void {
    this.articleService.getArticleFeed().subscribe((data) => {
      console.log(data);
      this.Articles = data.articles;
    });
  }

  /**
   * Khi click vào New Article
   * Created by: THAONT119
   *
   **/
  public checkDemo($event: any): void {
    this.checkClickNew = $event;
  }

  public seeDetails($event: any): void {
    console.log($event);
    this.checkClickNew = true;
  }
}
