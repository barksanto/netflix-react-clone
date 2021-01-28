import React, { useState, useEffect } from 'react'

function Row(props) {
  const [movies, setMovies] = useState([]);

  // need code that runs on specific condition or variable
  useEffect(() => {
    // when page loads- make the request
  }, [])


  return (
    <div>
      {/* title */}
      <h2>{props.title}</h2>
      {/* container -> posters - referring to each film that you see */}
    </div>
  )
}

export default Row;
