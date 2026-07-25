import { IProdotto } from "./model/IProdotto";

const PropsProdotto: React.FC<IProdotto> = (props) => {
  return (
    <div>
      <img src={props.picture} alt={props.title} height={150} />
      <h2>{props.title}</h2>
          <h3>{props.category}</h3>
           <h3>{props.brand}</h3>
      <h4>{props.price} €</h4>
      <h5>{props.release}</h5>
    </div>
  );
};

export default PropsProdotto;
