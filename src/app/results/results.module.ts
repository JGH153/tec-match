import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results.component';
import { OutcomeDepartmentComponent } from './outcome-department/outcome-department.component';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ],
  declarations: [
    ResultsComponent,
    OutcomeDepartmentComponent
  ]
})
export class ResultsModule { }
