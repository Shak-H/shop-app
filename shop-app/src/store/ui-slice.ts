import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { UiState, Notification } from "../types/ui";

// Define the initial state using that type
const initialState: UiState = {
  cartIsVisible: false,
  wishlistIsVisible: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    toggleWishlist(state) {
      state.wishlistIsVisible = !state.wishlistIsVisible;
    },
    showNotification(state, action: PayloadAction<Notification>) {
      state.notification = action.payload;
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
