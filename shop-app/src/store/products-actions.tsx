import { AppDispatch } from '.';

import { uiActions } from './ui-slice';
import { productsActions } from './products-slice';

export const fetchProductsData = () => {
  return async (dispatch: AppDispatch) => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products');

      if (!response.ok) {
        throw new Error('Error fetching Products');
      }

      const data = await response.json();

      return data;
    };
    try {
      const productsData = await fetchData();
      dispatch(
        productsActions.replaceProducts({
          items: productsData || [],
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Error fetching Products!',
        })
      );
    }
  };
};
