export type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  totalPrice: number;
};

export type CartState = {
  items: CartItem[];
  totalQuantity: number;
  changed: boolean;
};

export type ReplaceCartPayload = {
  items: CartItem[];
  totalQuantity: number;
};

export type AddCartItemPayload = {
  id: string;
  title: string;
  price: number;
  image: string;
};

export type CartApiResponse = {
  items?: CartItem[];
  totalQuantity?: number;
};
