import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface WishlistState {
  items: any[];
  quantity: number;
}

// Define the initial state using that type
const initialState: WishlistState = {
  items: [],
  quantity: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishlist(state, action: PayloadAction<any>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.quantity++;
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          name: newItem.title,
        });
      }
    },
    removeItemFromWishlist(state, action: PayloadAction<any>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.quantity--;
      if (existingItem) {
        existingItem.quantity--;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice;
