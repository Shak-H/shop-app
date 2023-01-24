import { useDispatch } from 'react-redux';

import Button from '../UI/Button';

import classes from './WishlistItem.module.css';
import { wishlistActions } from '../../store/wishlist-slice';
import { cartActions } from '../../store/cart-slice';

import { FaPlus, FaMinus } from 'react-icons/fa';

type WishlistItemProps = {
  item: {
    title: string;
    price: number;
    id: string;
    image: string;
  };
};

const WishlistItem = ({ item }: WishlistItemProps) => {
  const dispatch = useDispatch();

  const { title, price, id, image } = item;

  const removeItemHandler = () => {
    dispatch(wishlistActions.removeItemFromWishlist(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        image,
      })
    );
  };

  return (
    <li className={classes['wishlist-item']}>
      <h3 className={classes['wishlist-item__title']}>{title}</h3>
      <figure className={classes['wishlist-item__image-container']}>
        <img
          src={image}
          alt={title}
          className={classes['wishlist-item__image']}
          aria-labelledby="wishlist-item__image--caption"
        />
        <figcaption id="wishlist-item__image--caption">
          Product Image
        </figcaption>
      </figure>
      <div className={classes['wishlist-item__price']}>
        £{price.toFixed(2)}{' '}
      </div>
      <div className={classes['wishlist-item__details']}>
        <div className={classes['wishlist-item__buttons']}>
          <Button
            className={classes['wishlist-item__button']}
            onClick={removeItemHandler}
            aria-label="Button to remove from Wishlist"
            role="button"
            tabindex="0"
            title="Remove from Wishlist"
          >
            <FaMinus
              className={classes['wishlist-item__icon']}
              title="Remove from Wishlist"
            />
          </Button>
          <Button
            className={classes['wishlist-item__button']}
            onClick={addItemHandler}
            aria-label="Button to add to Cart"
            role="button"
            tabindex="0"
            title="Add to Cart"
          >
            <FaPlus
              className={classes['wishlist-item__icon']}
              title="Add to Cart"
            />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default WishlistItem;
