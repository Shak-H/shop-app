import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../../store/ui-slice";

import classes from "./WishlistButton.module.css";
import { RootState } from "../../store";

const WishlistButton = () => {
  const dispatch = useDispatch();
  const wishlistQuantity = useSelector(
    (state: RootState) => state.wishlist.quantity
  );

  const toggleWishlistHandler = () => {
    dispatch(uiActions.toggleWishlist());
  };

  return (
    <button className={classes.button} onClick={toggleWishlistHandler}>
      <span>Wishlist</span>
      <span className={classes.badge}>{wishlistQuantity}</span>
    </button>
  );
};

export default WishlistButton;
