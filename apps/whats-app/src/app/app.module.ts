import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { UiModule } from "@whatsapp/ui"

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, CommonModule, FormsModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
