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
    itemIdToQuantity: new Map(),
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

  const addToCart = (itemId: string) => {
    const itemQuantity = order.itemIdToQuantity.get(itemId);
    if (itemQuantity === undefined) {
      const newOrder: Order = {
        itemIdToQuantity: order.itemIdToQuantity.set(itemId, 1),
      };

      setOrder(newOrder);
    } else {
      const newOrder: Order = {
        itemIdToQuantity: order.itemIdToQuantity.set(itemId, itemQuantity + 1),
      };

      setOrder(newOrder);
    }
  };

  const deleteItemFromCart = (itemId: string) => {
    const newOrder: Order = {
      itemIdToQuantity: order.itemIdToQuantity,
    };
    newOrder.itemIdToQuantity.delete(itemId);
    setOrder(newOrder);
  };

  console.log(order);
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
