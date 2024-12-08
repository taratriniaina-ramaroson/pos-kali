import { ItemType } from "./item";

export type CartItemType = {
  id: number;
  item: ItemType;
  quantity: number;
  amount: number;
};

export type CartType = {
  items: Array<CartItemType>;
  amount: number;
};
