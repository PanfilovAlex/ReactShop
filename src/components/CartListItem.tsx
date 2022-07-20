type CartItemProps = {
  mainId: string;
  quantity: number;
};

export const CartListItem = (props: CartItemProps) => {
  return (
    <li className="collection-item">
      {props.mainId} * {props.quantity} 
    </li>
  );
};
