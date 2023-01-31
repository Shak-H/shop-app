import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CartState {
  items: {
    id: string;
    price: number;
    name: string;
    image: string;
    quantity: number;
    totalPrice: number;
  }[];
  totalQuantity: number;
  changed: boolean;
}

// Define the initial state using that type
const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(
      state,
      action: PayloadAction<{
        id: string;
        price: number;
        image: string;
        title: string;
      }>
    ) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity!++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
          image: newItem.image,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action: PayloadAction<any>) {
      const id = action.payload;
      const existingItem = state.items?.find((item) => item.id === id);
      state.totalQuantity!--;
      state.changed = true;
      if (existingItem?.quantity === 1) {
        state.items = state.items?.filter((item) => item.id !== id);
      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice =
          existingItem!.totalPrice - existingItem!.price;
      }
    },
    clearCart(state) {
      state.items = initialState.items;
      state.totalQuantity = initialState.totalQuantity;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
