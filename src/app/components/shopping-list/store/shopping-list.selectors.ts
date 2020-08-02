import { AppState } from 'src/app/store/app.state';
import { createSelector } from '@ngrx/store';
import { ShoppingListState } from './shopping-list.state';

export const shoppingListState = (state: AppState) => state.shoppingListState;

export const shoppingListSelectors = {
    getShoppingList: createSelector(
        shoppingListState,
        (state: ShoppingListState) => state.shoppingList
    )
};