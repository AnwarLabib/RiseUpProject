import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CreateAnnouncementComponent } from './admin-panel/create-announcement/create-announcement.component';
import { AddTagComponent } from './admin-panel/add-tag/add-tag.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnnouncementsComponent } from './home/announcements/announcements.component';
import { AboutComponent } from './home/about/about.component';
import { FoundersComponent } from './home/founders/founders.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AdminPanelComponent,
    CreateAnnouncementComponent,
    AddTagComponent,
    HomeComponent,
    AnnouncementsComponent,
    AboutComponent,
    FoundersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
