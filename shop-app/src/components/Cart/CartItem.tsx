import { useDispatch } from "react-redux";

import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";

const CartItem: React.FC<{
  item: {
    title: string;
    quantity: number;
    total: number;
    price: number;
    id: string;
  };
}> = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes["cart-item"]}>
      <header className={classes.cartItem__header}>
        <h3 className={classes.cartItem__heading}>{title}</h3>
        <div className={classes.cartItem__quantity}>
          x <span>{quantity}</span>
        </div>
      </header>
      <div className={classes.cartItem__totalPrice}>
        £{total.toFixed(2)}{" "}
        <span className={classes.cartItem__price}>
          (${price.toFixed(2)}/item)
        </span>
      </div>

      <div className={classes.cartItem__details}>
        <div className={classes.cartItem__buttons}>
          <button
            className={classes.cartItem__button}
            onClick={removeItemHandler}
          >
            -
          </button>
          <button className={classes.cartItem__button} onClick={addItemHandler}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
