import { createAction, props } from '@ngrx/store';

export const productListActions = {
    increaseQuantity: createAction(
        '[Product List] increaseQuantity',
        props<{ id: string }>()
    ),
    decreaseQuantity: createAction(
        '[Product List] decreaseQuantity',
        props<{ id: string }>()
    )
}