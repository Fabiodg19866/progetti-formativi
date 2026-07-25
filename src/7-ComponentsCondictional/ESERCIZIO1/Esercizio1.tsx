import { Fragment } from "react";

/*

Crea una costante chiamata eta inizializzata a 20.
Visualizza:
•	"Maggiorenne" se l'età è maggiore o uguale a 18. 
•	"Minorenne" negli altri casi. 
Utilizza l'operatore ternario.


*/

const Esercizio1 = () => {
  const eta = 20;

  return (
    <Fragment>
      <h2>{eta >= 18 ? "Maggiorenne" : "Minorenne"}</h2>
    </Fragment>
  );
};

export default Esercizio1;
