import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, wishlistIsVisible: false },
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    toggleWishlist(state) {
      state.wishlistIsVisible = !state.wishlistIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
