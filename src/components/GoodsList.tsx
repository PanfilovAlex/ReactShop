import { GoodsItem } from "./GoodsItem";
import { Item } from "./models/Item";

export const GoodsList = (props: any) => {
  const { goods, addToBasket } = props;

  if (!goods.length) {
    return <h3>Nothing found</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item: Item) => {
        return (
          <GoodsItem
            key={item.mainId}
            mainId={item.mainId}
            price={item.price}
            displayName={item.displayName}
            displayAssets={item.displayAssets}
            displayDescription={item.displayDescription}
            addToBasket={addToBasket}
          />
        );
      })}
    </div>
  );
};
