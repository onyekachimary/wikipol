import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DisplayComponent } from './display/display.component';
import { Profile2Component } from './profile2/profile2.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'profile',component:ProfileComponent},
{path:'display',component:DisplayComponent},
{path:'profile2',component:Profile2Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [ProfileComponent,DisplayComponent,HomeComponent,Profile2Component]
