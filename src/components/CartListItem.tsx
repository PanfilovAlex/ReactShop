import { Item } from "./models/Item";

type CartItemProps = {
  itemId: string;
  item: Item;
  quantity: number;
  deleteItemFromCart: (itemId: string) => void;
  incQuontity: (itemId: string) => void;
  decQuontity: (itemId: string) => void;
};

export const CartListItem = (props: CartItemProps) => {
  const { itemId, item, quantity } = props;

  const incQuontity = props.incQuontity;
  const decQuontity = props.decQuontity;
  return (
    <li className="collection-item">
      <div>
        {`${item.displayName}   `}
        <span className="cart-quantity">
          <button className="cart-quantity" onClick={() => decQuontity(itemId)}>
            -
          </button>{" "}
          {quantity} шт.
          {
            <button
              className="cart-quantity"
              onClick={() => incQuontity(itemId)}
            >
              +
            </button>
          }
          {item.price.finalPrice} руб. ={item.price.finalPrice * quantity}
          руб.
        </span>
        <span className="right">
          <i
            className="material-icons cart-delete"
            onClick={() => props.deleteItemFromCart(itemId)}
          >
            close
          </i>
        </span>
      </div>
    </li>
  );
};
