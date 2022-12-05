import { AppDispatch } from ".";

import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch: AppDispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-8636f-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch Cart");
      }

      const data = await response.json();

      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Error when fetching Cart!",
        })
      );
    }
  };
};

export const sendCartData = (cart: any) => {
  return async (dispatch: AppDispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-8636f-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error when adding to Cart");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Added to Cart!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Error when adding to Cart!",
        })
      );
    }
  };
};
