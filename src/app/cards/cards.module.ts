import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './card/card.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [CardsComponent, CardComponent],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [CardsComponent]
})
export class CardsModule { }
