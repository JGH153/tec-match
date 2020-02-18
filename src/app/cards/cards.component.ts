import { Component, OnInit } from '@angular/core';

import { Card } from '../shared/models/card.interface';
import { Router } from '@angular/router';
import { Pages } from '../shared/models/pages.enum';
import { CardsService } from '../core/services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards: Card[];

  currentCardIndex = 0;

  constructor(
    private cardsService: CardsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentCardIndex = this.cardsService.cards.length - 2; // temp

    // reverse to make first card display on top of the other
    this.cards = this.cardsService.cards.slice(this.currentCardIndex).reverse();
  }

  cardDone(like: boolean) {
    const currentCard = this.cards[this.cards.length - 1];
    if (like) {
      this.cardsService.addVote(currentCard.favoringOutcome);
    }
    this.goToNextCard();
  }

  goToNextCard() {
    this.currentCardIndex++;
    this.cards = this.cardsService.cards
      .slice(this.currentCardIndex, this.cardsService.cards.length)
      .reverse();

    if (this.cards.length === 0) {
      console.log(this.cardsService.getOutcomes());
      this.router.navigate([Pages.Results]);
    }
  }

}
