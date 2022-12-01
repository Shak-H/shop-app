import { useSelector } from "react-redux";

import WishlistItem from "./WishlistItem";

import Card from "../UI/Card";

import classes from "./Wishlist.module.css";
import { RootState } from "../../store";

const Wishlist = () => {
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  return (
    <Card>
      <div className={classes.wishlist}>
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
      </div>
    </Card>
  );
};

export default Wishlist;
