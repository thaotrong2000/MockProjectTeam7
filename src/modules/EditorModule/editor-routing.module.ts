import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorArticleComponent } from './editor-article/editor-article.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
  {
    path: 'editor',
    component: EditorComponent,
  },
  {
    path: 'editor/:article-slug-here',
    component: EditorArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorRoutingModule {}
