import CartButton from "../Cart/CartButton";
import WishlistButton from "../Wishlist/WishlistButton";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1>Shak Sports</h1>
      <nav>
        <ul>
          <li>
            <WishlistButton />
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
