import Card from "../UI/Card";

import classes from "./Wishlist.module.css";
import WishlistItem from "./WishlistItem";

const Wishlist = () => {
  return (
    <Card>
      <div className={classes.wishlist}>
        <h2>Your Wishlist</h2>
        <ul>
          <WishlistItem
            item={{ title: "Wishlist Item", quantity: 3, total: 18, price: 6 }}
          />
        </ul>
      </div>
    </Card>
  );
};

export default Wishlist;
