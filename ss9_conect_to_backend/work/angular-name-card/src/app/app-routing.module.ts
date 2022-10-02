import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoListComponent} from "./component/todo-list/todo-list.component";
import {TodoCreateComponent} from "./component/todo-create/todo-create.component";
import {TodoUpdateComponent} from "./component/todo-update/todo-update.component";


const routes: Routes = [
  {path:'', component: TodoListComponent},
  {path:'create', component: TodoCreateComponent},
  {path:'update/:id', component: TodoUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
