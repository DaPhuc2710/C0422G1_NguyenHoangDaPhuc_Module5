import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CarHomeListComponent} from './component/car-home-list/car-home-list.component';
import {UpdateCarComponent} from './component/update-car/update-car.component';


const routes: Routes = [
  {path: '', component: CarHomeListComponent},
  {path: 'carHome/update/:id', component: UpdateCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

