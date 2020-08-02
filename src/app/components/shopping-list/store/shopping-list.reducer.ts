import { Product } from 'src/app/models/product';
import { createReducer, on, Action } from '@ngrx/store';
import { ShoppingListState } from './shopping-list.state';
import { shoppingListActions } from './shopping-list.actions';

export const shoppingListInitialState: ShoppingListState = {
    shoppingList: []
}

export const shoppingListReducer = createReducer(
    shoppingListInitialState,
    on(shoppingListActions.addToList, (state, action) => {
        if (state.shoppingList.some(x => x.id === action.product.id)) {
            let product: Product = state.shoppingList.filter(x => x.id === action.product.id)[0];
            let index: number = state.shoppingList.indexOf(product);
            let newProduct: Product = new Product(product.id, product.name, product.quantity + action.product.quantity);

            const updatedProduct = {
                ...state.shoppingList[index],
                ...newProduct
            };

            const updatedShoppingList = [...state.shoppingList];
            updatedShoppingList[index] = updatedProduct;

            return { ...state, shoppingList: updatedShoppingList }
        }
        return { ...state, shoppingList: [...state.shoppingList, action.product] }
    }),
    on(shoppingListActions.increaseQuantity, (state, action) => {
        let product: Product = state.shoppingList.filter(x => x.id === action.id)[0];
        let index: number = state.shoppingList.indexOf(product);
        let newProduct: Product = new Product(product.id, product.name, product.quantity + 1);

        const updatedProduct = {
            ...state.shoppingList[index],
            ...newProduct
        };

        const updatedShoppingList = [...state.shoppingList];
        updatedShoppingList[index] = updatedProduct;

        return { ...state, shoppingList: updatedShoppingList }
    }),
    on(shoppingListActions.decreaseQuantity, (state, action) => {
        let product: Product = state.shoppingList.filter(x => x.id === action.id)[0];
        if (!!product && product.quantity > 1) {
            let index: number = state.shoppingList.indexOf(product);
            let newProduct: Product = new Product(product.id, product.name, product.quantity - 1);

            const updatedProduct = {
                ...state.shoppingList[index],
                ...newProduct
            };

            const updatedShoppingList = [...state.shoppingList];
            updatedShoppingList[index] = updatedProduct;

            return { ...state, shoppingList: updatedShoppingList }
        }
        return { ...state, shoppingList: state.shoppingList.filter(x => x.id !== action.id) };
    }),
    on(shoppingListActions.removeFromList, (state, action) => {
        return { ...state, shoppingList: state.shoppingList.filter(x => x.id !== action.id) }
    })
)

export function reducer(state: ShoppingListState | undefined, action: Action) {
    return shoppingListReducer(state, action);
}