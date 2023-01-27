import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import Wishlist from './components/Wishlist/Wishlist';

import { RootState } from './store';
import type { AppDispatch } from './store';
import { fetchProductsData } from './store/products-actions';
import { sendCartData, fetchCartData } from './store/cart-actions';
import { sendWishlistData, fetchWishlistData } from './store/wishlist-actions';

let isInitialCart = true;
let isInitialWishlist = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state: RootState) => state.ui.cartIsVisible);
  const showWishlist = useSelector(
    (state: RootState) => state.ui.wishlistIsVisible
  );
  const cart = useSelector((state: RootState) => state.cart);
  const wishlist = useSelector((state: RootState) => state.wishlist);
  const notification = useSelector((state: RootState) => state.ui.notification);

  useEffect(() => {
    dispatch<any>(fetchProductsData());
  }, [dispatch]);

  useEffect(() => {
    dispatch<any>(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    dispatch<any>(fetchWishlistData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitialCart) {
      isInitialCart = false;
      return;
    }

    if (cart.changed) {
      dispatch<any>(sendCartData(cart));
    }
  }, [cart, dispatch]);

  useEffect(() => {
    if (isInitialWishlist) {
      isInitialWishlist = false;
      return;
    }

    if (wishlist.changed) {
      dispatch<any>(sendWishlistData(wishlist));
    }
  }, [wishlist, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        {showWishlist && <Wishlist />}
        <Products />
      </Layout>
    </>
  );
}

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default App;
