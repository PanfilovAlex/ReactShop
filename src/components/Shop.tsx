import React, { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { Order } from "./models/Order";
import { Alert } from "./Alert";
import { Item } from "./models/Item";
import { CartList } from "./CartList";

export const Shop = (): JSX.Element => {
  const [goods, setGoods] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [order, setOrder] = useState<Order>({
    itemToQuantity: new Map(),
  });
  const [isCartShow, setIsCartShow] = useState(false);
  const [alertName, setAlertName] = useState("");

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

  const handleCartShow = () => {
    setIsCartShow(!isCartShow);
  };

  const addToCart = (itemId: string) => {
    const isItemExist = order.itemToQuantity.has(itemId);
    let newOrder;
    if (!isItemExist) {
      const itemFromGoods = goods.find((i) => i.mainId === itemId);
      if (itemFromGoods === undefined) {
        throw new Error("Item was not found");
      } else {
        newOrder = {
          itemToQuantity: order.itemToQuantity.set(itemId, {
            item: itemFromGoods,
            number: 1,
          }),
        };
      }
      setOrder(newOrder);
      setAlertName(itemFromGoods.displayName);
    } else {
      let itemFromOrder = order.itemToQuantity.get(itemId);
      if (itemFromOrder === undefined) {
        throw new Error("Something wrong with getting number of items!");
      }
      newOrder = {
        itemToQuantity: order.itemToQuantity.set(itemId, {
          item: itemFromOrder.item,
          number: ++itemFromOrder.number,
        }),
      };
      setOrder(newOrder);
      setAlertName(itemFromOrder.item.displayName);
    }
  };

  const deleteItemFromCart = (itemId: string) => {
    const newOrder: Order = {
      itemToQuantity: order.itemToQuantity,
    };
    newOrder.itemToQuantity.delete(itemId);
    setOrder(newOrder);
  };

  const incQuontity = (itemId: string) => {
    const quantity = order.itemToQuantity.get(itemId);
    if (typeof quantity === "undefined") {
      throw new Error("Something goes wrong");
    }
    const newOrder = {
      itemToQuantity: order.itemToQuantity.set(itemId, {
        item: quantity.item,
        number: ++quantity.number,
      }),
    };
    setOrder(newOrder);
  };

  const decQuontity = (itemId: string) => {
    let element = order.itemToQuantity.get(itemId);
    if (typeof element === "undefined") {
      throw new Error("Item was not found");
    }
    element.number = element.number > 0 ? element.number - 1 : 0;
    const newOrder = {
      itemToQuantity: order.itemToQuantity.set(itemId, {
        item: element.item,
        number: element.number,
      }),
    };
    setOrder(newOrder);
  };

  const handleCloseAlert = () => {
    setAlertName("");
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
          incQuontity={incQuontity}
          decQuontity={decQuontity}
        />
      ) : null}
      {alertName && <Alert closeAlert={handleCloseAlert} name={alertName} />}
    </main>
  );
};
