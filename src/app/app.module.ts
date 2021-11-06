import { ArticleModuleModule } from './../modules/ArticleModule/article-module.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from 'src/core/interceptor/token.interceptor';
import { AuthModule } from 'src/modules/AuthModule/auth.module';
import { HomeModule } from 'src/modules/HomeModule/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileModule } from 'src/modules/ProfileModule/profile.module';
import { EditorModule } from 'src/modules/EditorModule/editor.module';
import { SharedModule } from 'src/modules/SharedModule/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AuthModule,
    HomeModule,
    NgbModule,
    ProfileModule,
    EditorModule,
    ArticleModuleModule,
    SharedModule,
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
