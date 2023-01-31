import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface WishlistState {
  items: {
    id: string;
  }[];
  quantity: number;
  changed: boolean;
}

// Define the initial state using that type
const initialState: WishlistState = {
  items: [],
  quantity: 0,
  changed: false,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    replaceWishlist(state, action) {
      state.quantity = action.payload.quantity;
      state.items = action.payload.items;
    },
    addItemToWishlist(
      state,
      action: PayloadAction<{
        id: string;
      }>
    ) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.quantity++;
        state.changed = true;

        state.items.push({
          id: newItem.id,
        });
      }
    },
    removeItemFromWishlist(state, action: PayloadAction<any>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.changed = true;
      if (existingItem) {
        state.quantity--;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice;
