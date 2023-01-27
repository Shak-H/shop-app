import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface UiState {
  cartIsVisible: boolean;
  wishlistIsVisible: boolean;
  notification: any;
}

// Define the initial state using that type
const initialState: UiState = {
  cartIsVisible: false,
  wishlistIsVisible: false,
  notification: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    toggleWishlist(state) {
      state.wishlistIsVisible = !state.wishlistIsVisible;
    },
    showNotification(state: any, action: PayloadAction<any>) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    removeNotification(state) {
      state.notification = null;
    },
    closeCart(state) {
      state.cartIsVisible = false;
    },
    closeWishlist(state) {
      state.wishlistIsVisible = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
