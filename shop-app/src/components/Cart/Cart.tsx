import { useSelector } from "react-redux";

import CartItem from "./CartItem";

import Card from "../UI/Card";

import classes from "./Cart.module.css";
import { RootState } from "../../store";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <Card>
      <div className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.name,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default Cart;
