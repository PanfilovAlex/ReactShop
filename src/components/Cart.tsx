import { Order } from "./models/Order";

type CartProps = {
  order: Order;
  handleCartShow: () => void;
};

const getUnicItemsInCart = (order: Order): number => {
  const values = order.itemIdToQuantity.keys();
  const newValues = Array.from(values);

  return newValues.length;
};

export const Cart = (props: CartProps) => {
  let quantity = getUnicItemsInCart(props.order);
  const handleCartShow = props.handleCartShow;

  return (
    <div className="cart blue darken-4 white-text" onClick={handleCartShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
};
