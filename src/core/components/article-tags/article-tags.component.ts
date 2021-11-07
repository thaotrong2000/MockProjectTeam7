import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-tags',
  templateUrl: './article-tags.component.html',
  styleUrls: ['./article-tags.component.css'],
})
export class ArticleTagsComponent implements OnInit {
  @Input() nameTag: string = '';
  constructor() {}

  ngOnInit(): void {}
}
