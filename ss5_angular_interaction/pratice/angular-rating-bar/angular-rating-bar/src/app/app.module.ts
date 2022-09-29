import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RatingBarComponent} from "./rating-bar/rating-bar.component";
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
  declarations: [
    AppComponent,
    RatingBarComponent,
    CountdownTimerComponent,
    RegisterFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
