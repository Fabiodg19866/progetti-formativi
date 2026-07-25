import React from "react";

import { IUsers } from "./model/IUsers";
import PropsUsers from "./PropsUsers";

type Items = IUsers[];

const UserList: React.FC<{ items: Items }> = (props) => {
  return (
    <div>
      {props.items.map((users) => (
        <PropsUsers
          key={users.id}
          nome={users.nome}
          cognome={users.cognome}
          eta={users.eta}
          citta={users.citta}
          nazione={users.nazione}
        />
      ))}
    </div>
  );
};

export default UserList;
