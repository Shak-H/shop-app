import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface WishlistState {
  items: any[];
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
  name: "wishlist",
  initialState,
  reducers: {
    replaceWishlist(state, action) {
      state.quantity = action.payload.quantity;
      state.items = action.payload.items;
    },
    addItemToWishlist(state, action: PayloadAction<any>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.quantity++;
        state.changed = true;
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          name: newItem.title,
          image: newItem.image,
        });
      }
    },
    removeItemFromWishlist(state, action: PayloadAction<any>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.quantity--;
      state.changed = true;
      if (existingItem) {
        existingItem.quantity--;

        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice;
