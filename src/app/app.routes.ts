import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path: "",component:HomeComponent},
    {path: "departments",component:DepartmentsComponent},
    {path: "about",component:AboutComponent},
    {path: "contactus",component:ContactComponent}

];
