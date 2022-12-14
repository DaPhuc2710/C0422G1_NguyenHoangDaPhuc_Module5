import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './component/product/product-list/product-list.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProductUpdateComponent } from './component/product/product-update/product-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
