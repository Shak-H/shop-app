import React from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Wishlist from "./components/Wishlist/Wishlist";

function App() {
  const DUMMY_PRODUCTS = [
    {
      id: "p1",
      price: 49,
      title: "Manchester United Home Shirt 21/22",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT1cVAefhHLME7DQs7vWnznDcPbUlWNM2xJYXd9y4heVVQ3f2zlbvQug4IeV0xTeXFuuD8HzxrrkQ&usqp=CAc",
    },
    {
      id: "p2",
      price: 49,
      title: "Manchester United Away Shirt 21/22",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQMr3fb1SN8XT0bcHMdyxrftmJhtDpVn0IDr1i3JMblpZERvbRoAE2dnutw49MAZGUW9dftF2ENXoI&usqp=CAc",
    },
  ];

  return (
    <>
      <Layout>
        <Wishlist />
        <Cart />
        <Products items={DUMMY_PRODUCTS} />;
      </Layout>
    </>
  );
}

export default App;
