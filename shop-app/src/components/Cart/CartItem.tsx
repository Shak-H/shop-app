import { useDispatch } from "react-redux";

import Button from "../UI/Button";

import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";

import { FaPlus, FaMinus } from "react-icons/fa";

const CartItem: React.FC<{
  item: {
    title: string;
    quantity: number;
    total: number;
    price: number;
    id: string;
    image: string;
  };
}> = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id, image } = props.item;

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
      })
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
      <img src={image} alt={title} className={classes["cart-item__image"]} />
      <div className={classes["cart-item__totalPrice"]}>
        £{total.toFixed(2)}{" "}
        <span className={classes["cart-item__price"]}>
          (${price.toFixed(2)}/item)
        </span>
      </div>

      <div className={classes["cart-item__details"]}>
        <div className={classes["cart-item__buttons"]}>
          <Button
            className={classes["cart-item__button"]}
            onClick={removeItemHandler}
          >
            <FaMinus className={classes["cart-item__icon"]} />
          </Button>
          <Button
            className={classes["cart-item__button"]}
            onClick={addItemHandler}
          >
            <FaPlus className={classes["cart-item__icon"]} />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
