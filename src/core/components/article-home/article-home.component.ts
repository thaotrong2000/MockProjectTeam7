import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommentService } from 'src/services/CommentService/comment.service';

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
  @Input() slug!: string;

  @Output() seeDetails: EventEmitter<any> = new EventEmitter();

  showComment: boolean = false;
  onHoverComment: boolean = false;

  commentsArr: any [] = [];

  constructor(private readonly cmtService: CommentService, private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.getAllComment();
  }

  public whenClickComment(): void {
    this.getAllComment();
  }

  public getAllComment(){
    this.cmtService.getCommentFromArticle(this.slug).subscribe(comments => {
      this.commentsArr = comments.comments;
      console.log('cmt', this.commentsArr);
    });
  }

  public onEnterComment(event: any): void {
    console.log(event.target.value);

    console.log('slug', this.slug);
    this.http.post(

        'http://localhost:3000/api/articles/hello-1-lc9xsy/comments',
        {
          comment: {
            body: event.target.value,
          },
        }
      ).subscribe((data) => {
        this.commentsArr.push(data)
      });

  }

  public clickSeeDeatils() {
    this.seeDetails.emit('Ban da chon che do xem');
  }

  deleteComment(comment: any){
    this.cmtService.deleteComment(this.slug, comment).subscribe((data) => {this.getAllComment()
    })
  }

}
