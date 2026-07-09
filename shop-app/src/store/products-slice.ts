import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ProductState, ReplaceProductsPayload } from "../types/product";

// Define the initial state using that type
const initialState: ProductState = {
  items: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    replaceProducts(state, action: PayloadAction<ReplaceProductsPayload>) {
      state.items = action.payload.items.map((item) => ({
        ...item,
        isFavourite: false,
      }));
    },
    toggleFavourite(state, action: PayloadAction<string>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload,
      );

      if (!existingItem) return;

      existingItem.isFavourite = !existingItem.isFavourite;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
