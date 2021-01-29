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

  return (
    <header> {/* This header will have a background image */}
      {/* title */}
      {/* div with 2 buttons play+my list */}
      {/* description */}

    </header>
  )
}

export default Banner
