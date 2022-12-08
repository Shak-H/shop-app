import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";
import { RootState } from "../../store";

import { ImCart } from "react-icons/im";

const CartButton = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button
      className={classes["cart-btn"]}
      onClick={toggleCartHandler}
      aria-label="Button to open Cart"
    >
      <span>
        Cart <ImCart className={classes["cart-btn__icon"]} />
      </span>
      <span className={classes["cart-btn__badge"]}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
