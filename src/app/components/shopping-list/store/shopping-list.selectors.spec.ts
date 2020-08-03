import { shoppingListSelectors } from './shopping-list.selectors';
import { ShoppingListState } from './shopping-list.state';

describe('Shopping List Selectors', () => {
    describe('getShoppingList Selector', () => {
        it('should get shoppingList', () => {
            const initialState: ShoppingListState = {
                shoppingList: [
                    {
                        id: 'product-1',
                        name: 'Tavuk Göğüs',
                        quantity: 2
                    },
                    {
                        id: 'product-2',
                        name: 'Yulaf Ezmesi',
                        quantity: 3
                    },
                ]
            }
            const selectorResult = shoppingListSelectors.getShoppingList.projector(initialState);

            expect(selectorResult).toEqual(initialState.shoppingList);
        });
    });
});