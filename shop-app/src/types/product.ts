export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  isFavourite: boolean;
};

export type ProductApiItem = Omit<Product, "isFavourite">;

export type ProductApiResponse = ProductApiItem[];

export type ProductState = {
  items: Product[];
};

export type ReplaceProductsPayload = {
  items: ProductApiResponse;
};
