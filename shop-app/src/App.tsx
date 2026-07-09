import { useEffect, useState } from "react";

import { useLocalStorage } from "./hooks/useLocalStorage";
import type { ReplaceCartPayload } from "./types/cart";
import type { ReplaceWishlistPayload } from "./types/wishlist";
import { cartActions } from "./store/cart-slice";
import { wishlistActions } from "./store/wishlist-slice";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import Wishlist from "./components/Wishlist/Wishlist";

import { useAppDispatch, useAppSelector } from "./store/hooks";
import { fetchProductsData } from "./store/products-actions";

function App() {
  const dispatch = useAppDispatch();

  const showCart = useAppSelector((state) => state.ui.cartIsVisible);
  const showWishlist = useAppSelector((state) => state.ui.wishlistIsVisible);
  const notification = useAppSelector((state) => state.ui.notification);

  const cartStorage = useLocalStorage<ReplaceCartPayload>("cart");
  const wishlistStorage = useLocalStorage<ReplaceWishlistPayload>("wishlist");
  const cart = useAppSelector((state) => state.cart);
  const wishlist = useAppSelector((state) => state.wishlist);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  useEffect(() => {
    const storedCart = cartStorage.load();
    const storedWishlist = wishlistStorage.load();

    if (storedCart) {
      dispatch(cartActions.replaceCart(storedCart));
    }

    if (storedWishlist) {
      dispatch(wishlistActions.replaceWishlist(storedWishlist));
    }
  }, [cartStorage, wishlistStorage, dispatch]);

  useEffect(() => {
    if (!cart.changed) return;

    cartStorage.save({
      items: cart.items,
      totalQuantity: cart.totalQuantity,
    });
  }, [cart, cartStorage]);

  useEffect(() => {
    if (!wishlist.changed) return;

    wishlistStorage.save({
      items: wishlist.items,
      quantity: wishlist.quantity,
    });
  }, [wishlist, wishlistStorage]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}

      <Layout searchTerm={searchTerm} onSearchChange={setSearchTerm}>
        {showCart && <Cart />}
        {showWishlist && <Wishlist />}
        <Products searchTerm={searchTerm} />
      </Layout>
    </>
  );
}

export default App;
