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
    image: string;
  };
}> = (props) => {
  const dispatch = useDispatch();

  const { title, price, id, quantity, total, image } = props.item;

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
        image,
      })
    );
  };

  return (
    <li className={classes["wishlist-item"]}>
      <h3 className={classes["wishlist-item__title"]}>{title}</h3>

      <img
        src={image}
        alt={title}
        className={classes["wishlist-item__image"]}
      />
      <div className={classes["wishlist-item__price"]}>
        £{price.toFixed(2)}{" "}
      </div>
      <div className={classes["wishlist-item__details"]}>
        <div className={classes["wishlist-item__buttons"]}>
          <button
            className={classes["wishlist-item__button"]}
            onClick={removeItemHandler}
          >
            -
          </button>
          <button
            className={classes["wishlist-item__button"]}
            onClick={addItemHandler}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default WishlistItem;
