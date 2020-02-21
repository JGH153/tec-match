import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsModule } from './cards/cards.module';
import { ResultsModule } from './results/results.module';
import { WelcomeModule } from './welcome/welcome.module';
import { MatButtonModule } from '@angular/material/button';
import { DepartmentsModule } from './departments/departments.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CardsModule,
    ResultsModule,
    WelcomeModule,
    MatButtonModule,
    DepartmentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
