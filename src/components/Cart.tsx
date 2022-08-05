import { Order } from "./models/Order";

type CartProps = {
  order: Order;
  handleCartShow: () => void;
};

export const Cart = (props: CartProps) => {
  let quantity = props.order.itemToQuantity.size;
  const handleCartShow = props.handleCartShow;

  return (
    <div className="cart blue darken-4 white-text" onClick={handleCartShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? (
        <span
          className="cart-quantity"
          style={{ color: "white", padding: "5px 5px" }}
        >
          {quantity}
        </span>
      ) : null}
    </div>
  );
};
