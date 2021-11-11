import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/core/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleHomeComponent } from 'src/core/components/article-home/article-home.component';

@NgModule({
  declarations: [NavbarComponent, ArticleHomeComponent],
  imports: [CommonModule, RouterModule, NgbModule, ReactiveFormsModule],
  exports: [NavbarComponent, NgbModule, ReactiveFormsModule, ArticleHomeComponent],
})
export class SharedModule {}
