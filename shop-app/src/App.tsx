import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import Wishlist from "./components/Wishlist/Wishlist";

import { RootState } from "./store";
import type { AppDispatch } from "./store";
import { sendCartData, fetchCartData } from "./store/cart-actions";
import { sendWishlistData, fetchWishlistData } from "./store/wishlist-actions";

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
        {showWishlist && <Wishlist />}
        {showCart && <Cart />}
        <Products />;
      </Layout>
    </>
  );
}

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default App;

// const sendCartData = async () => {
//   dispatch(
//     uiActions.showNotification({
//       status: "pending",
//       title: "Sending...",
//       message: "Sending cart data",
//     })
//   );
//   const response = await fetch(
//     "https://react-http-8636f-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
//     {
//       method: "PUT",
//       body: JSON.stringify(cart),
//     }
//   );
//   if (!response.ok) {
//     throw new Error("Error when adding to cart");
//   }
//   dispatch(
//     uiActions.showNotification({
//       status: "success",
//       title: "Success!",
//       message: "Added to cart!",
//     })
//   );
// };
// if (isInitial) {
//   isInitial = false;
//   return;
// }
// sendCartData().catch((error) => {
//   dispatch(
//     uiActions.showNotification({
//       status: "error",
//       title: "Error!",
//       message: "Error when adding to cart!",
//     })
//   );
// });

// const sendWishlistData = async () => {
//   const response = await fetch(
//     "https://react-http-8636f-default-rtdb.europe-west1.firebasedatabase.app/wishlist.json",
//     {
//       method: "PUT",
//       body: JSON.stringify(wishlist),
//     }
//   );
//   if (!response.ok) {
//     throw new Error("Error when adding to wishlist");
//   }
// };
// sendWishlistData().catch((error) => {
//   dispatch(
//     uiActions.showNotification({
//       status: "error",
//       title: "Error!",
//       message: "Error when adding to wishlist!",
//     })
//   );
// });
