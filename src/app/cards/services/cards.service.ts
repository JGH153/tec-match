import { Injectable } from '@angular/core';
import { Card } from 'src/app/shared/models/card.interface';
import { Subject } from 'rxjs';


const cards: Card[] = [
  {
    imagName: 'angular1.png',
    name: 'Angular'
  },
  {
    imagName: 'azure.png',
    name: 'Azure'
  },
  {
    imagName: 'firebase1.png',
    name: 'Firebase'
  },
  {
    imagName: 'kubernetes.png',
    name: 'Kubernetes'
  },
];

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  cards = cards;
  cardStream = new Subject();

  constructor() { }

  getCardStream() {

  }

  getCard(index: number): Card {
    return this.cards[index];
  }

}
