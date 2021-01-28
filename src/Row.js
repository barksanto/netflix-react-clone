import React, { useState, useEffect } from 'react'
import axios from './axios';
import './Row.css';

const imageBaseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  // need code that runs on specific condition or variable
  useEffect(() => {
    // when page loads- make the request
    // if the brackets are blank it means 'run ONCE when the row loads'
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request.data.results);
      setMovies(request.data.results)
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      <div className="row-posters">
        {/* several row-posters */}
        {movies.map(movie => (
          <img
            src={`${imageBaseUrl}${movie.poster_path}`}
            alt={movie.name}
            className="row-poster"
            key={movie.id} />
        ))}
      </div>
      {/* container -> posters - referring to each film that you see */}
    </div>
  )
}

export default Row;
