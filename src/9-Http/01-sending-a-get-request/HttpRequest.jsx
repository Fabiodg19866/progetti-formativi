import React, { useState } from 'react';
import axios from 'axios';

import HttpRequestMoviesList from './components/HttpRequestMoviesList';
import './HttpRequest.css';

function HttpRequest() {
  const [movies, setMovies] = useState([]);

  async function fetchMoviesHandler() {
    await axios.get('https://swapi.py4e.com/api/films')
     .then((response) => {
        const transformedMovies = response.data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
      });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <HttpRequestMoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default HttpRequest;
