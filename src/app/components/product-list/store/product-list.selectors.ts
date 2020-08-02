import { AppState } from 'src/app/store/app.state';
import { createSelector } from '@ngrx/store';
import { ProductListState } from './product-list.state';

export const productListState = (state: AppState) => state.productListState;

export const productListSelectors = {
    getProductList: createSelector(
        productListState,
        (state: ProductListState) => state.productList
    )
};