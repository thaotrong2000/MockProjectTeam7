import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  baseUrl = 'http://localhost:3000/api';

  constructor(private readonly http: HttpClient) { }

  //List Article Service

  getListArticles(){
    return this.http.get(this.baseUrl + '/articles');
  }

  getArticleByAuthor(authorname: any){
    return this.http.get(this.baseUrl + `/articles?author=${authorname}`);
  }

  getArticleByTag(tag: any){
    return this.http.get(this.baseUrl + `/articles?tag=${tag}`);
  }

  getArticleFavoriteByUsername(username: any){
    return this.http.get(this.baseUrl + `/articles?favorited=${username}`);
  }

  //Article Feed Service

  getArticleFeed(){
    return this.http.get(this.baseUrl + '/articles/feed');
  }

  getArticleBySlug(article: any){
    return this.http.get(this.baseUrl + `/articles/:${article.slug}`)
  }

  createArticle(article: any){
    return this.http.post(this.baseUrl + '/articles', article);
  }

  updateArticle(article: any){
    return this.http.put(this.baseUrl+`/articles/:${article.slug}`, article);
  }

  deleteArticle(article: any){
    this.http.delete(this.baseUrl + `/articles/:${article.slug}`);
  }

  favoriteArticle(article: any){
    return this.http.post(this.baseUrl + `articles/:${article.slug}/favorite`, article);
  }

  unfavoriteArticle(article: any){
    return this.http.delete(this.baseUrl + `articles/:${article.slug}/favorite`, article);
  }

}
