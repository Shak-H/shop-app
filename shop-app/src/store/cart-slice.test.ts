import cartSlice, { cartActions } from "./cart-slice";
import type { CartState } from "../types/cart";

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

describe("cart reducer", () => {
  it("adds a new item to the cart", () => {
    const state = cartSlice.reducer(
      initialState,
      cartActions.addItemToCart({
        id: "1",
        title: "Test Product",
        price: 10,
        image: "test.jpg",
      }),
    );

    expect(state.items).toHaveLength(1);
    expect(state.items[0].title).toBe("Test Product");
    expect(state.items[0].quantity).toBe(1);
    expect(state.items[0].totalPrice).toBe(10);
    expect(state.totalQuantity).toBe(1);
    expect(state.changed).toBe(true);
  });

  it("increments quantity when adding an existing item", () => {
    const stateWithItem = cartSlice.reducer(
      initialState,
      cartActions.addItemToCart({
        id: "1",
        title: "Test Product",
        price: 10,
        image: "test.jpg",
      }),
    );

    const state = cartSlice.reducer(
      stateWithItem,
      cartActions.addItemToCart({
        id: "1",
        title: "Test Product",
        price: 10,
        image: "test.jpg",
      }),
    );

    expect(state.items).toHaveLength(1);
    expect(state.items[0].quantity).toBe(2);
    expect(state.items[0].totalPrice).toBe(20);
    expect(state.totalQuantity).toBe(2);
  });

  it("removes an item from the cart", () => {
    const stateWithItem = cartSlice.reducer(
      initialState,
      cartActions.addItemToCart({
        id: "1",
        title: "Test Product",
        price: 10,
        image: "test.jpg",
      }),
    );

    const state = cartSlice.reducer(
      stateWithItem,
      cartActions.removeItemFromCart("1"),
    );

    expect(state.items).toHaveLength(0);
    expect(state.totalQuantity).toBe(0);
    expect(state.changed).toBe(true);
  });
});
