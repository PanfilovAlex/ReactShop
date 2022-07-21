import { Item } from "./models/Item";

type CartItemProps = {
  item: Item;
  quantity: number;
  deleteItemFromCart: (item: Item) => void;
};

export const CartListItem = (props: CartItemProps) => {
  const item = props.item;
  return (
    <li className="collection-item">
      <div>
        {`${item.displayName} ${props.quantity} шт. * ${
          item.price.finalPrice
        } руб. = ${item.price.finalPrice * props.quantity} руб.`}
        <span className="right">
          <i
            className="material-icons cart-delete"
            onClick={() => props.deleteItemFromCart(item)}
          >
            close
          </i>
        </span>
      </div>
    </li>
  );
};
