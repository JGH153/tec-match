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
  {
    imagName: 'sketch.png',
    name: 'Sketch'
  },
  {
    imagName: 'ilustrator.png',
    name: 'Ilustrator'
  },
  {
    imagName: 'figma.png',
    name: 'Figma'
  },
  {
    imagName: 'python.png',
    name: 'Python'
  },
  {
    imagName: 'Elasticsearch.png',
    name: 'Elastic search'
  },
  {
    imagName: 'java.png',
    name: 'Java'
  },
  {
    imagName: 'beam.png',
    name: 'Beam'
  },
  {
    imagName: 'tensorflow.png',
    name: 'TensorFlow'
  },
];

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  cards = cards;
  cardStream = new Subject();

  constructor() {
    this.shuffleArray(this.cards);
  }

  getCardStream() {

  }

  getCard(index: number): Card {
    return this.cards[index];
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

}
