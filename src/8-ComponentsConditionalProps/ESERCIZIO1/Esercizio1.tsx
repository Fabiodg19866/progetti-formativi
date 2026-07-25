/*

Realizza un componente React chiamato UserStatus.
Il componente deve ricevere tramite props un valore booleano chiamato:
online: boolean
Questa proprietà rappresenta lo stato di connessione dell'utente.
Il componente deve visualizzare un messaggio diverso in base al valore ricevuto:
•	se online è true, significa che l'utente è collegato e deve essere visualizzato: 
Utente Online
•	se online è false, significa che l'utente non è collegato e deve essere visualizzato: 
Utente Offline
Utilizzare esclusivamente l'operatore ternario.


*/


import React from "react";
import { IUser } from "./model/IUser";

const Esercizio1 : React.FC<IUser> = (props)  => {
  return (
    <div>
      <h2>{props.online ? "Utente Online" : "Utente Offline"}</h2>
    </div>
  );
};

export default Esercizio1;
