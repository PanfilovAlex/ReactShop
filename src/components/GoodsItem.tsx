import { Item } from "./models/Item";

type GoodsItemProps = {
  item: Item;
  addToCart: (itemId: string) => void;
};

export const GoodsItem = (props: GoodsItemProps) => {
  const { mainId, displayName, displayDescription, price, displayAssets } =
    props.item;

  const addToCart = props.addToCart;

  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img src={displayAssets[0].full_background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={() => addToCart(mainId)}>
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price.finalPrice} rub.
        </span>
      </div>
    </div>
  );
};
