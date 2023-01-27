import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import ProductItem from './ProductItem';

import classes from './Products.module.css';

const Products = () => {
  const products = useSelector((state: RootState) => state.products.items);

  return (
    <section className={classes.products}>
      <h2 className={classes.products__heading}>Shop till you DROP!!</h2>
      <ul className={classes.products__list}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={+product.price}
            image={product.image}
            isFavourite={product.isFavourite}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
