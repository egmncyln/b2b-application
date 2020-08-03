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
            });
            const newState: ShoppingListState = reducer(initialState, action);
            const expectedShoppingList = [
                {
                    id: 'product-1',
                    name: 'Tavuk Göğüs',
                    quantity: 1
                }
            ];

            expect(newState.shoppingList).toEqual(expectedShoppingList);
            expect(newState).not.toBe(initialState);
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

            expect(newState.shoppingList[0].quantity).toEqual(5);
            expect(newState).not.toBe(initialState);
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
            const action: Action = shoppingListActions.increaseQuantity({ id: initialState.shoppingList[0].id });
            const newState: ShoppingListState = reducer(initialState, action);

            expect(newState.shoppingList[0].quantity).toEqual(4);
            expect(newState).not.toBe(initialState);
        });

        it('should return same state because there is no product in the list with given id', () => {
            const initialState: ShoppingListState = {
                shoppingList: [
                    {
                        id: 'product-1',
                        name: 'Tavuk Göğüs',
                        quantity: 3
                    }
                ]
            }
            const action: Action = shoppingListActions.increaseQuantity({ id: 'product-2' });
            const newState: ShoppingListState = reducer(initialState, action);

            expect(newState).toEqual(initialState);
            expect(newState).toBe(initialState);
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
            const action: Action = shoppingListActions.decreaseQuantity({ id: initialState.shoppingList[0].id });
            const newState: ShoppingListState = reducer(initialState, action);

            expect(newState.shoppingList[0].quantity).toEqual(2);
            expect(newState).not.toBe(initialState);
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
            const action: Action = shoppingListActions.decreaseQuantity({ id: initialState.shoppingList[0].id });
            const newState: ShoppingListState = reducer(initialState, action);

            expect(newState.shoppingList).toEqual([]);
            expect(newState).not.toBe(initialState);
        });

        it('should return same state because there is no product in the list with given id', () => {
            const initialState: ShoppingListState = {
                shoppingList: [
                    {
                        id: 'product-1',
                        name: 'Tavuk Göğüs',
                        quantity: 1
                    }
                ]
            }
            const action: Action = shoppingListActions.decreaseQuantity({ id: 'product-2' });
            const newState: ShoppingListState = reducer(initialState, action);

            expect(newState).toEqual(initialState);
            expect(newState).toBe(initialState);
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
            const action: Action = shoppingListActions.removeFromList({ id: initialState.shoppingList[0].id });
            const newState: ShoppingListState = reducer(initialState, action);

            expect(newState.shoppingList).toEqual([]);
            expect(newState).not.toBe(initialState);
        });
    });
});