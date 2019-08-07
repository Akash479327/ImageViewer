import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GellaryComponent } from './gellary/gellary.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [

   {
     path: 'gallery',   
     component: GellaryComponent
 },
// {
//   path: '',
//   component: NavbarComponent
// },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GellaryComponent,NavbarComponent]
