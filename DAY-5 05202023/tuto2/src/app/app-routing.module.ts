import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { TeamAboutPageComponent } from './pages/team-about-page/team-about-page.component';
import { HitoricAboutPageComponent } from './pages/hitoric-about-page/hitoric-about-page.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  //{ path:'', redirectTo:'home', pathMatch:'full' },
  { path:'', component:HomePageComponent },
  { path:'home', component:HomePageComponent },
  { path:'about', component:AboutPageComponent  , children:[
    { path:'team', component:TeamAboutPageComponent },
    { path:'historic', component:HitoricAboutPageComponent },
    
  ]},
  { path:'profile', component:ProfilePageComponent, canActivate:[authGuard] },

  { path:'**', component:NotFoundPageComponent }, // WILD CARD 

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
