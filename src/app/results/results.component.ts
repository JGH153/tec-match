import { Component, OnInit } from '@angular/core';

import { Outcome } from '../shared/models/outcome.enum';
import { CardsService } from '../core/services/cards.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  readonly Outcome = Outcome;

  mostPopularOutcome: Outcome;

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.mostPopularOutcome = this.cardsService.getMostPopularOutcome();
  }

}
