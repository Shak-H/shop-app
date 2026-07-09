import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type {
  WishlistItem,
  WishlistState,
  ReplaceWishlistPayload,
} from "../types/wishlist";

const initialState: WishlistState = {
  items: [],
  quantity: 0,
  changed: false,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    replaceWishlist(state, action: PayloadAction<ReplaceWishlistPayload>) {
      state.quantity = action.payload.quantity;
      state.items = action.payload.items;
      state.changed = false;
    },
    addItemToWishlist(state, action: PayloadAction<WishlistItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) return;

      state.quantity++;
      state.changed = true;
      state.items.push(newItem);
    },
    removeItemFromWishlist(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (!existingItem) return;

      state.quantity--;
      state.changed = true;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice;
