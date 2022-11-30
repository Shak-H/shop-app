import React from "react";

import ProductItem from "./ProductItem";

import classes from "./Products.module.css";

const Products: React.FC<{
  items: { title: string; price: number; image: string; id: string }[];
}> = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {props.items.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
