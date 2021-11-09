import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() nameAuthor: string = '';
  @Input() srcImage: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() body: string = '';
  @Input() tag: any = [];
  @Input() checkLike: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
