import Burger from './Burger';

import CartButton from '../Cart/CartButton';
import WishlistButton from '../Wishlist/WishlistButton';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.header__title}>Shak Sports</h1>
      <nav className={classes.header__nav} role="navigation">
        <ul className={classes.header__list}>
          <li className={classes['header__list-item']}>
            <WishlistButton />
          </li>
          <li className={classes['header__list-item']}>
            <CartButton />
          </li>
        </ul>
        <Burger />
      </nav>
    </header>
  );
};

export default MainHeader;
