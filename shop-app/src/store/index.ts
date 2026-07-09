import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import cartSlice from './cart-slice';
import wishlistSlice from './wishlist-slice';
import productsSlice from './products-slice';

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    wishlist: wishlistSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
