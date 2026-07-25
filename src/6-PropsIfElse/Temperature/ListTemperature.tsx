import { ITemperature } from "./model/ITemperature";

type Items = ITemperature[];

const ListTemperature: React.FC<{ items: Items }> = (props) => {
  const getStato = (gradi: number): string => {
    if (gradi > 25) {
      return "Calda";
    } else {
      return "Fredda";
    }
  };

  return (
      <div>
          <header>
              <h2 style={{
                  color: 'brown', backgroundColor: 'yellow',
                  marginLeft: '25%', marginRight: '25%',
                  fontFamily: 'fantasy', textAlign : 'center', fontSize : 'x-large'
              }}>TEMPERATURE CITTA' :</h2>
          </header>
      <ul style={{color: 'red', 
                   fontFamily : 'fantasy'}}>
        {props.items.map((t) => (
          <li key={t.id}>
            {t.citta} - {getStato(t.gradi)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTemperature;
