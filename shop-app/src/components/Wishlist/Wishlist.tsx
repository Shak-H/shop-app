import { useDispatch, useSelector } from 'react-redux';

import WishlistItem from './WishlistItem';

import Modal from '../UI/Modal';

import classes from './Wishlist.module.css';
import { uiActions } from '../../store/ui-slice';
import { RootState } from '../../store';

import { AiOutlineCloseSquare } from 'react-icons/ai';

const Wishlist = () => {
  // const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  // console.log(wishlistItems);

  const products = useSelector((state: RootState) => state.products.items);

  const wishlistItems = products.filter((item) => item.isFavourite);

  const dispatch = useDispatch();

  const hideWishlist = () => {
    dispatch(uiActions.closeWishlist());
  };

  return (
    <Modal hideModal={hideWishlist}>
      <div className={classes.wishlist}>
        <h2 className={classes.wishlist__heading}>Your Wishlist</h2>
        <ul className={classes.wishlist__list}>
          {wishlistItems.map((item) => (
            <WishlistItem
              key={item.id}
              item={{
                id: item.id,
                title: item.title,
                price: item.price,
                image: item.image,
              }}
            />
          ))}
        </ul>
        <span
          className={classes.wishlist__close}
          onClick={hideWishlist}
          role="button"
          aria-label="Button to close Wishlist"
        >
          <AiOutlineCloseSquare />
        </span>
        {wishlistItems.length <= 0 ? (
          <p className={classes.wishlist__message}>Wishlist is empty</p>
        ) : (
          ''
        )}
      </div>
    </Modal>
  );
};

export default Wishlist;
