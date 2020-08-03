import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ProductListComponent } from './product-list.component';
import { QuantityCalculatorComponent } from '../../quantity-calculator/quantity-calculator.component';
import { AppState } from 'src/app/store/app.state';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { productListSelectors } from '../store/product-list.selectors';
import { MemoizedSelector } from '@ngrx/store';
import { Product } from 'src/app/models/product';
import { productListActions } from '../store/product-list.actions';
import { shoppingListActions } from '../../shopping-list/store/shopping-list.actions';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let mockStore: MockStore<AppState>;
  let mockSelector: MemoizedSelector<AppState, Product[]>;
  const initialState = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
      declarations: [
        ProductListComponent,
        QuantityCalculatorComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    mockStore = TestBed.inject(MockStore);
    mockSelector = mockStore.overrideSelector(
      productListSelectors.getProductList,
      []
    );
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(mockStore, 'dispatch').and.callFake(() => { });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoppingListActions.addToList should dispatch onAddToListClicked', () => {
    let product = new Product('product-1', 'Tavuk Göğüs', 1);
    component.onAddToListClicked(product);
    expect(mockStore.dispatch).toHaveBeenCalledWith(
      shoppingListActions.addToList({ product: product })
    );
  });

  it('productListActions.increaseQuantity should dispatch onIncreaseQuantityClicked', () => {
    let productId = 'product-1';
    component.onIncreaseQuantityClicked(productId);
    expect(mockStore.dispatch).toHaveBeenCalledWith(
      productListActions.increaseQuantity({ id: productId })
    );
  });

  it('productListActions.decreaseQuantity should dispatch onDecreaseQuantityClicked', () => {
    let productId = 'product-1';
    component.onDecreaseQuantityClicked(productId);
    expect(mockStore.dispatch).toHaveBeenCalledWith(
      productListActions.decreaseQuantity({ id: productId })
    );
  });
});
