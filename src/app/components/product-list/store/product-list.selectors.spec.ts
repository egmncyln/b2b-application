import { ProductListState } from './product-list.state';
import { productListSelectors } from './product-list.selectors';

describe('Product List Selectors', () => {
    describe('getProductList Selector', () => {
        it('should get productList', () => {
            const initialState: ProductListState = {
                productList: [
                    {
                        id: 'product-1',
                        name: 'Tavuk Göğüs',
                        quantity: 1
                    }
                ]
            }
            const selectorResult = productListSelectors.getProductList.projector(initialState);

            expect(selectorResult).toEqual(initialState.productList);
        });
    });
});