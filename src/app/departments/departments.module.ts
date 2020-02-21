import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsComponent } from './departments.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DepartmentsComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class DepartmentsModule { }
