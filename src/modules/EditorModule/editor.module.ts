import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { NewArticleComponent } from './new-article/new-articlecomponent';
import { EditorArticleComponent } from './editor-article/editor-article.component';
import { SharedModule } from '../SharedModule/shared.module';

@NgModule({
  declarations: [NewArticleComponent, EditorArticleComponent],
  imports: [CommonModule, EditorRoutingModule, SharedModule],
})
export class EditorModule {}
