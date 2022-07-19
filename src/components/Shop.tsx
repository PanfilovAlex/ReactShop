import React, { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { OrderItem } from "./models/OrderItem";
import { Item } from "./models/Item";

export const Shop = () => {
  const [goods, setGoods] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [order, setOrder] = useState<OrderItem[]>([]);

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

  const addToBasket = (itemFromGoods : Item) => {
    const newOrderItem = {
        item = itemFromGoods;
    }
  }

  return (
    <main className="container content">
      <Cart />
      {loading ? <Preloader /> : <GoodsList goods={goods} addItem />}
    </main>
  );
};
