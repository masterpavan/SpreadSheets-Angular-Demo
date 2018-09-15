import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpreadSheetsModule } from '../lib/gc.spread.sheets.angular.11.2.1';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SpreadSheetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
