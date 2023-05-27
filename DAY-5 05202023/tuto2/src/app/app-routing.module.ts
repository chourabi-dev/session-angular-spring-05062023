import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { TeamAboutPageComponent } from './pages/team-about-page/team-about-page.component';
import { HitoricAboutPageComponent } from './pages/hitoric-about-page/hitoric-about-page.component';
import { authGuard } from './auth.guard';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { NotesComponent } from './pages/notes/notes.component';
import { AddNoteComponent } from './pages/add-note/add-note.component';

const routes: Routes = [
  //{ path:'', redirectTo:'home', pathMatch:'full' },
  { path:'', component:HomePageComponent },
  { path:'home', component:HomePageComponent },
  { path:'about', component:AboutPageComponent  , children:[
    { path:'team', component:TeamAboutPageComponent },
    { path:'historic', component:HitoricAboutPageComponent },
    
  ]},
  { path:'profile', component:ProfilePageComponent, canActivate:[authGuard] },

  { path:'create-account', component:CreateAccountComponent },



  { path:'notes', component:NotesComponent },
  { path:'notes/add', component:AddNoteComponent },

  

  { path:'**', component:NotFoundPageComponent }, // WILD CARD 

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
