import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityCalculatorComponent } from './quantity-calculator.component';

describe('QuantityCalculatorComponent', () => {
  let component: QuantityCalculatorComponent;
  let fixture: ComponentFixture<QuantityCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
