import { useDispatch } from "react-redux";

import classes from "./WishlistItem.module.css";
import { wishlistActions } from "../../store/wishlist-slice";
import { cartActions } from "../../store/cart-slice";

const WishlistItem: React.FC<{
  item: {
    title: string;
    price: number;
    id: string;
    quantity: number;
    total: number;
  };
}> = (props) => {
  const dispatch = useDispatch();

  const { title, price, id, quantity, total } = props.item;

  const removeItemHandler = () => {
    dispatch(wishlistActions.removeItemFromWishlist(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        quantity,
        total,
      })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>£{price.toFixed(2)} </div>
      </header>
      <div className={classes.details}>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default WishlistItem;
