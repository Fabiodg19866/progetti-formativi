/*

Realizza un componente React chiamato Age.
Il componente deve ricevere tramite props:
age: number
La proprietà rappresenta l'età di una persona.
Il componente deve mostrare:
•	il valore dell'età ricevuta; 
•	un messaggio che indica se la persona può essere considerata maggiorenne. 
La regola è:
•	se l'età è maggiore o uguale a 18 mostra: 
Maggiorenne
•	se l'età è inferiore a 18 mostra: 
Minorenne
La scelta del messaggio deve essere realizzata utilizzando l'operatore ternario.


*/

import React from "react";
import { IAge } from "./model/IAge";
import { Fragment } from "react";

const Esercizio2: React.FC<IAge> = (props) => {
  return (
    <Fragment>
      <div style={{ color: "red", fontFamily: "fangsong" }}>
        <h1>Età: {props.age}</h1>

        <p>{props.age >= 18 ? "Maggiorenne" : "Minorenne"}</p>
      </div>
    </Fragment>
  );
};

export default Esercizio2;
