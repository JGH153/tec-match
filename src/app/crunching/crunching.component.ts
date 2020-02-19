import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pages } from '../shared/models/pages.enum';

@Component({
  selector: 'app-crunching',
  templateUrl: './crunching.component.html',
  styleUrls: ['./crunching.component.scss']
})
export class CrunchingComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate([Pages.Results]);
    }, 1800);
  }

}
