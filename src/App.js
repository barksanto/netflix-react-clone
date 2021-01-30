import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests'
import Banner from './Banner';
import Nav from './Nav';


function App() {
  return (

    <div className="App">
      {/* Navbar Component */}
      <Nav/>
      <Banner />
      {/* Banner Component */}
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} big /> {/* big={true} */}
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.TopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
