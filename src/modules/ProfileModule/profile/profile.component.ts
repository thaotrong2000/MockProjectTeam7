import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/core/services/store.service';
import { ArticleService } from 'src/services/ArticleService/article.service';
import { ProfileService } from 'src/services/ProfileService/profile.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from 'src/services/LoginService/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  public username: any;

  public currentUser: any;

  public profile: any = {}

  public checkMyArticleTab: boolean = true;

  public myListArticles: any[] = [];

  public myListFavoriteArticles: any[] = [];

  public following: boolean = false;

  public checkClickNew: boolean = true;

  public checkLogin: boolean = true;

  closeResult = '';

  public form!: FormGroup;

  constructor(private storeService: StoreService, private readonly profileService: ProfileService, private readonly loginService: LoginService,
    private readonly activatedRoute: ActivatedRoute, private articleService: ArticleService, private modalService: NgbModal, private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.storeService.getToken()) {
      console.log(
        '%cBạn đã đăng nhập - bạn ĐƯỢC PHÉP sử dụng Profile',
        'background: red; color: white'
      );

      this.activatedRoute.params.subscribe(username => {
        console.log('username' , username.username);

        this.username = username.username;
      })

      this.loginService.getCurrenUser().subscribe(user => {this.currentUser = user.user;
      console.log('curent user ;', this.currentUser);
      console.log('useser:', this.username);

      })
      this.getProfile();
      this.getArticleByAuthor();
      this.getArticleFavoriteByUsername();

      this.form = this.fb.group({
        image: [this.profile?.image],
        bio: [this.profile?.bio]
      })

    } else {
      console.log(
        '%cBạn chưa đăng nhập - bạn KHÔNG được sử dụng ở Profile',
        'background: red; color: white'
      );
    }
  }

  getProfile(){
    this.profileService.getProfileByUser(this.username).subscribe(profile => {this.profile = profile.profile;
    console.log('profile:::, ', this.profile);
    });
  }

  getArticleByAuthor(){
    this.articleService.getArticleByAuthor(this.username).subscribe(articles => {this.myListArticles = articles.articles;
    console.log('list: ', this.myListArticles);
    });
  }

  getArticleFavoriteByUsername(){
    this.articleService.getArticleFavoriteByUsername(this.username).subscribe(articles => this.myListFavoriteArticles = articles.articles)
  }

  public seeDetails($event: any): void {
    console.log($event);
    this.checkClickNew = true;
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  submit(){
    this.loginService.updateUser({
      "user": {
        "image": this.form.value.image,
        "bio": this.form.value.bio,
      }
    }).subscribe(user => {
      this.profile = user.user;
      console.log('update user;', this.profile)
    })
  }
}
