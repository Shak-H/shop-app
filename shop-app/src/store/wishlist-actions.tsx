import { AppDispatch } from "../store";

import { uiActions } from "./ui-slice";
import { wishlistActions } from "./wishlist-slice";

export const fetchWishlistData = () => {
  return async (dispatch: AppDispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-8636f-default-rtdb.europe-west1.firebasedatabase.app/wishlist.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch Wishlist");
      }

      const data = await response.json();

      return data;
    };
    try {
      const wishlistData = await fetchData();
      dispatch(
        wishlistActions.replaceWishlist({
          items: wishlistData.items || [],
          quantity: wishlistData.quantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Error when fetching Wishlist!",
        })
      );
    }
  };
};

export const sendWishlistData = (wishlist: any) => {
  return async (dispatch: AppDispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending wishlist data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-8636f-default-rtdb.europe-west1.firebasedatabase.app/wishlist.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: wishlist.items,
            quantity: wishlist.quantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error when adding to Wishlist");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Added to Wishlist!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Error when adding to Wishlist!",
        })
      );
    }
  };
};
