import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-outcome-department',
  templateUrl: './outcome-department.component.html',
  styleUrls: ['./outcome-department.component.scss']
})
export class OutcomeDepartmentComponent implements OnInit {

  @Input() personImgSrc: string;

  constructor() { }

  ngOnInit(): void {
  }

}
