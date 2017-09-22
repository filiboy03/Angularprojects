import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { StudentsComponent } from './students.component';
import { myRoutes } from './app.routes';
import { DataService } from './dataservice.service';
import { ProfileComponent } from './profile.component';
import { Guardservice } from './guards.service';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    ProfileComponent,
    ErrorComponent,
     ],

  imports: [
    BrowserModule,myRoutes
  ],
  providers: [DataService,Guardservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
