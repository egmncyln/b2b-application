import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { shoppingListSelectors } from '../store/shopping-list.selectors';
import { shoppingListActions } from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList$: Observable<Product[]>;

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this.shoppingList$ = this._store.pipe(select(shoppingListSelectors.getShoppingList));
    // this.shoppingList$ = this._store.select(state => state.shoppingListState.shoppingList);
  }

  onIncreaseQuantityClicked(id: string) {
    this._store.dispatch(shoppingListActions.increaseQuantity({ id: id }));
  }

  onDecreaseQuantityClicked(id: string) {
    this._store.dispatch(shoppingListActions.decreaseQuantity({ id: id }));
  }

  onRemoveClicked(id: string) {
    this._store.dispatch(shoppingListActions.removeFromList({ id: id }));
  }
}
