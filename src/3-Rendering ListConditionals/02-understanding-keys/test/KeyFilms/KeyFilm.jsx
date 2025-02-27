import React from 'react'
import Films  from './Films';


const KeyFilm = () => {
 
    const films= [
        {
            id: 1,
            title: 'Film Action',
            description: 'Action',
            release:2023
        },

        {
            id: 2,
            title: 'Film Horror',
            description: 'Horror',
            release:2022
        },
        {
            id: 3,
            title: 'Film Commedia',
            description: 'Commedia',
            release:2021
        }
      ];

  return (
      <div>KeyFilm
           <ul>
              {films.map((film) =>
                  <Films key = {film.id} title={film.title}
                      description={film.description}
                      release= {film.release}
                  />)}
          </ul>
          
       





    </div>
  )
}

export default KeyFilm