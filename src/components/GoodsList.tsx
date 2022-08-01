import { GoodsItem } from "./GoodsItem";
import { Item } from "./models/Item";

export type GoodsListProps = {
  goods: Item[];
  addToCart: (itemId: string) => void;
};
export const GoodsList = (props: GoodsListProps) => {
  const { goods, addToCart } = props;

  if (!goods.length) {
    return <h3>Nothing found</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item: Item) => {
        return (
          <GoodsItem key={item.mainId} item={item} addToCart={addToCart} />
        );
      })}
    </div>
  );
};
