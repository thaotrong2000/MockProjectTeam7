import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { NewArticleComponent } from './new-article/new-articlecomponent';
import { EditorComponent } from './editor/editor.component';
import { EditorArticleComponent } from './editor-article/editor-article.component';
import { SharedModule } from '../SharedModule/shared.module';
import { TagInputModule } from 'ngx-chips';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewArticleComponent, EditorArticleComponent, EditorComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
    SharedModule,
    TagInputModule,
    FormsModule,
  ],
})
export class EditorModule {}
