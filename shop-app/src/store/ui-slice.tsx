import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface UiState {
  cartIsVisible: boolean;
  wishlistIsVisible: boolean;
  notification: { status: string; title: string; message: string } | null;
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
    showNotification(
      state,
      action: PayloadAction<{ status: string; title: string; message: string }>
    ) {
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
