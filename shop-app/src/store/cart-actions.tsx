import { AppDispatch } from '.';

import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
  return async (dispatch: AppDispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-http-8636f-default-rtdb.europe-west1.firebasedatabase.app/cart.json'
      );

      if (!response.ok) {
        throw new Error('Could not fetch Cart');
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
          status: 'error',
          title: 'Error!',
          message: 'Error when fetching Cart!',
        })
      );
    }
  };
};

export const sendCartData = (cart: {
  items: {
    id: string;
    price: number;
    name: string;
    image: string;
    quantity: number;
    totalPrice: number;
  }[];
  totalQuantity: number;
  changed: boolean;
}) => {
  return async (dispatch: AppDispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-http-8636f-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Error when updating Cart');
      }
    };

    try {
      let notificationTimer;
      clearTimeout(notificationTimer);

      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Cart Updated!',
        })
      );

      notificationTimer = setTimeout(
        () => dispatch(uiActions.removeNotification()),
        1000
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Error when updating Cart!',
        })
      );
    }
  };
};
