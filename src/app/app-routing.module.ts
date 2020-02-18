import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { ResultsComponent } from './results/results.component';
import { Pages } from './shared/models/pages.enum';

const routes: Routes = [
  {
    path: '',
    component: CardsComponent
  },
  {
    path: Pages.Results,
    component: ResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
