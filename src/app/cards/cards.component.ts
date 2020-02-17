import { Component, OnInit } from '@angular/core';
import { CardsService } from './services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cardsSteam;
  cards;

  currentCardIndex = 0;

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    // reverse to make first card display on top of the other
    this.cards = this.cardsService.cards.slice(0, 3).reverse();
  }

  cardDone(like) {
    this.goToNextCard();
  }

  goToNextCard() {
    this.currentCardIndex++;
    this.cards = this.cardsService.cards
      .slice(this.currentCardIndex, this.cardsService.cards.length)
      .reverse();
    console.table(this.cardsService.cards.slice(this.currentCardIndex, this.cardsService.cards.length));
    console.log(this.currentCardIndex, this.cardsService.cards);
  }

  dropDislike(event) {
    console.log(event);
    this.goToNextCard();
  }

  dropLike(event) {
    console.log(event);
    this.goToNextCard();
  }

}
