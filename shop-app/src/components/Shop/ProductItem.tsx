import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";
import { wishlistActions } from "../../store/wishlist-slice";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./ProductItem.module.css";

import { FaRegHeart, FaHeart, FaCartPlus } from "react-icons/fa";

const ProductItem = (props: any) => {
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
        <img src={image} alt={title} className={classes.product__image} />
        <div className={classes.product__price}>£{price.toFixed(2)}</div>
        <div className={classes.product__buttons}>
          <Button onClick={addToCartHandler}>
            <FaCartPlus className={classes.product__icon} />
          </Button>
          <Button onClick={addToWishlistHandler}>
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
