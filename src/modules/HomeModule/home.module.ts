import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ArticleHomeComponent } from 'src/core/components/article-home/article-home.component';
import { ArticleNewsComponent } from 'src/core/components/article-news/article-news.component';
import { ArticleTagsComponent } from 'src/core/components/article-tags/article-tags.component';
import { SharedModule } from '../SharedModule/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    ArticleHomeComponent,
    ArticleNewsComponent,
    ArticleTagsComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
