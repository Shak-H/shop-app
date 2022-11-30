const ProductItem: React.FC<{
  title: string;
  price: number;
  image: string;
  id: string;
}> = (props) => {
  const { title, price, image } = props;

  return (
    <li>
      <div>
        <header>
          <h3>{title}</h3>
          <div>${price.toFixed(2)}</div>
        </header>
        <img src={image} alt={title} />
        <div>
          <button>Add to Cart</button>
          <button>Add to Wishlist</button>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
