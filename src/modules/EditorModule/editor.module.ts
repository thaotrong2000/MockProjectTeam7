import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor/editor.component';
import { EditorArticleComponent } from './editor-article/editor-article.component';
import { SharedModule } from '../SharedModule/shared.module';

@NgModule({
  declarations: [EditorComponent, EditorArticleComponent],
  imports: [CommonModule, EditorRoutingModule, SharedModule],
})
export class EditorModule {}
