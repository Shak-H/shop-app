import React from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";
import { wishlistActions } from "../../store/wishlist-slice";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./ProductItem.module.css";

const ProductItem: React.FC<{
  title: string;
  price: number;
  image: string;
  id: string;
}> = (props) => {
  const dispatch = useDispatch();

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
    dispatch(
      wishlistActions.addItemToWishlist({
        id,
        title,
        price,
        image,
      })
    );
  };

  return (
    <Card className={classes.product}>
      <li className={classes.product__item}>
        <h3 className={classes.product__title}>{title}</h3>
        <img src={image} alt={title} className={classes.product__image} />
        <div className={classes.product__price}>£{price.toFixed(2)}</div>
        <div className={classes.product__buttons}>
          <Button onClick={addToCartHandler}>Add to Cart</Button>
          <Button onClick={addToWishlistHandler}>Add to Wishlist</Button>
        </div>
      </li>
    </Card>
  );
};

export default ProductItem;
