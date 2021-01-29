import React, { useEffect, useState } from 'react'
import axios from './axios';
import requests from './requests'

function Banner() {
  // this is responsible for every random movie set at the top
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      //banner build
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie)
  const bannerStyle = {
    backgroundSize: "cover",
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundPosition: "center center",
    height: "20vh"
  }
  return (
    < header className="banner" style={bannerStyle}>
      <div className="banner-contents">
        {/* title */}
        <h1>{movie.name}</h1>
        {/* div with 2 buttons play+my list */}
        {/* description */}
      </div>


    </header >
  )
}

export default Banner
