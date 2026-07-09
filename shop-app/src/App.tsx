import { useEffect, useState } from "react";

import { useLocalStorage } from "./hooks/useLocalStorage";
import type { ReplaceCartPayload } from "./types/cart";
import type { ReplaceWishlistPayload } from "./types/wishlist";

import { cartActions } from "./store/cart-slice";
import { wishlistActions } from "./store/wishlist-slice";
import { fetchProductsData } from "./store/products-actions";
import { useAppDispatch, useAppSelector } from "./store/hooks";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import Wishlist from "./components/Wishlist/Wishlist";

function App() {
  const dispatch = useAppDispatch();

  const showCart = useAppSelector((state) => state.ui.cartIsVisible);
  const showWishlist = useAppSelector((state) => state.ui.wishlistIsVisible);
  const notification = useAppSelector((state) => state.ui.notification);

  const cart = useAppSelector((state) => state.cart);
  const wishlist = useAppSelector((state) => state.wishlist);

  const { load: loadCart, save: saveCart } =
    useLocalStorage<ReplaceCartPayload>("cart");

  const { load: loadWishlist, save: saveWishlist } =
    useLocalStorage<ReplaceWishlistPayload>("wishlist");

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  useEffect(() => {
    const storedCart = loadCart();
    const storedWishlist = loadWishlist();

    if (storedCart) {
      dispatch(cartActions.replaceCart(storedCart));
    }

    if (storedWishlist) {
      dispatch(wishlistActions.replaceWishlist(storedWishlist));
    }
  }, [loadCart, loadWishlist, dispatch]);

  useEffect(() => {
    if (!cart.changed) return;

    saveCart({
      items: cart.items,
      totalQuantity: cart.totalQuantity,
    });
  }, [cart.items, cart.totalQuantity, cart.changed, saveCart]);

  useEffect(() => {
    if (!wishlist.changed) return;

    saveWishlist({
      items: wishlist.items,
      quantity: wishlist.quantity,
    });
  }, [wishlist.items, wishlist.quantity, wishlist.changed, saveWishlist]);

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
