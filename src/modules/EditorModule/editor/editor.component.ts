import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/services/ArticleService/article.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {}

  /**
   * Khi Click thêm bài viết mới
   * Created by: THAONT119
   * */
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
  }
}
