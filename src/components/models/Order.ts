import { Item } from "./Item";

export type Order = {
  itemToQuantity: Map<Item, number>;
};
