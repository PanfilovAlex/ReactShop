import { CartListItem } from "./CartListItem";
import { Order } from "./models/Order";

type CartListProps = {
  order: Order;
  handleCartShow: () => void;
};

export const CartList = (props: CartListProps) => {
  const order = props.order;
  const handleCartShow = props.handleCartShow;
  const iterator = (key: string, value: number) => {
    <CartListItem mainId={key} quantity={value} />;
  };
  return (
    <ul className="collection">
      <li className="collection-item active">Корзина</li>

      <li className="collection-item">Общая стоимость: </li>
    </ul>
  );
};
