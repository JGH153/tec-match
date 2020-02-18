import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { ResultsComponent } from './results/results.component';
import { Pages } from './shared/models/pages.enum';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: Pages.Welcome,
    component: WelcomeComponent
  },
  {
    path: Pages.Cards,
    component: CardsComponent
  },
  {
    path: Pages.Results,
    component: ResultsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
