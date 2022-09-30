import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DictionaryComponent} from './component/dictionary/dictionary.component';
import {DetailComponent} from './component/detail/detail.component';


const routes: Routes = [
  {path: '', component: DictionaryComponent},
  {path: 'detail/:word', component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
