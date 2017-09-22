import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
      ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
