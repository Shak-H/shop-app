export type WishlistItem = {
  id: string;
};

export type WishlistState = {
  items: WishlistItem[];
  quantity: number;
  changed: boolean;
};

export type ReplaceWishlistPayload = {
  items: WishlistItem[];
  quantity: number;
};

export type WishlistApiResponse = {
  items?: WishlistItem[];
  quantity?: number;
};
