import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { uiActions } from "../../store/ui-slice";

import classes from "./WishlistButton.module.css";

import { FaHeart } from "react-icons/fa";

const WishlistButton = () => {
  const dispatch = useAppDispatch();
  const wishlistQuantity = useAppSelector((state) => state.wishlist.quantity);

  const toggleWishlistHandler = () => {
    dispatch(uiActions.toggleWishlist());
  };

  return (
    <button
      className={classes["wishlist-btn"]}
      onClick={toggleWishlistHandler}
      aria-label="Button to open Wishlist"
    >
      <span>
        Wishlist <FaHeart className={classes["wishlist-btn__icon"]} />
      </span>
      <span className={classes["wishlist-btn__badge"]}>{wishlistQuantity}</span>
    </button>
  );
};

export default WishlistButton;
