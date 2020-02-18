import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomeDepartmentComponent } from './outcome-department.component';

describe('OutcomeDepartmentComponent', () => {
  let component: OutcomeDepartmentComponent;
  let fixture: ComponentFixture<OutcomeDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutcomeDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomeDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
