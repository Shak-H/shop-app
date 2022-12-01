import React from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";
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
      })
    );
  };

  // const addToWishlistHandler = () => {
  //   dispatch(cartActions.addItemToCart());
  // };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>£{price.toFixed(2)}</div>
        </header>
        <img src={image} alt={title} />
        <div className={classes.actions}>
          <Button onClick={addToCartHandler}>Add to Cart</Button>
          {/* <Button onClick={addToWishlistHandler}>Add to Wishlist</Button> */}
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
