import { NewArticleComponent } from './new-article/new-articlecomponent';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorArticleComponent } from './editor-article/editor-article.component';

const routes: Routes = [
  {
    path: 'editor',
    component: NewArticleComponent,
  },
  {
    path: 'editor/:articleid',
    component: EditorArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorRoutingModule {}
