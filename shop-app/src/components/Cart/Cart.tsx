import { useDispatch, useSelector } from "react-redux";

import CartItem from "./CartItem";

import Card from "../UI/Card";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import { uiActions } from "../../store/ui-slice";
import { RootState } from "../../store";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const dispatch = useDispatch();

  const hideCart = () => {
    dispatch(uiActions.closeCart());
  };

  return (
    <Modal hideCart={hideCart}>
      <Card className={classes.cart}>
        <h2 className={classes.cart__heading}>Your Shopping Cart</h2>
        <ul className={classes.cart__list}>
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
        <button onClick={hideCart}>Close</button>
        <button>Checkout</button>
      </Card>
    </Modal>
  );
};

export default Cart;
