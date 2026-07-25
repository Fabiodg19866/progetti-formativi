/*

Realizza un componente React chiamato Counter.
Il componente deve gestire un numero utilizzando lo stato locale di React.
Deve inizializzare il valore del contatore a:
0
Il componente deve visualizzare:
•	il valore attuale del contatore; 
•	un pulsante per aumentare il valore di 1. 
Ogni volta che l'utente preme il pulsante, il numero visualizzato deve aumentare.
Devi utilizzare:
•	useState; 
•	evento onClick. 

*/

import { useState } from "react";

const Esercizio1 = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>Contatore: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Incrementa</button>
    </div>
  );
};

export default Esercizio1;
