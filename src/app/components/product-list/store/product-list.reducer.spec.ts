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
      const action: Action = productListActions.increaseQuantity({ id: initialState.productList[0].id });
      const newState: ProductListState = reducer(initialState, action);

      expect(newState.productList[0].quantity).toEqual(2);
      expect(newState).not.toBe(initialState);
    });

    it('should return same state because there is no product in the list with given id', () => {
      const initialState: ProductListState = {
        productList: [
          {
            id: 'product-1',
            name: 'Tavuk Göğüs',
            quantity: 1
          }
        ]
      }
      const action: Action = productListActions.increaseQuantity({ id: 'product-2' });
      const newState: ProductListState = reducer(initialState, action);

      expect(newState).toEqual(initialState);
      expect(newState).toBe(initialState);
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
      const action: Action = productListActions.decreaseQuantity({ id: initialState.productList[0].id });
      const newState: ProductListState = reducer(initialState, action);

      expect(newState.productList[0].quantity).toEqual(1);
      expect(newState).not.toBe(initialState);
    });

    it('should not decrease quantity and return same state', () => {
      const initialState: ProductListState = {
        productList: [
          {
            id: 'product-1',
            name: 'Tavuk Göğüs',
            quantity: 1
          }
        ]
      };
      const action: Action = productListActions.decreaseQuantity({ id: initialState.productList[0].id });
      const newState: ProductListState = reducer(initialState, action);

      expect(newState).toEqual(initialState);
      expect(newState).toBe(initialState);
    });

    it('should return same state because there is no product in the list with given id', () => {
      const initialState: ProductListState = {
        productList: [
          {
            id: 'product-1',
            name: 'Tavuk Göğüs',
            quantity: 1
          }
        ]
      };
      const action: Action = productListActions.decreaseQuantity({ id: 'product-2' });
      const newState: ProductListState = reducer(initialState, action);

      expect(newState).toEqual(initialState);
      expect(newState).toBe(initialState);
    });
  });
});