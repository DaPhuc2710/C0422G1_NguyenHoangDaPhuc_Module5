import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VinhComponent} from "./component/vinh/vinh.component";


const routes: Routes = [
  {path:"",component:VinhComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
