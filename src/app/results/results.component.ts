import { Component, OnInit } from '@angular/core';

import { Outcome } from '../shared/models/outcome.enum';
import { CardsService } from '../core/services/cards.service';
import { DepartmentsService } from '../core/services/departments.service';
import { Department } from '../shared/models/department.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  readonly Outcome = Outcome;

  mostPopularOutcome: Outcome;

  department: Department | undefined;

  constructor(
    private cardsService: CardsService,
    private departmentsService: DepartmentsService,
  ) { }

  ngOnInit() {
    this.mostPopularOutcome = this.cardsService.getMostPopularOutcome();
    this.department = this.departmentsService.departments
      .find(current => current.departmentOutcome === this.mostPopularOutcome);
  }

}
