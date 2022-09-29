import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './component/article/article.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LikeComponent } from './component/like/like.component';
import { NavComponent } from './component/nav/nav.component';
import { FootComponent } from './component/foot/foot.component';
import { TodoComponent } from './component/todo/todo.component';
import { TestingComponent } from './component/testing/testing.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    LikeComponent,
    NavComponent,
    FootComponent,
    TodoComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
