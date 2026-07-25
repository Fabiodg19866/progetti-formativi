


import { IProductListProps } from "./model/IProductList";

const PropsIfElse: React.FC<IProductListProps> = ({ prodotti }) => {

const getStato = (quantita: number): string => {
  if (quantita > 0) {
    return "Disponibile";
  } else {
    return "Esaurito";
  }
};

  return (
    <ul>
      {prodotti?.map((p) => (
        <li key={p.id}>
          {p.nome} - {getStato(p.quantita)}
        </li>
      ))}
    </ul>
  );
};

export default PropsIfElse;
