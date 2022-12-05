import { useDispatch, useSelector } from "react-redux";

import CartItem from "./CartItem";

import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import { uiActions } from "../../store/ui-slice";
import { cartActions } from "../../store/cart-slice";
import { RootState } from "../../store";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const dispatch = useDispatch();

  const hideCart = () => {
    dispatch(uiActions.closeCart());
  };

  const clearCart = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <Modal hideModal={hideCart}>
      <div className={classes.cart}>
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
                image: item.image,
              }}
            />
          ))}
        </ul>
        <button onClick={hideCart}>Close</button>
        <button>Checkout</button>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </Modal>
  );
};

export default Cart;
