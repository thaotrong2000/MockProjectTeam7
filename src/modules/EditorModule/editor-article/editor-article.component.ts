import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormArray, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from 'src/services/ArticleService/article.service';
=======
>>>>>>> master

@Component({
  selector: 'app-editor-article',
  templateUrl: './editor-article.component.html',
  styleUrls: ['./editor-article.component.css']
})
export class EditorArticleComponent implements OnInit {

<<<<<<< HEAD
  constructor(private articleService: ArticleService, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {

  }

  public submitArticle(): void {
    this.articleService
      .createArticle(
        // Fake 1 dữ liệu để demo
        {
          article: {
            title: 'toi la thao',
            description: 'Ever wonder how?',
            body: 'You have to believe',
            tagList: ['reactjs', 'angular', 'dragons'],
          },
        }
      )
      .subscribe((data) => {
        console.log(data);
      });
=======
  constructor() { }

  ngOnInit(): void {
>>>>>>> master
  }

}
