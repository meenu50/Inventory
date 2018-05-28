import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckadmincustomerComponent } from './checkadmincustomer.component';

describe('CheckadmincustomerComponent', () => {
  let component: CheckadmincustomerComponent;
  let fixture: ComponentFixture<CheckadmincustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckadmincustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckadmincustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
