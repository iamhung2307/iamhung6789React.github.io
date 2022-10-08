import { combineReducers, createStore } from 'redux';

import productsReducer from './reducers/products';
import cartReducer from './reducers/cart';

const store = createStore(
  combineReducers({
    products: productsReducer,
    cart: cartReducer,
  })
);

export default store;
