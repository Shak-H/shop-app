import { createSlice } from '@reduxjs/toolkit';
// Define a type for the slice state
interface ProductsState {
  items: {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    isFavourite: boolean;
  }[];
}

// Define the initial state using that type
const initialState: ProductsState = {
  items: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    replaceProducts(state, action) {
      const itemsWithIsFavourite = action.payload.items.map((item: any) => {
        return { ...item, isFavourite: false };
      });
      state.items = itemsWithIsFavourite;
      console.log(itemsWithIsFavourite);
    },
    toggleFavourite(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      existingItem!.isFavourite = !existingItem!.isFavourite;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
