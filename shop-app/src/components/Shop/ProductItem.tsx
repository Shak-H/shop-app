import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart-slice';
import { wishlistActions } from '../../store/wishlist-slice';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './ProductItem.module.css';

import { FaRegHeart, FaHeart, FaCartPlus } from 'react-icons/fa';
import { productsActions } from '../../store/products-slice';

type ProductItemProps = {
  id: string;
  title: string;
  price: number;
  image: string;
  isFavourite: boolean;
};

const ProductItem = (props: ProductItemProps) => {
  const dispatch = useDispatch();

  const { title, price, image, id, isFavourite } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        image,
      })
    );
  };

  const addToWishlistHandler = () => {
    if (!isFavourite) {
      dispatch(
        wishlistActions.addItemToWishlist({
          id,
          // title,
          // price,
          // image,
        })
      );
      dispatch(productsActions.toggleFavourite(id));
    } else {
      dispatch(wishlistActions.removeItemFromWishlist(id));
      dispatch(productsActions.toggleFavourite(id));
    }
  };

  return (
    <Card className={classes.product}>
      <li className={classes.product__item}>
        <h3 className={classes.product__title}>{title}</h3>
        <figure className={classes['product__image-container']}>
          <img
            src={image}
            alt={title}
            aria-labelledby="product__image--caption"
            className={classes.product__image}
          />
          <figcaption id="product__image--caption">Product Image</figcaption>
        </figure>
        <div className={classes.product__price}>£{price.toFixed(2)}</div>
        <div className={classes.product__buttons}>
          <Button
            onClick={addToCartHandler}
            aria-label="Button to add to Cart"
            role="button"
            tabindex="1"
            title="Add to Cart"
          >
            <FaCartPlus className={classes.product__icon} title="Add to Cart" />
          </Button>
          <Button
            onClick={addToWishlistHandler}
            aria-label="Button to add to Wishlist"
            role="button"
            tabindex="2"
            title="Add to Wishlist"
          >
            {isFavourite ? (
              <FaHeart
                className={classes.product__icon}
                title="Remove from Wishlist"
              />
            ) : (
              <FaRegHeart
                className={classes.product__icon}
                title="Add to Wishlist"
              />
            )}
          </Button>
        </div>
      </li>
    </Card>
  );
};

export default ProductItem;
