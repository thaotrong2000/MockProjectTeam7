import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleModuleRoutingModule } from './article-module-routing.module';
import { ArticleComponent } from './article/article.component';
import { SharedModule } from '../SharedModule/shared.module';

@NgModule({
  declarations: [ArticleComponent],
  imports: [CommonModule, ArticleModuleRoutingModule, SharedModule],
})
export class ArticleModuleModule {}
