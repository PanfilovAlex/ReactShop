import { ShopContext } from "./ShopContext";
import { Order } from "../components/models/Order";
import { isTemplateExpression } from "typescript";
import { Item } from "../components/models/Item";

import { useReducer } from "react";

const INITIAL_STATE: ShopState = {
  goods: [],
  loading: true,
  order: {
    itemToQuantity: new Map(),
  },
  isCartShow: false,
};

type ShopState = {
  goods: [];
  loading: boolean;
  order: Order;
  isCartShow: boolean;
};

type ShopContextProps = {
  children: JSX.Element | JSX.Element[];
};

export const ContextProvider = ({ children }: ShopContextProps) => {
  return <ShopContext.Provider value={{}}>{children}</ShopContext.Provider>;
};
