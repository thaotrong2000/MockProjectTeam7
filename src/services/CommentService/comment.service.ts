import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl = 'http://localhost:3000/api';

  constructor(private readonly http: HttpClient) { }

  createComment(article: any, comment: any){
    return this.http.post(this.baseUrl + `/articles/:${article.slug}/comments`, comment);
  }

  getCommentFromArticle(article: any){
    return this.http.get(this.baseUrl + `/articles/:${article.slug}/comments`);
  }

  deleteComment(article: any, comment: any){
    return this.http.delete(this.baseUrl + `/articles/:${article.slug}/comments/:${comment.id}`);
  }
}
