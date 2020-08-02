import { ShoppingListState } from '../components/shopping-list/store/shopping-list.state';
import { ProductListState } from '../components/product-list/store/product-list.state';

export interface AppState {
    productListState: ProductListState;
    shoppingListState: ShoppingListState;
}