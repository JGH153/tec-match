import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrunchingComponent } from './crunching.component';

describe('CrunchingComponent', () => {
  let component: CrunchingComponent;
  let fixture: ComponentFixture<CrunchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrunchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrunchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
