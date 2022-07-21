import { idText } from "typescript";
import { CartListItem } from "./CartListItem";
import { Item } from "./models/Item";
import { Order } from "./models/Order";

type CartListProps = {
  order: Order;
  handleCartShow: () => void;
  deleteItemFromCart: (item: Item) => void;
};

export const CartList = (props: CartListProps) => {
  const order = props.order;
  const handleCartShow = props.handleCartShow;
  const entries = order.itemToQuantity.entries();
  const newArray = Array.from(entries);
  const newFunc = () =>
    newArray.map(([key, value]) => {
      return (
        <CartListItem
          key={key.mainId}
          item={key}
          quantity={value}
          deleteItemFromCart={props.deleteItemFromCart}
        />
      );
    });

  const totalBill = (order: Order): number => {
    const entities = order.itemToQuantity.entries();
    const sum = Array.from(entities);
    let result = 0;
    for (const ent of sum) {
      const pr = ent[0].price.finalPrice;
      const quant = ent[1];
      result = result + pr * quant;
    }

    return result;
  };

  return (
    <ul className="collection cart-list">
      <li className="collection-item active">
        <i className="material-icons cart-close" onClick={handleCartShow}>
          close
        </i>
        Корзина
      </li>
      {order.itemToQuantity.size ? (
        <div>{newFunc()}</div>
      ) : (
        <li className="collection-item">Корзина Пуста! </li>
      )}
      <li className="collection-item">Общая стоимость: {totalBill(order)}</li>
    </ul>
  );
};
