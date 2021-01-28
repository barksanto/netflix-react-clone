import React, { useState, useEffect } from 'react'
import axios from './axios';

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  // need code that runs on specific condition or variable
  useEffect(() => {
    // when page loads- make the request
    // if the brackets are blank it means 'run ONCE when the row loads'
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      return request;
    }
    fetchData();
  }, []);


  return (
    <div>
      {/* title */}
      <h2>{title}</h2>
      {/* container -> posters - referring to each film that you see */}
    </div>
  )
}

export default Row;
