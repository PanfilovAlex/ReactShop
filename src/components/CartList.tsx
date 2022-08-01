import { idText } from "typescript";
import { CartListItem } from "./CartListItem";
import { Item } from "./models/Item";
import { Order } from "./models/Order";

type CartListProps = {
  order: Order;
  handleCartShow: () => void;
  deleteItemFromCart: (itemId: string) => void;
  incQuontity: (itemId: string) => void;
  decQuontity: (itemId: string) => void;
};

export const CartList = (props: CartListProps) => {
  const { order } = props;
  const handleCartShow = props.handleCartShow;
  const entries = order.itemToQuantity.entries();
  const newArray = Array.from(entries);
  const incQuontity = props.incQuontity;
  const decQuontity = props.decQuontity;

  const newFunc = () =>
    newArray.map(([key, value]) => {
      return (
        <CartListItem
          key={key}
          itemId={key}
          item={value.item}
          quantity={value.number}
          deleteItemFromCart={props.deleteItemFromCart}
          incQuontity={incQuontity}
          decQuontity={decQuontity}
        />
      );
    });

  const totalBill = (order: Order): number => {
    const values = order.itemToQuantity.values();
    const sum = Array.from(values);
    let result = 0;
    for (const ent of sum) {
      const pr = ent.item.price.finalPrice * ent.number;
      result = result + pr;
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
