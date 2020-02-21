import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { ResultsComponent } from './results/results.component';
import { Pages } from './shared/models/pages.enum';
import { WelcomeComponent } from './welcome/welcome.component';
import { CrunchingComponent } from './crunching/crunching.component';
import { DepartmentsComponent } from './departments/departments.component';

const routes: Routes = [
  {
    path: Pages.Welcome,
    component: WelcomeComponent,
    // data: {animation: 'slideIn'}
  },
  {
    path: Pages.Cards,
    component: CardsComponent,
    data: {animation: 'slideIn'}
  },
  {
    path: Pages.Crunching,
    component: CrunchingComponent,
    data: {animation: 'slideIn2'}
  },
  {
    path: Pages.Results,
    component: ResultsComponent,
    data: {animation: 'slideIn'}
  },
  {
    path: Pages.Departments,
    component: DepartmentsComponent,
    data: {animation: 'slideIn2'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
