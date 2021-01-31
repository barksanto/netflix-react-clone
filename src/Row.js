import React, { useState, useEffect } from 'react'
import axios from './axios';
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

const imageBaseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, big }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

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

  // console.log(movies);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'));
        }).catch(error => console.log(error));
    }
  }

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      <div className={"row-posters"} >
        {/* several row-posters */}
        {movies.map(movie => (
          <img
            onClick={() => handleClick(movie)}
            src={`${imageBaseUrl}${big ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            className="row-poster"
            key={movie.id}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row;
