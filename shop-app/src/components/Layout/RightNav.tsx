import CartButton from '../Cart/CartButton';
import WishlistButton from '../Wishlist/WishlistButton';

import classes from './MainHeader.module.css';

type RightNavProps = {
  open: boolean;
  role: string;
  tabindex: string;
};

const RightNav = (props: RightNavProps) => {
  const hamburgerStyle = props.open
    ? { transform: 'translateX(0)' }
    : { transform: 'translateX(100%)' };

  return (
    <ul
      data-open={props}
      className={classes['right-nav__list']}
      style={hamburgerStyle}
    >
      <li className={classes['right-nav__list-item']}>
        <WishlistButton />
      </li>
      <li className={classes['right-nav__list-item']}>
        <CartButton />
      </li>
    </ul>
  );
};

export default RightNav;
