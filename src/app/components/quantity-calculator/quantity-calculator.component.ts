import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantity-calculator',
  templateUrl: './quantity-calculator.component.html',
  styleUrls: ['./quantity-calculator.component.css']
})
export class QuantityCalculatorComponent {
  @Input() value: number = 1;

  @Output() decreaseQuantity = new EventEmitter<void>();
  @Output() increaseQuantity = new EventEmitter<void>();

  constructor() { }

  onDecreaseQuantityClicked() {
    this.decreaseQuantity.emit();
  }

  onIncreaseQuantityClicked() {
    this.increaseQuantity.emit();
  }
}
