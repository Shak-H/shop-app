import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./ProductItem.module.css";

const ProductItem: React.FC<{
  title: string;
  price: number;
  image: string;
  id: string;
}> = (props) => {
  const { title, price, image } = props;

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>£{price.toFixed(2)}</div>
        </header>
        <img src={image} alt={title} />
        <div className={classes.actions}>
          <Button>Add to Cart</Button>
          <Button>Add to Wishlist</Button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
