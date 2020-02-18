import { Outcome } from './outcome.enum';

export interface Card {
  name: string;
  imagName: string;
  favoringOutcome: Outcome;
}
