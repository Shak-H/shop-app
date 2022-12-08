import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";
import { wishlistActions } from "../../store/wishlist-slice";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./ProductItem.module.css";

import { FaRegHeart, FaHeart, FaCartPlus } from "react-icons/fa";

type ProductItemProps = {
  title: string;
  price: number;
  id: number | string;
  image: string;
};

const ProductItem = (props: ProductItemProps) => {
  const dispatch = useDispatch();

  const [isFavourite, setIsFavourite] = useState(false);

  const { title, price, image, id } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        image,
      })
    );
  };

  const addToWishlistHandler = () => {
    if (!isFavourite) {
      dispatch(
        wishlistActions.addItemToWishlist({
          id,
          title,
          price,
          image,
        })
      );
      setIsFavourite(true);
    } else {
      dispatch(wishlistActions.removeItemFromWishlist(id));
      setIsFavourite(false);
    }
  };

  return (
    <Card className={classes.product}>
      <li className={classes.product__item}>
        <h3 className={classes.product__title}>{title}</h3>
        <figure>
          <img
            src={image}
            alt={title}
            aria-labelledby="product__image--caption"
            className={classes.product__image}
          />
          <figcaption id="product__image--caption">Product Image</figcaption>
        </figure>
        <div className={classes.product__price}>£{price.toFixed(2)}</div>
        <div className={classes.product__buttons}>
          <Button
            onClick={addToCartHandler}
            aria-label="Button to add to Cart"
            role="button"
            tabindex="1"
          >
            <FaCartPlus className={classes.product__icon} />
          </Button>
          <Button
            onClick={addToWishlistHandler}
            aria-label="Button to add to Wishlist"
            role="button"
            tabindex="2"
          >
            {isFavourite ? (
              <FaHeart className={classes.product__icon} />
            ) : (
              <FaRegHeart className={classes.product__icon} />
            )}
          </Button>
        </div>
      </li>
    </Card>
  );
};

export default ProductItem;
