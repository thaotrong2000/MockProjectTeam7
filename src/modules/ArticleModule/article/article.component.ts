import { Component, Input, OnInit } from '@angular/core';
import { MarkdownParserService } from 'src/core/services/markdown-parser.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [MarkdownParserService]
})
export class ArticleComponent implements OnInit {

  @Input() nameAuthor: string = '';
  @Input() srcImage: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() body: string = '';
  @Input() tag: any = [];
  @Input() checkLike: boolean = false;

  showTextBox: boolean = false;
  showMarkDown: boolean = false;
  convertedText!: any;

  constructor(private md: MarkdownParserService) { }

  ngOnInit(): void {
  }

  toggleTextBox() {
    this.showTextBox = !this.showTextBox;
  }

  toggleMarkDown() {
    this.showMarkDown = !this.showMarkDown;
  }

  updateOutput(mdText: string) {
    this.convertedText = this.md.convert(mdText);
  }

}
