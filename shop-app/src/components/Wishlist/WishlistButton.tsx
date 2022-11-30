import classes from "./WishlistButton.module.css";

const WishlistButton = () => {
  return (
    <button className={classes.button}>
      <span>Wishlist</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default WishlistButton;
