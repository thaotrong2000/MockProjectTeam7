import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-article-tags',
  templateUrl: './article-tags.component.html',
  styleUrls: ['./article-tags.component.css'],
})
export class ArticleTagsComponent implements OnInit {
  @Input() nameTag: string = '';
  clickTag: boolean = false;
  @Input() checkTag: BehaviorSubject<any> = new BehaviorSubject(false);
  @Output() clickTagChange: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.checkTag.subscribe((data) => {
      console.log(data);
      this.clickTag = data;
    });
  }

  public demoClick(): void {
    this.clickTag = !this.clickTag;
  }
}
