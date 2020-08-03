import { Product } from 'src/app/models/product';
import { createReducer, on, Action } from '@ngrx/store';
import { ProductListState } from './product-list.state';
import { productListActions } from './product-list.actions';

export const productListInitialState: ProductListState = {
    productList: [
        {
            id: 'product-1',
            name: 'Tavuk Göğüs',
            quantity: 4
        },
        {
            id: 'product-2',
            name: 'Yulaf Ezmesi',
            quantity: 3
        },
        {
            id: 'product-3',
            name: 'Hindi Füme',
            quantity: 2
        },
        {
            id: 'product-4',
            name: 'Bulgur Pilavı',
            quantity: 1
        }
    ]
}

export const productListReducer = createReducer(
    productListInitialState,
    on(productListActions.increaseQuantity, (state, action) => {
        let product: Product = state.productList.filter(x => x.id === action.id)[0];
        if (!!product) {
            let index: number = state.productList.indexOf(product);
            let newProduct: Product = new Product(product.id, product.name, product.quantity + 1);

            const updatedProduct = {
                ...state.productList[index],
                ...newProduct
            };

            const updatedProductList = [...state.productList];
            updatedProductList[index] = updatedProduct;

            return { ...state, productList: updatedProductList }
        }
        else {
            return state;
        }
    }),
    on(productListActions.decreaseQuantity, (state, action) => {
        let product: Product = state.productList.filter(x => x.id === action.id)[0];
        if (!!product) {
            if (product.quantity > 1) {
                let index: number = state.productList.indexOf(product);
                let newProduct: Product = new Product(product.id, product.name, product.quantity - 1);

                const updatedProduct = {
                    ...state.productList[index],
                    ...newProduct
                };

                const updatedProductList = [...state.productList];
                updatedProductList[index] = updatedProduct;

                return { ...state, productList: updatedProductList }
            }
            else {
                return state;
            }
        }
        else {
            return state;
        }
    })
)

export function reducer(state: ProductListState | undefined, action: Action) {
    return productListReducer(state, action);
}