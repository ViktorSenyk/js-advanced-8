import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CVHeaderComponent } from './cv-header/cv-header.component';
import { CvMainComponent } from './cv-main/cv-main.component';

@NgModule({
  declarations: [
    AppComponent,
    CVHeaderComponent,
    CvMainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
