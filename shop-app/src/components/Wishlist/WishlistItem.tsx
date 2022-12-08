import { useDispatch } from "react-redux";

import Button from "../UI/Button";

import classes from "./WishlistItem.module.css";
import { wishlistActions } from "../../store/wishlist-slice";
import { cartActions } from "../../store/cart-slice";

import { FaPlus, FaMinus } from "react-icons/fa";

type WishlistItemProps = {
  item: {
    title: string;
    price: number;
    id: string;
    quantity: number;
    total: number;
    image: string;
  };
};

const WishlistItem = ({ item }: WishlistItemProps) => {
  const dispatch = useDispatch();

  const { title, price, id, quantity, total, image } = item;

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
      <figure>
        <img
          src={image}
          alt={title}
          className={classes["wishlist-item__image"]}
          aria-labelledby="wishlist-item__image--caption"
        />
        <figcaption id="wishlist-item__image--caption">
          Product Image
        </figcaption>
      </figure>
      <div className={classes["wishlist-item__price"]}>
        £{price.toFixed(2)}{" "}
      </div>
      <div className={classes["wishlist-item__details"]}>
        <div className={classes["wishlist-item__buttons"]}>
          <Button
            className={classes["wishlist-item__button"]}
            onClick={removeItemHandler}
            aria-label="Button to remove from Wishlist"
            role="button"
            tabindex="0"
          >
            <FaMinus className={classes["wishlist-item__icon"]} />
          </Button>
          <Button
            className={classes["wishlist-item__button"]}
            onClick={addItemHandler}
            aria-label="Button to add to Cart"
            role="button"
            tabindex="0"
          >
            <FaPlus className={classes["wishlist-item__icon"]} />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default WishlistItem;
