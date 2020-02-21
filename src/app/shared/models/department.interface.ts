import { Outcome } from './outcome.enum';

export interface Department {
  name: string;
  personSrc: string;
  personText: string;
  departmentText: string;
  departmentOutcome: Outcome;
}
