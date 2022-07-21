import React, { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { Order } from "./models/Order";

import { Item } from "./models/Item";
import { CartList } from "./CartList";

export const Shop = (): JSX.Element => {
  const [goods, setGoods] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [order, setOrder] = useState<Order>({
    itemToQuantity: new Map(),
  });
  const [isCartShow, setIsCartShow] = useState(false);

  const handleCartShow = () => {
    setIsCartShow(!isCartShow);
  };

  useEffect(function getGoods() {
    const requestHeaders = new Headers();
    requestHeaders.append("Authorization", API_KEY);

    fetch(API_URL, {
      headers: requestHeaders,
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop as Item[]);
        setLoading(false);
      });
  }, []);

  const addToCart = (item: Item) => {
    const isItemExist = order.itemToQuantity.has(item);
    if (!isItemExist) {
      const newOrder = {
        itemToQuantity: order.itemToQuantity.set(item, 1),
      };
      setOrder(newOrder);
    } else {
      const quantity = order.itemToQuantity.get(item);
      if (typeof quantity === "undefined") {
        throw new Error("Something wrong with getting number of items!");
      }
      const newOrder = {
        itemToQuantity: order.itemToQuantity.set(item, quantity + 1),
      };

      setOrder(newOrder);
    }
  };

  const deleteItemFromCart = (item: Item) => {
    const newOrder: Order = {
      itemToQuantity: order.itemToQuantity,
    };
    newOrder.itemToQuantity.delete(item);
    setOrder(newOrder);
  };

  return (
    <main className="container content">
      <Cart order={order} handleCartShow={handleCartShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToCart={addToCart} />
      )}
      {isCartShow ? (
        <CartList
          order={order}
          handleCartShow={handleCartShow}
          deleteItemFromCart={deleteItemFromCart}
        />
      ) : null}
    </main>
  );
};
