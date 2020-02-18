import { Injectable } from '@angular/core';
import { Card } from 'src/app/shared/models/card.interface';
import { Subject } from 'rxjs';
import { Outcome } from 'src/app/shared/models/outcome.enum';


const cards: Card[] = [
  {
    imagName: 'angular1.png',
    name: 'Angular',
    favoringOutcome: Outcome.Frontend
  },
  {
    imagName: 'firebase1.png',
    name: 'Firebase',
    favoringOutcome: Outcome.Frontend
  },
  {
    imagName: 'ts.png',
    name: 'TypesScript',
    favoringOutcome: Outcome.Frontend
  },
  {
    imagName: 'react.png',
    name: 'React',
    favoringOutcome: Outcome.Frontend
  },
  {
    imagName: 'vue1.png',
    name: 'Vue',
    favoringOutcome: Outcome.Frontend
  },
  {
    imagName: 'azure.png',
    name: 'Azure',
    favoringOutcome: Outcome.dotNet
  },
  {
    imagName: 'fsharp.svg',
    name: 'F#',
    favoringOutcome: Outcome.dotNet
  },
  {
    imagName: 'netCore.png',
    name: '.Net Core',
    favoringOutcome: Outcome.dotNet
  },
  {
    imagName: 'C_Sharp_logo.png',
    name: 'C#',
    favoringOutcome: Outcome.dotNet
  },
  {
    imagName: 'sketch.png',
    name: 'Sketch',
    favoringOutcome: Outcome.DesignAndUx
  },
  {
    imagName: 'ilustrator.png',
    name: 'Ilustrator',
    favoringOutcome: Outcome.DesignAndUx
  },
  {
    imagName: 'figma.png',
    name: 'Figma',
    favoringOutcome: Outcome.DesignAndUx
  },
  {
    imagName: 'iv.png',
    name: 'InVision',
    favoringOutcome: Outcome.DesignAndUx
  },
  {
    imagName: 'python.png',
    name: 'Python',
    favoringOutcome: Outcome.DataScience
  },
  {
    imagName: 'Elasticsearch.png',
    name: 'Elastic search',
    favoringOutcome: Outcome.DataScience
  },
  {
    imagName: 'beam.png',
    name: 'Beam',
    favoringOutcome: Outcome.DataScience
  },
  {
    imagName: 'tensorflow.png',
    name: 'TensorFlow',
    favoringOutcome: Outcome.DataScience
  },
  {
    imagName: 'java.png',
    name: 'Java',
    favoringOutcome: Outcome.Java
  },
  {
    imagName: 'spring.svg',
    name: 'Spring',
    favoringOutcome: Outcome.Java
  },
  {
    imagName: 'Kotlin-logo.svg',
    name: 'Kotlin',
    favoringOutcome: Outcome.Java
  },

];

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  cards = cards;
  cardStream = new Subject();

  outcomeVotes = new Map<Outcome, number>();

  constructor() {
    this.shuffleArray(this.cards);
    this.setupDefaultVotes();
  }

  // returns either the best, or a random among the best
  getMostPopularOutcome(): Outcome {
    // let mostPopular = Outcome.Frontend;
    let votesForCurrent = 0;
    const possibilities: Outcome[] = [];
    this.outcomeVotes.forEach((value, key) => {
      if (value > votesForCurrent) {
        votesForCurrent = value;
        // mostPopular = key;
        possibilities.splice(0);
        possibilities.push(key);
      } else if (value === votesForCurrent) {
        possibilities.push(key);
      }
    });
    const randomElement = Math.floor(Math.random() * possibilities.length);
    return possibilities[randomElement];
  }

  setupDefaultVotes() {
    Object.values(Outcome).forEach(current => {
      if (typeof current === 'string') {
        return;
      }
      this.outcomeVotes.set(current as Outcome, 0);
    });
  }

  addVote(outcome: Outcome) {
    const currentVote = this.outcomeVotes.get(outcome);
    if (currentVote === undefined) {
      throw new Error('outcome not found!');
    }
    this.outcomeVotes.set(outcome, currentVote + 1);
  }

  getOutcomes() {
    return Array.from(this.outcomeVotes);
  }

  getCard(index: number): Card {
    return this.cards[index];
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

}
