import { Item } from "./Item";

export type Order = {
  itemIdToQuantity: Map<string, number>;
};
