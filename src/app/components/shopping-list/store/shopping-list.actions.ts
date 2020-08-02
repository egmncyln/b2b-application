import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product';

export const shoppingListActions = {
    addToList: createAction(
        '[Shopping List] addToList',
        props<{ product: Product }>()
    ),
    increaseQuantity: createAction(
        '[Shopping List] increaseQuantity',
        props<{ id: string }>()
    ),
    decreaseQuantity: createAction(
        '[Shopping List] decreaseQuantity',
        props<{ id: string }>()
    ),
    removeFromList: createAction(
        '[Shopping List] removeFromList',
        props<{ id: string }>()
    )
};