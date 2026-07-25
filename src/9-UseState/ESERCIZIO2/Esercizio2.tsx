/*

Realizza un componente chiamato CounterActions.
Il componente deve gestire un valore numerico tramite useState.
Il valore iniziale deve essere:
10
Devi creare due pulsanti:
Pulsante 1
Quando viene premuto deve aumentare il valore di 1.
Testo pulsante:
Aumenta
Pulsante 2
Quando viene premuto deve diminuire il valore di 1.
Testo pulsante:
Diminuisci
Visualizzare sempre il valore aggiornato.
Utilizzare solamente lo stato React per modificare il valore.


*/

import { useState } from "react";

const Esercizio2 = () => {
  const [incremento, setIncremento] = useState<number>(0);
  const [decremento, setDecremento] = useState<number>(20);

  return (
    <div>
      <h3 >Contatore + {incremento}</h3>
      <h3>Contatore - {decremento}</h3>

      <button
        style={{ marginRight: "2%" }}
        onClick={() => setIncremento(incremento + 1)}
      >
        Incremento
      </button>
          <button onClick={() => setDecremento(decremento - 1)}>Decremento</button>
          
         
    </div>
  );
};

export default Esercizio2;
