import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceListComponent } from './conponent/facility/service-list/service-list.component';
import { ServiceAddComponent } from './conponent/facility/service-add/service-add.component';
import { ServiceUpdateComponent } from './conponent/facility/service-update/service-update.component';
import { FooterComponent } from './conponent/footer/footer.component';
import { HeaderComponent } from './conponent/header/header.component';
import { CustomerListComponent } from './conponent/customer/customer-list/customer-list.component';
import { CustomerAddComponent } from './conponent/customer/customer-add/customer-add.component';
import { CustomerUpdateComponent } from './conponent/customer/customer-update/customer-update.component';
import { ContractListComponent } from './conponent/contract/contract-list/contract-list.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './conponent/home/home.component';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    ServiceListComponent,
    ServiceAddComponent,
    ServiceUpdateComponent,
    FooterComponent,
    HeaderComponent,
    CustomerListComponent,
    CustomerAddComponent,
    CustomerUpdateComponent,
    ContractListComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
