import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor/editor.component';
import { EditorArticleComponent } from './editor-article/editor-article.component';
import { SharedModule } from '../SharedModule/shared.module';
import { TagInputModule } from 'ngx-chips';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditorArticleComponent, EditorComponent],
  imports: [CommonModule, SharedModule, TagInputModule, FormsModule],
})
export class EditorModule {}
