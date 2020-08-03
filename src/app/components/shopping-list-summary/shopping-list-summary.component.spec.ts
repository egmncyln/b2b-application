import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingListSummaryComponent } from './shopping-list-summary.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/app.state';
import { MemoizedSelector } from '@ngrx/store';
import { Product } from 'src/app/models/product';
import { shoppingListSelectors } from '../shopping-list/store/shopping-list.selectors';

describe('ShoppingListSummaryComponent', () => {
    let component: ShoppingListSummaryComponent;
    let fixture: ComponentFixture<ShoppingListSummaryComponent>;
    let mockStore: MockStore<AppState>;
    let mockSelector: MemoizedSelector<AppState, Product[]>;
    const initialState = {};

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [provideMockStore({ initialState })],
            declarations: [ShoppingListSummaryComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        mockStore = TestBed.inject(MockStore);
        mockSelector = mockStore.overrideSelector(shoppingListSelectors.getShoppingList, []);
        fixture = TestBed.createComponent(ShoppingListSummaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
