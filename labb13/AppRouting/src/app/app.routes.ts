import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { StudentsComponent } from "./students.component";
import { ProfileComponent } from "./profile.component";
import { ErrorComponent } from "./error/error.component";
import { Guardservice } from "./guards.service";


const MY_ROUTES: Routes = [
     { path: '', component: HomeComponent },
     { path: 'students', component: StudentsComponent },
     { path: 'profile/:id', component: ProfileComponent, canActivate:[Guardservice] },
     { path: 'error', component: ErrorComponent }, { path: '**', redirectTo: '/' }
           ];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
