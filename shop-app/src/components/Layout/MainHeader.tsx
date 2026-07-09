import Burger from "./Burger";

import CartButton from "../Cart/CartButton";
import SearchBar from "../Search/SearchBar";
import WishlistButton from "../Wishlist/WishlistButton";

import classes from "./MainHeader.module.css";

type MainHeaderProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
};

const MainHeader = ({ searchTerm, onSearchChange }: MainHeaderProps) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.header__title}>Shak Sports</h1>
      <SearchBar value={searchTerm} onChange={onSearchChange} />
      <nav className={classes.header__nav} role="navigation">
        <ul className={classes.header__list}>
          <li className={classes["header__list-item"]}>
            <WishlistButton />
          </li>
          <li className={classes["header__list-item"]}>
            <CartButton />
          </li>
        </ul>
        <Burger />
      </nav>
    </header>
  );
};

export default MainHeader;
