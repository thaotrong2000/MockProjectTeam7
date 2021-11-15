import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/core/services/store.service';
import { ArticleService } from 'src/services/ArticleService/article.service';
import { ProfileService } from 'src/services/ProfileService/profile.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from 'src/services/LoginService/login.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public username: any;

  public profile: any = {};

  public checkMyArticleTab: boolean = true;

  public myListArticles: any[] = [];

  public myListFavoriteArticles: any[] = [];

  public checkUser: boolean = true;

  public checkClickNew: boolean = true;

  public checkLogin: boolean = true;

  closeResult = '';

  checkFollowChange: Subject<any> = new Subject();

  public form!: FormGroup;

  public limit: number = 10;

  public offset: number = 0;

  constructor(
    private storeService: StoreService,
    private readonly profileService: ProfileService,
    private readonly loginService: LoginService,
    private readonly activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    if (this.storeService.getToken()) {
      console.log(
        '%cBạn đã đăng nhập - bạn ĐƯỢC PHÉP sử dụng Profile',
        'background: red; color: white'
      );

      this.activatedRoute.params.subscribe((username) => {
        console.log('username', username.username);

        this.username = username.username;
      });
      this.getProfile();
      this.getArticleByAuthor();

      this.form = this.fb.group({
        image: [this.profile?.image],
        bio: [this.profile?.bio],
      });
    } else {
      console.log(
        '%cBạn chưa đăng nhập - bạn KHÔNG được sử dụng ở Profile',
        'background: red; color: white'
      );
    }

    // Fix conflict follow
    // Fix conflict follow:
    this.storeService.getCheckFollow().subscribe((data) => {
      console.log('da thay doi follow');
      console.log('kiem tra su thay doi cua du lieu');
      console.log(data);
      this.myListFavoriteArticles.map((article) => {
        if (article.author.username == data.user) {
          article.author.following = data.statusFollow;
          console.log('thay doi thanh cong');
        }
      });
    });
  }

  getProfile() {
    this.profileService.getProfileByUser(this.username).subscribe((profile) => {
      this.profile = profile.profile;
      console.log('profile:::, ', this.profile);
    });
  }

  getArticleByAuthor() {
    this.articleService
      .getArticleByAuthor(this.username, this.limit, this.offset)
      .subscribe((articles) => {
        this.myListArticles = articles.articles;
        console.log('list: ', this.myListArticles);
      });
  }

  getArticleFavoriteByUsername() {
    this.articleService
      .getArticleFavoriteByUsername(this.username, this.limit, this.offset)
      .subscribe((articles) => {
        console.log(articles);
        this.myListFavoriteArticles = articles.articles;
      });
  }

  public seeDetails($event: any): void {
    console.log($event);
    this.checkClickNew = true;
  }

  public open(content: any) {
    console.log('coonten: ', content);

    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public submit() {
    this.loginService
      .updateUser({
        user: {
          image: this.form.value.image,
          bio: this.form.value.bio,
        },
      })
      .subscribe((user) => {
        this.profile = user.user;
        console.log('update user;', this.profile);
      });
  }

  public clickMyArticle(): void {
    this.offset = 0;
    console.log('Hãy gọi lại dữ liệu sau khi tôi thay đổi');
    this.getArticleFavoriteByUsername();
  }

  @HostListener('window:scroll', ['$event'])
  public onScroll() {
    // Cộng thêm 56 - vì 56 là chiều cao cố định của Navbar

    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight + 56
    ) {
      this.offset += 10;
      // Load Your Data Here
      // Nếu là My article:
      if (this.checkMyArticleTab) {
        this.articleService
          .getArticleByAuthor(this.username, this.limit, this.offset)
          .subscribe((articles) => {
            for (const article of articles.articles) {
              this.myListArticles.push(article);
            }
          });
      } else {
        this.articleService
          .getArticleFavoriteByUsername(this.username, this.limit, this.offset)
          .subscribe((articles) => {
            console.log(articles);
            if (articles.articles.length > 0) {
              for (const article of articles.articles) {
                this.myListFavoriteArticles.push(article);
              }
            }
          });
      }
    }
  }
}
