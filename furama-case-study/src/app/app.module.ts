import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceListComponent } from './conponent/service/service-list/service-list.component';
import { ServiceAddComponent } from './conponent/service/service-add/service-add.component';
import { ServiceUpdateComponent } from './conponent/service/service-update/service-update.component';
import { FooterComponent } from './conponent/footer/footer.component';
import { HeaderComponent } from './conponent/header/header.component';
import { CustomerListComponent } from './conponent/customer/customer-list/customer-list.component';
import { CustomerAddComponent } from './conponent/customer/customer-add/customer-add.component';
import { CustomerUpdateComponent } from './conponent/customer/customer-update/customer-update.component';
import { ContractListComponent } from './conponent/contract/contract-list/contract-list.component';

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
    ContractListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
