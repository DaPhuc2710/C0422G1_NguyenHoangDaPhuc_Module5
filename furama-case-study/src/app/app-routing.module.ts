import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerListComponent} from "./conponent/customer/customer-list/customer-list.component";
import {CustomerAddComponent} from "./conponent/customer/customer-add/customer-add.component";
import {CustomerUpdateComponent} from "./conponent/customer/customer-update/customer-update.component";
import {HomeComponent} from "./conponent/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer/list', component: CustomerListComponent},
  {path: 'customer/create', component: CustomerAddComponent},
  {path: 'customer/update/:id', component: CustomerUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
