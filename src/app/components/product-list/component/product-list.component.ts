import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { select, Store } from '@ngrx/store';
import { productListSelectors } from '../store/product-list.selectors';
import { AppState } from 'src/app/store/app.state';
import { shoppingListActions } from '../../shopping-list/store/shopping-list.actions';
import { productListActions } from '../store/product-list.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList$: Observable<Product[]>;

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this.productList$ = this._store.pipe(select(productListSelectors.getProductList));
    // this.productList$ = this._store.select(state => state.productListState.productList);
  }

  onAddToListClicked(product: Product) {
    this._store.dispatch(shoppingListActions.addToList({ product }));
  }

  onIncreaseQuantityClicked(id: string) {
    this._store.dispatch(productListActions.increaseQuantity({ id: id }));
  }

  onDecreaseQuantityClicked(id: string) {
    this._store.dispatch(productListActions.decreaseQuantity({ id: id }));
  }
}
