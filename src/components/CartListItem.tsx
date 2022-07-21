type CartItemProps = {
  mainId: string;
  quantity: number;
  deleteItemFromCart: (itemId: string) => void;
};

export const CartListItem = (props: CartItemProps) => {
  return (
    <li className="collection-item">
      {props.mainId} * {props.quantity}{" "}
      <span className="right">
        <i
          className="material-icons cart-delete"
          onClick={() => props.deleteItemFromCart(props.mainId)}
        >
          close
        </i>
      </span>
    </li>
  );
};
