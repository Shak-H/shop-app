import React, { useState, useEffect } from "react";

import ProductItem from "./ProductItem";

import classes from "./Products.module.css";

interface ProductsArray {
  key: number | string;
  id: number | string;
  title: string;
  price: string;
  image: string;
}

const Products = () => {
  const [products, setProducts] = useState<ProductsArray[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error("Error fetching Products");
      }

      const data = await response.json();
      console.log("data", data);

      setProducts(data);
    };
    try {
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section className={classes.products}>
      <h2 className={classes.products__heading}>Shop till you DROP!!</h2>
      <ul className={classes.products__list}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={+product.price}
            image={product.image}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
