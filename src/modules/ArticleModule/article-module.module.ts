import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleModuleRoutingModule } from './article-module-routing.module';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [ArticleComponent],
  imports: [CommonModule, ArticleModuleRoutingModule],
})
export class ArticleModuleModule {}
