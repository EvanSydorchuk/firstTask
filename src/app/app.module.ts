import {  FilterPipe } from './helpers/filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
