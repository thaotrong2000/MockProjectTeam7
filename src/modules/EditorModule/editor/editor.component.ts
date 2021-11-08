import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/core/models/article';
import { ArticleService } from 'src/services/ArticleService/article.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  formGroup = this.fb.group({
    title: [''],
    description: [''],
    body: [''],
    tags: this.fb.array([this.fb.control('')]),
  });

  valueOfTags: Array<number | string> = [];

  public articles: Article[] = [];

  checkNew: boolean = true;

  constructor(
    private articleService: ArticleService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}

  get tags(): FormArray {
    return this.formGroup.get('tags') as FormArray;
  }

  addTags($event: any) {
    this.tags.push(this.fb.control($event.value));
    this.valueOfTags.push($event.value);
    console.log(this.tags.value);
  }

  removeElement($event: any) {
    console.log('Remove ' + $event);
    var indexRemove = this.tags.value.indexOf($event);
    this.tags.removeAt(indexRemove);
    console.log(this.tags.value);
  }

  removeTags(index: number) {
    this.tags.removeAt(index);
  }

  cancel() {
    this.formGroup.reset();
    this.router.navigate(['/']);
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
  }
}
