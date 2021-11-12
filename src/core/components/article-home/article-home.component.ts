import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleService } from 'src/services/ArticleService/article.service';
import { CommentService } from 'src/services/CommentService/comment.service';
import { ProfileService } from 'src/services/ProfileService/profile.service';

@Component({
  selector: 'app-article-home',
  templateUrl: './article-home.component.html',
  styleUrls: ['./article-home.component.css'],
})
export class ArticleHomeComponent implements OnInit {
  @Input() nameAuthor: string = '';
  @Input() srcImage: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() body: string = '';
  @Input() tag: any = [];
  @Input() checkLike: boolean = false;
  @Input() slug: string = '';
  @Input() checkLogin: boolean = false;
  @Input() userNameCurrent: string = '';
  @Input() following: boolean = false;
  @Input() favorited: boolean = false;

  @Output() seeDetails: EventEmitter<any> = new EventEmitter();

  showComment: boolean = false;
  onHoverComment: boolean = false;

  commentsArr = [
    {
      comment: {
        id: 1,
        createdAt: '2016-02-18T03:22:56.637Z',
        updatedAt: '2016-02-18T03:22:56.637Z',
        body: 'It takes a Jacobian',
        author: {
          sername: 'jake',
          bio: 'I work at statefarm',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnW7uM2F7bUoR8-9-0k8QzBKbSPLingPcIg&usqp=CAU',
          following: false,
        },
      },
    },
    {
      comment: {
        id: 1,
        createdAt: '2016-02-18T03:22:56.637Z',
        updatedAt: '2016-02-18T03:22:56.637Z',
        body: 'It takes a Jacobian hhhhhd sidd siwi wos shdd iwwbd iwdw iiwhe iibs ciww diwhdwd idhjd is d djd s djsbs  dsjd ddd dd',
        author: {
          sername: 'jake',
          bio: 'I work at statefarm',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd5qJ4SWHpb2RTJIe9aRvNTIydFEVFmos_6Q&usqp=CAU',
          following: false,
        },
      },
    },
    {
      comment: {
        id: 1,
        createdAt: '2016-02-18T03:22:56.637Z',
        updatedAt: '2016-02-18T03:22:56.637Z',
        body: 'It takes a Jacobian',
        author: {
          sername: 'jake',
          bio: 'I work at statefarm',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtCkXkwzwaNLDmVKoP-Lny_MtQ0PoMzgndMw&usqp=CAU',
          following: false,
        },
      },
    },
  ];

  constructor(
    private readonly cmtService: CommentService,
    private profileService: ProfileService,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {}

  public whenClickComment(): void {}

  public onEnterComment(): void {
    this.cmtService
      .createComment(this.slug, { comment: { body: 'Create Comment' } })
      .subscribe((comment) => console.log('cmt::', comment.body));
  }

  public clickSeeDeatils() {
    this.seeDetails.emit('Ban da chon che do xem');
  }

  public followUsername(): void {
    if (this.following) {
      this.profileService
        .unfollowUsername(this.nameAuthor)
        .subscribe((data) => {
          console.log(data);
        });
    } else {
      this.profileService
        .followUsername(this.nameAuthor)
        .subscribe((data) => console.log(data));
    }

    this.following = !this.following;
  }

  public likeArticle(): void {
    if (this.favorited) {
      this.articleService
        .favoriteArticle(this.slug)
        .subscribe((data) => console.log(data));
    } else {
      this.articleService.unfavoriteArticle(this.slug).subscribe((data) => {
        console.log(data);
      });
    }
  }
}
