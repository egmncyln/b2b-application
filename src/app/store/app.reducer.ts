import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { productListReducer } from '../components/product-list/store/product-list.reducer';
import { shoppingListReducer } from '../components/shopping-list/store/shopping-list.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  productListState: productListReducer,
  shoppingListState: shoppingListReducer
};