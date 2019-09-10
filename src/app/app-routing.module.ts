import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DisplayComponent } from './display/display.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'profile',component:ProfileComponent},
{path:'display',component:DisplayComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [ProfileComponent,DisplayComponent,HomeComponent]
