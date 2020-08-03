import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/component/product-list.component';
import { ShoppingListComponent } from './shopping-list/component/shopping-list.component';
import { QuantityCalculatorComponent } from './quantity-calculator/quantity-calculator.component';
import { ShoppingListSummaryComponent } from './shopping-list-summary/shopping-list-summary.component';
import { InformationComponent } from './information/information.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ShoppingListComponent,
    QuantityCalculatorComponent,
    ShoppingListSummaryComponent,
    InformationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponent,
    ShoppingListComponent,
    QuantityCalculatorComponent,
    ShoppingListSummaryComponent,
    InformationComponent
  ]
})
export class AppComponentModule { }
