import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import {CurrencyTableComponent} from './table/table.component';
import {NgOptimizedImage} from "@angular/common";


@NgModule({
    declarations: [
        AppComponent,
        CurrencyTableComponent,
        SimpleTableComponent
    ],
  imports: [
    BrowserModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
