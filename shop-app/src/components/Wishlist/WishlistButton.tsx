import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../../store/ui-slice';

import classes from './WishlistButton.module.css';
import { RootState } from '../../store';

import { FaHeart } from 'react-icons/fa';

const WishlistButton = () => {
  const dispatch = useDispatch();
  const wishlistQuantity = useSelector(
    (state: RootState) => state.wishlist.quantity
  );

  const toggleWishlistHandler = () => {
    dispatch(uiActions.toggleWishlist());
  };

  return (
    <button
      className={classes['wishlist-btn']}
      onClick={toggleWishlistHandler}
      aria-label="Button to open Wishlist"
    >
      <span>
        Wishlist <FaHeart className={classes['wishlist-btn__icon']} />
      </span>
      <span className={classes['wishlist-btn__badge']}>{wishlistQuantity}</span>
    </button>
  );
};

export default WishlistButton;
