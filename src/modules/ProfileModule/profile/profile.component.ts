import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/core/services/store.service';
import { ArticleService } from 'src/services/ArticleService/article.service';
import { ProfileService } from 'src/services/ProfileService/profile.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  public username: any;

  public profile: any = {}

  public checkMyArticleTab: boolean = true;

  public myListArticles: any[] = [];

  public myListFavoriteArticles: any[] = [];

  public checkUser: boolean = true;

  public checkClickNew: boolean = true;

  public checkLogin: boolean = true;

  closeResult = '';

  constructor(private storeService: StoreService, private readonly profileService: ProfileService,
    private readonly activatedRoute: ActivatedRoute, private articleService: ArticleService, private modalService: NgbModal) {}

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
      this.getProfile();
      this.getArticleByAuthor();
      this.getArticleFavoriteByUsername();
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

  // clickEditProfile(profile: any){
  //   console.log('profile:', profile);

  // }

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
}
