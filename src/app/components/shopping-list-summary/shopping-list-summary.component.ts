import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { AppState } from 'src/app/store/app.state';
import { Store, select } from '@ngrx/store';
import { shoppingListSelectors } from '../shopping-list/store/shopping-list.selectors';

@Component({
  selector: 'app-shopping-list-summary',
  templateUrl: './shopping-list-summary.component.html',
  styleUrls: ['./shopping-list-summary.component.css']
})
export class ShoppingListSummaryComponent implements OnInit {
  shoppingList$: Observable<Product[]>;

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this.shoppingList$ = this._store.pipe(select(shoppingListSelectors.getShoppingList));
    // this.shoppingList$ = this._store.select(state => state.shoppingListState.shoppingList);
  }
}
