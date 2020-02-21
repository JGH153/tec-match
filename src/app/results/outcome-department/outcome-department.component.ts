import { Component, OnInit, Input } from '@angular/core';
import { Pages } from 'src/app/shared/models/pages.enum';

@Component({
  selector: 'app-outcome-department',
  templateUrl: './outcome-department.component.html',
  styleUrls: ['./outcome-department.component.scss']
})
export class OutcomeDepartmentComponent implements OnInit {

  @Input() personImgSrc: string;

  pages = Pages;

  constructor() { }

  ngOnInit(): void {

  }

}
