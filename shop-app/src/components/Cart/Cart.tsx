import CartItem from "./CartItem";

import Card from "../UI/Card";

import classes from "./Cart.module.css";

const Cart = () => {
  return (
    <Card>
      <div className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          <CartItem
            item={{ title: "Cart Item", quantity: 3, total: 18, price: 6 }}
          />
        </ul>
      </div>
    </Card>
  );
};

export default Cart;
