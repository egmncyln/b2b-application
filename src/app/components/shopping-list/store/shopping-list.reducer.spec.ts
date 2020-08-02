import { ShoppingListState } from './shopping-list.state';
import { shoppingListActions } from './shopping-list.actions';
import { Action } from '@ngrx/store';
import { reducer } from './shopping-list.reducer';


describe('Shopping List Reducer', () => {
    describe('addToList Action', () => {
        it('should add product to shopping list and return state in an immutable way', () => {
            const initialState: ShoppingListState = { shoppingList: [] }
            const action: Action = shoppingListActions.addToList({
                product: {
                    id: 'product-1',
                    name: 'Tavuk Göğüs',
                    quantity: 1
                }
            })
            const newState: ShoppingListState = reducer(initialState, action);
            const expectedState: ShoppingListState = {
                shoppingList: [
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

        it('should increase quantity in shopping list and return state in an immutable way', () => {
            const initialState: ShoppingListState = {
                shoppingList: [
                    {
                        id: 'product-1',
                        name: 'Tavuk Göğüs',
                        quantity: 3
                    }
                ]
            };
            const action: Action = shoppingListActions.addToList({
                product: {
                    id: 'product-1',
                    name: 'Tavuk Göğüs',
                    quantity: 2
                }
            })
            const newState: ShoppingListState = reducer(initialState, action);
            const expectedState: ShoppingListState = {
                shoppingList: [
                    {
                        id: 'product-1',
                        name: 'Tavuk Göğüs',
                        quantity: 5
                    }
                ]
            };

            expect(newState).toEqual(expectedState);
            expect(newState).not.toBe(expectedState);
        });
    });

    describe('increaseQuantity Action', () => {
        it('should increase quantity in shopping list and return state in an immutable way', () => {
            const initialState: ShoppingListState = {
                shoppingList: [
                    {
                        id: 'product-1',
                        name: 'Tavuk Göğüs',
                        quantity: 3
                    }
                ]
            }
            const action: Action = shoppingListActions.increaseQuantity({ id: 'product-1' });
            const newState: ShoppingListState = reducer(initialState, action);
            const expectedState: ShoppingListState = {
                shoppingList: [
                    {
                        id: 'product-1',
                        name: 'Tavuk Göğüs',
                        quantity: 4
                    }
                ]
            };

            expect(newState).toEqual(expectedState);
            expect(newState).not.toBe(expectedState);
        });
    });

    describe('decreaseQuantity Action', () => {
        it('should decrease quantity in shopping list and return state in an immutable way', () => {
            const initialState: ShoppingListState = {
                shoppingList: [
                    {
                        id: 'product-1',
                        name: 'Tavuk Göğüs',
                        quantity: 3
                    }
                ]
            }
            const action: Action = shoppingListActions.decreaseQuantity({ id: 'product-1' });
            const newState: ShoppingListState = reducer(initialState, action);
            const expectedState: ShoppingListState = {
                shoppingList: [
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

        it('should remove product from shopping list and return state in an immutable way', () => {
            const initialState: ShoppingListState = {
                shoppingList: [
                    {
                        id: 'product-1',
                        name: 'Tavuk Göğüs',
                        quantity: 1
                    }
                ]
            }
            const action: Action = shoppingListActions.decreaseQuantity({ id: 'product-1' });
            const newState: ShoppingListState = reducer(initialState, action);
            const expectedState: ShoppingListState = { shoppingList: [] };

            expect(newState).toEqual(expectedState);
            expect(newState).not.toBe(expectedState);
        });
    });

    describe('removeFromList Action', () => {
        it('should remove product from shopping list and return state in an immutable way', () => {
            const initialState: ShoppingListState = {
                shoppingList: [
                    {
                        id: 'product-1',
                        name: 'Tavuk Göğüs',
                        quantity: 1
                    }
                ]
            }
            const action: Action = shoppingListActions.removeFromList({ id: 'product-1' });
            const newState: ShoppingListState = reducer(initialState, action);
            const expectedState: ShoppingListState = { shoppingList: [] };

            expect(newState).toEqual(expectedState);
            expect(newState).not.toBe(expectedState);
        });
    });
});