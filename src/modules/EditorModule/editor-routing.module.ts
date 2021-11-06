import { EditorArticleComponent } from './editor-article/editor-article.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
  {
    path: 'editor',
    component: EditorComponent,
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
