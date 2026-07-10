import { useAppDispatch, useAppSelector } from "../../store/hooks";

import WishlistItem from "./WishlistItem";

import Modal from "../UI/Modal";

import classes from "./Wishlist.module.css";
import { uiActions } from "../../store/ui-slice";

import { AiOutlineCloseSquare } from "react-icons/ai";

const Wishlist = () => {
  const products = useAppSelector((state) => state.products.items);
  const wishlist = useAppSelector((state) => state.wishlist.items);

  const wishlistItemIds = new Set(wishlist.map((item) => item.id));

  const wishlistItems = products.filter((product) =>
    wishlistItemIds.has(product.id),
  );

  const dispatch = useAppDispatch();

  const hideWishlist = () => {
    dispatch(uiActions.closeWishlist());
  };

  return (
    <Modal hideModal={hideWishlist}>
      <div className={classes.wishlist}>
        <h2 className={classes.wishlist__heading}>Your Wishlist</h2>
        <ul className={classes.wishlist__list}>
          {wishlistItems.map((item) => (
            <WishlistItem key={item.id} {...item} />
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
          ""
        )}
      </div>
    </Modal>
  );
};

export default Wishlist;
