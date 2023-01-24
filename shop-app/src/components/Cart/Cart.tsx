import { useDispatch, useSelector } from 'react-redux';

import CartItem from './CartItem';

import Button from '../UI/Button';
import Modal from '../UI/Modal';

import classes from './Cart.module.css';
import { uiActions } from '../../store/ui-slice';
import { cartActions } from '../../store/cart-slice';
import { RootState } from '../../store';

import { AiOutlineCloseSquare } from 'react-icons/ai';
import { ImBin, ImCreditCard } from 'react-icons/im';

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
        <span className={classes.cart__close} onClick={hideCart}>
          <AiOutlineCloseSquare />
        </span>
        {cartItems.length > 0 ? (
          <>
            <Button
              aria-label="Button to checkout"
              role="button"
              tabindex="1"
              title="Go to Checkout"
            >
              Checkout{' '}
              <ImCreditCard
                className={classes.cart__icon}
                title="Go to Checkout"
              />
            </Button>
            <Button
              onClick={clearCart}
              aria-label="Button to empty Cart"
              role="button"
              tabindex="2"
              title="Clear the Cart"
            >
              Empty{' '}
              <ImBin className={classes.cart__icon} title="Clear the Cart" />
            </Button>{' '}
          </>
        ) : (
          <p className={classes.cart__message}>Cart is empty</p>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
