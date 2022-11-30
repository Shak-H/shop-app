import React from "react";

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
      <div>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>£{price.toFixed(2)}</div>
        </header>
        <img src={image} alt={title} />
        <div className={classes.actions}>
          <button>Add to Cart</button>
          <button>Add to Wishlist</button>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
