import { useAppDispatch } from "../../store/hooks";

import type { CartItem as CartItemModel } from "../../types/cart";

import Button from "../UI/Button";

import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";

import { FaPlus, FaMinus } from "react-icons/fa";

type CartItemProps = CartItemModel;

const CartItem = ({
  id,
  title,
  quantity,
  totalPrice,
  price,
  image,
}: CartItemProps) => {
  const dispatch = useAppDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        image,
      }),
    );
  };

  return (
    <li className={classes["cart-item"]}>
      <header className={classes["cart-item__header"]}>
        <h3 className={classes["cart-item__title"]}>{title}</h3>
        <div className={classes["cart-item__quantity"]}>
          x <span>{quantity}</span>
        </div>
      </header>
      <figure className={classes["cart-item__image-container"]}>
        <img
          src={image}
          alt={title}
          className={classes["cart-item__image"]}
          aria-labelledby="cart-item__image--caption"
        />
        <figcaption id="cart-item__image--caption">Product Image</figcaption>
      </figure>
      <div className={classes["cart-item__totalPrice"]}>
        £{totalPrice.toFixed(2)}{" "}
        <span className={classes["cart-item__price"]}>
          (${price.toFixed(2)}/item)
        </span>
      </div>

      <div className={classes["cart-item__details"]}>
        <div className={classes["cart-item__buttons"]}>
          <Button
            className={classes["cart-item__button"]}
            onClick={removeItemHandler}
            aria-label="Button to remove from Cart"
            tabIndex={1}
            title="Remove from Cart"
          >
            <FaMinus
              className={classes["cart-item__icon"]}
              title="Remove from Cart"
            />
          </Button>
          <Button
            className={classes["cart-item__button"]}
            onClick={addItemHandler}
            aria-label="Button to add another to Cart"
            tabIndex={2}
            title="Add another to Cart"
          >
            <FaPlus
              className={classes["cart-item__icon"]}
              title="Add another to Cart"
            />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
