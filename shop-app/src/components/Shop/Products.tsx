import { useMemo } from "react";

import { useDebounce } from "../../hooks/useDebounce";
import { useAppSelector } from "../../store/hooks";
import ProductItem from "./ProductItem";

import classes from "./Products.module.css";

type ProductsProps = {
  searchTerm: string;
};

const Products = ({ searchTerm }: ProductsProps) => {
  const products = useAppSelector((state) => state.products.items);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const filteredProducts = useMemo(() => {
    const normalisedSearchTerm = debouncedSearchTerm.trim().toLowerCase();

    if (!normalisedSearchTerm) return products;

    return products.filter((product) =>
      product.title.toLowerCase().includes(normalisedSearchTerm),
    );
  }, [products, debouncedSearchTerm]);

  return (
    <section className={classes.products}>
      <ul className={classes.products__list}>
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>

      {filteredProducts.length === 0 && <p>No products found.</p>}
    </section>
  );
};

export default Products;
