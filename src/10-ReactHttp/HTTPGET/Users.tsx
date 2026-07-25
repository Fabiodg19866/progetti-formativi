import React, { useState } from 'react'
import axios from 'axios'
import { IUsers } from './model/IUsers';
import UserList from './UserList';


const Users = () => {

    const [users, setUsers] = useState<IUsers[]>([]);
    
       React.useEffect(() => {
    axios.get('https://mocki.io/v1/b69cad4d-15db-4caa-8069-7b7f2011bc6e').then((response) => {
      const dataUsers = response.data.map(
        (users: IUsers) => {
          return {
            id: users.id,
            nome: users.nome,
            cognome: users.cognome,
            eta: users.eta,
            citta: users.citta,
            nazione:users.nazione,
            
          };
        }
      );
      setUsers(dataUsers);
    });
       });
  

  return (
    <div>
      <UserList items = {users} />
      
    
    </div>
  )
}

export default Users
