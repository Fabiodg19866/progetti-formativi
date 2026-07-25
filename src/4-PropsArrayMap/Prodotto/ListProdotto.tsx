import { IProdotto } from "./model/IProdotto";
import PropsProdotto from "./PropsProdotto";

type Items = IProdotto[];

const ListProdotto: React.FC<{ product: Items }> = (props) => {
  return (
    <div>
      {props.product.map((prodotto) => (
        <PropsProdotto
          key={prodotto.id}
          picture={prodotto.picture}
          title={prodotto.title}
          category={prodotto.category}
          brand={prodotto.brand}
          price={prodotto.price}
          release={prodotto.release}
        />
      ))}
    </div>
  );
};

export default ListProdotto;
