import './styles.css';

import { GoodsItem } from '../GoodsItem';

export const GoodsList = (props) => {
  const { goods = [], addToBasket = Function.prototype } = props;

  return !goods.length ? (
    <h3> </h3>
  ) : (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
};
