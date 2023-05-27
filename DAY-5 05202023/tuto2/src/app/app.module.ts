import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { TeamAboutPageComponent } from './pages/team-about-page/team-about-page.component';
import { HitoricAboutPageComponent } from './pages/hitoric-about-page/hitoric-about-page.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NotesComponent } from './pages/notes/notes.component';
import { AddNoteComponent } from './pages/add-note/add-note.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ProfilePageComponent,
    NotFoundPageComponent,
    NavbarComponent,
    TeamAboutPageComponent,
    HitoricAboutPageComponent,
    CreateAccountComponent,
    NotesComponent,
    AddNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
