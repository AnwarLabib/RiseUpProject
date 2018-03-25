import { NgModule } from '@angular/core';

import { Routes } from '@angular/router';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CreateAnnouncementComponent } from './admin-panel/create-announcement/create-announcement.component';
import { AddTagComponent } from './admin-panel/add-tag/add-tag.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {path:'home' , component: HomeComponent},
    {path:'login' , component: LoginComponent},
    {path:'register' , component: RegisterComponent},
    {path:'profile' , component: ProfileComponent},
    {path:'admin' , component: AdminPanelComponent, children: 
    [
        {path:'', redirectTo : '/admin/announcement', pathMatch:'full' },
        {path:'announcement', component: CreateAnnouncementComponent},
        {path:'addtag', component: AddTagComponent},
        {path:'**',redirectTo:'/admin/announcement'}
    ]
    },
    {path:'',redirectTo:'home',pathMatch:'full'}
  ];
  

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}