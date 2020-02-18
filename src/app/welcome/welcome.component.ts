import { Component, OnInit } from '@angular/core';
import { Pages } from '../shared/models/pages.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  start() {
    this.router.navigate([Pages.Cards]);
  }

}
