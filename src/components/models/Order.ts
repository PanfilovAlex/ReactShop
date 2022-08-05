import { Item } from "./Item";

export type Order = {
  itemToQuantity: Map<string, { item: Item; number: number }>;
};
