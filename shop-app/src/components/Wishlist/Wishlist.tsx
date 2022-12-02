import { useDispatch, useSelector } from "react-redux";

import WishlistItem from "./WishlistItem";

import Card from "../UI/Card";
import Modal from "../UI/Modal";

import classes from "./Wishlist.module.css";
import { uiActions } from "../../store/ui-slice";
import { RootState } from "../../store";

const Wishlist = () => {
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  const dispatch = useDispatch();

  const hideWishlist = () => {
    dispatch(uiActions.closeWishlist());
  };

  return (
    <Modal>
      <Card className={classes.wishlist}>
        <h2>Your Wishlist</h2>
        <ul>
          {wishlistItems.map((item) => (
            <WishlistItem
              key={item.id}
              item={{
                id: item.id,
                title: item.name,
                price: item.price,
                quantity: item.quantity,
                total: item.totalPrice,
              }}
            />
          ))}
        </ul>
        <button onClick={hideWishlist}>Close</button>
      </Card>
    </Modal>
  );
};

export default Wishlist;
