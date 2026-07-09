import React from "react";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Products from "../Shop/Products";
import MainHeader from "../Layout/MainHeader";

import productsSlice from "../../store/products-slice";
import cartSlice from "../../store/cart-slice";
import wishlistSlice from "../../store/wishlist-slice";
import uiSlice from "../../store/ui-slice";

const renderSearchFlow = () => {
  jest.useFakeTimers();

  const store = configureStore({
    reducer: {
      products: productsSlice.reducer,
      cart: cartSlice.reducer,
      wishlist: wishlistSlice.reducer,
      ui: uiSlice.reducer,
    },
    preloadedState: {
      products: {
        items: [
          {
            id: "1",
            title: "Black Backpack",
            price: 20,
            description: "A backpack",
            category: "bags",
            image: "backpack.jpg",
            isFavourite: false,
          },
          {
            id: "2",
            title: "Red Jacket",
            price: 50,
            description: "A jacket",
            category: "clothing",
            image: "jacket.jpg",
            isFavourite: false,
          },
        ],
      },
    },
  });

  const TestComponent = () => {
    const [searchTerm, setSearchTerm] = React.useState("");

    return (
      <>
        <MainHeader searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <Products searchTerm={searchTerm} />
      </>
    );
  };

  render(
    <Provider store={store}>
      <TestComponent />
    </Provider>,
  );
};

describe("search integration", () => {
  it("filters products when the user searches", () => {
    jest.useFakeTimers();

    renderSearchFlow();

    expect(screen.getByText(/black backpack/i)).toBeInTheDocument();
    expect(screen.getByText(/red jacket/i)).toBeInTheDocument();

    const input = screen.getByLabelText(/search products/i);

    userEvent.type(input, "jacket");

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(screen.queryByText(/black backpack/i)).not.toBeInTheDocument();
    expect(screen.getByText(/red jacket/i)).toBeInTheDocument();

    jest.useRealTimers();
  });
});
