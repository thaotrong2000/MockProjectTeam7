import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/core/models/article';
import { ArticleService } from 'src/services/ArticleService/article.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {

  public articles: Article[] = [];

  public formGroup!: FormGroup;

  checkNew: boolean = true;

  constructor(private articleService: ArticleService, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      title: this.fb.control('', [Validators.required]),
      description: this.fb.control('', [Validators.required]),
      body: this.fb.control('', [Validators.required]),
      tags: this.fb.array([])
    });
  }

  get tags(): FormArray{
    return this.formGroup.controls['tags'] as FormArray;
  }

  addTags(): void{
    this.tags.push(this.fb.control('', [Validators.required]))
  }

  // onSubmit(form: FormGroup): void {
  //   if(this.formGroup.invalid){
  //     alert("Form is invalid");
  //     return;
  //   }
  //   console.log(this.formGroup)
  //   this.articleService.createArticle(form.value);
  //   this.cancel();
  // }

  cancel() {
    this.formGroup.reset();
    this.router.navigate(['/']);
  }

  clearTag(i: any){
    this.tags.removeAt(i);
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
