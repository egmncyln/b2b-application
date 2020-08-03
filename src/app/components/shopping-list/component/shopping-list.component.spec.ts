import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingListComponent } from './shopping-list.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/app.state';
import { MemoizedSelector } from '@ngrx/store';
import { Product } from 'src/app/models/product';
import { shoppingListSelectors } from '../store/shopping-list.selectors';
import { shoppingListActions } from '../store/shopping-list.actions';
import { QuantityCalculatorComponent } from '../../quantity-calculator/quantity-calculator.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ShoppingListComponent', () => {
    let component: ShoppingListComponent;
    let fixture: ComponentFixture<ShoppingListComponent>;
    let mockStore: MockStore<AppState>;
    let mockSelector: MemoizedSelector<AppState, Product[]>;
    const initialState = {};

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [provideMockStore({ initialState })],
            declarations: [
                ShoppingListComponent,
                QuantityCalculatorComponent
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        mockStore = TestBed.inject(MockStore);
        mockSelector = mockStore.overrideSelector(shoppingListSelectors.getShoppingList, []);
        fixture = TestBed.createComponent(ShoppingListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        spyOn(mockStore, 'dispatch').and.callFake(() => { });
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('shoppingListActions.increaseQuantity should dispatch onIncreaseQuantityClicked', () => {
        let productId = 'product-1';
        component.onIncreaseQuantityClicked(productId);
        expect(mockStore.dispatch).toHaveBeenCalledWith(
            shoppingListActions.increaseQuantity({ id: productId })
        );
    });

    it('shoppingListActions.decreaseQuantity should dispatch onDecreaseQuantityClicked', () => {
        let productId = 'product-1';
        component.onDecreaseQuantityClicked(productId);
        expect(mockStore.dispatch).toHaveBeenCalledWith(
            shoppingListActions.decreaseQuantity({ id: productId })
        );
    });

    it('shoppingListActions.removeFromList should dispatch onRemoveClicked', () => {
        let productId = 'product-1';
        component.onRemoveClicked(productId);
        expect(mockStore.dispatch).toHaveBeenCalledWith(
            shoppingListActions.removeFromList({ id: productId })
        );
    });
});
