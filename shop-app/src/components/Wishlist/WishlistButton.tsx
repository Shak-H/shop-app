import { useDispatch } from "react-redux";

import { uiActions } from "../../store/ui-slice";

import classes from "./WishlistButton.module.css";

const WishlistButton = () => {
  const dispatch = useDispatch();

  const toggleWishlistHandler = () => {
    dispatch(uiActions.toggleWishlist());
  };

  return (
    <button className={classes.button} onClick={toggleWishlistHandler}>
      <span>Wishlist</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default WishlistButton;
