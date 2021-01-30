import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {LoginComponent} from '../app/login/login.component';
import {ClientsComponent} from '../app/clients/clients.component';
import {DistributeursComponent} from '../app/distributeurs/distributeurs.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'Clients',component:ClientsComponent},
  {path:'Distributeurs',component:DistributeursComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }