import React, { useEffect, useState } from "react";

import ProductItem from "./ProductItem";

import classes from "./Products.module.css";

// const DUMMY_PRODUCTS = [
//   {
//     id: "p1",
//     price: 49,
//     title: "Manchester United Home Shirt 21/22",
//     image:
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT1cVAefhHLME7DQs7vWnznDcPbUlWNM2xJYXd9y4heVVQ3f2zlbvQug4IeV0xTeXFuuD8HzxrrkQ&usqp=CAc",
//   },
//   {
//     id: "p2",
//     price: 49,
//     title: "Manchester United Away Shirt 21/22",
//     image:
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQMr3fb1SN8XT0bcHMdyxrftmJhtDpVn0IDr1i3JMblpZERvbRoAE2dnutw49MAZGUW9dftF2ENXoI&usqp=CAc",
//   },
// ];

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);

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
      <h2 className={classes.products__heading}>Buy your favorite products</h2>
      <ul className={classes.products__list}>
        {products.map((product) => (
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
