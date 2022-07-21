import { CartListItem } from "./CartListItem";
import { Order } from "./models/Order";

type CartListProps = {
  order: Order;
  handleCartShow: () => void;
  deleteItemFromCart: (itemId: string) => void;
};

export const CartList = (props: CartListProps) => {
  const order = props.order;
  const handleCartShow = props.handleCartShow;
  const entries = order.itemIdToQuantity.entries();
  const newArray = Array.from(entries);
  const newFunc = () =>
    newArray.map((item) => {
      return (
        <CartListItem
          key={item[0]}
          mainId={item[0]}
          quantity={item[1]}
          deleteItemFromCart={props.deleteItemFromCart}
        />
      );
    });

  return (
    <ul className="collection cart-list">
      <li className="collection-item active">
        <i className="material-icons cart-close" onClick={handleCartShow}>
          close
        </i>
        Корзина
      </li>
      {order.itemIdToQuantity.size ? (
        <div>{newFunc()}</div>
      ) : (
        <li className="collection-item">Корзина Пуста! </li>
      )}
      <li className="collection-item">Общая стоимость: </li>
    </ul>
  );
};
