import React, { Fragment } from "react";
import { IUsers } from "./model/IUsers";

const PropsUsers: React.FC<IUsers> = (props) => {
  return (
    <Fragment>
      <div
        style={{
          color: "red",
          fontFamily: "fantasy",
          padding: "40px",
          backgroundColor: "beige",
          marginLeft: "35%",
          marginRight: "35%",
          marginTop: "5%",
          borderRadius: "20px",
        }}
      >
        <h3>Nome :{props.nome}</h3>
        <h3>Cognome :{props.cognome}</h3>
        <h3>Eta':{props.eta}</h3>
        <h3>Citta' {props.citta}</h3>
        <h3> Nazione :{props.nazione}</h3>
      </div>
    </Fragment>
  );
};

export default PropsUsers;
