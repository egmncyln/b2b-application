import { productListActions } from './product-list.actions';
import { ProductListState } from './product-list.state';
import { Action } from '@ngrx/store';
import { reducer } from './product-list.reducer';

describe('Product List Reducer', () => {
  describe('increaseQuantity Action', () => {
    it('should increase quantity in product list and return state in an immutable way', () => {
      const initialState: ProductListState = {
        productList: [
          {
            id: 'product-1',
            name: 'Tavuk Göğüs',
            quantity: 1
          }
        ]
      }
      const action: Action = productListActions.increaseQuantity({ id: 'product-1' });
      const newState: ProductListState = reducer(initialState, action);
      const expectedState: ProductListState = {
        productList: [
          {
            id: 'product-1',
            name: 'Tavuk Göğüs',
            quantity: 2
          }
        ]
      };

      expect(newState).toEqual(expectedState);
      expect(newState).not.toBe(expectedState);
    });
  });

  describe('decreaseQuantity Action', () => {
    it('should decrease quantity in product list and return state in an immutable way', () => {
      const initialState: ProductListState = {
        productList: [
          {
            id: 'product-1',
            name: 'Tavuk Göğüs',
            quantity: 2
          }
        ]
      };
      const action: Action = productListActions.decreaseQuantity({ id: 'product-1' });
      const newState: ProductListState = reducer(initialState, action);
      const expectedState: ProductListState = {
        productList: [
          {
            id: 'product-1',
            name: 'Tavuk Göğüs',
            quantity: 1
          }
        ]
      };

      expect(newState).toEqual(expectedState);
      expect(newState).not.toBe(expectedState);
    });

    it('should not decrease quantity and return state in an immutable way', () => {
      const initialState: ProductListState = {
        productList: [
          {
            id: 'product-1',
            name: 'Tavuk Göğüs',
            quantity: 1
          }
        ]
      };
      const action: Action = productListActions.decreaseQuantity({ id: 'product-1' });
      const newState: ProductListState = reducer(initialState, action);
      const expectedState: ProductListState = {
        productList: [
          {
            id: 'product-1',
            name: 'Tavuk Göğüs',
            quantity: 1
          }
        ]
      };

      expect(newState).toEqual(expectedState);
      expect(newState).not.toBe(expectedState);
    });
  });
});