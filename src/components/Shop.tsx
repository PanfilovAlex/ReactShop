import React, { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { Order } from "./models/Order";
import { Item } from "./models/Item";

export const Shop = () => {
  const [goods, setGoods] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [order, setOrder] = useState<Order[]>([]);

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

  const addToBasket = (itemFromShop: any) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.item.mainId === itemFromShop.mainId
    );
    if (itemIndex < 0) {
      const newOrder: Order = {
        item: itemFromShop,
        quantity: 1,
      };
      const copy = Object.assign([], order);
      copy.push(newOrder);

      setOrder(copy);
    }
  };
 
  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
    </main>
  );
};
