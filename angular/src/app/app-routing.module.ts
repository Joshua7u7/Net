import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AvisoComponent} from './aviso/aviso.component';
import {AddComponent} from './add/add.component';
import {PeopleComponent} from './people/people.component';
const routes: Routes = [
  {path:'',component:AvisoComponent},
  {path:'add',component:AddComponent},
  {path:'people',component:PeopleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
