<<<<<<< HEAD
import { NewArticleComponent } from './new-article/new-articlecomponent';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorArticleComponent } from './editor-article/editor-article.component';
=======
import { EditorArticleComponent } from './editor-article/editor-article.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
>>>>>>> master

const routes: Routes = [
  {
    path: 'editor',
<<<<<<< HEAD
    component: NewArticleComponent,
=======
    component: EditorComponent,
>>>>>>> master
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
