import React from 'react';
import './App.css';

import CardSlide from './components/CardSlideArtist/CardSlide';
import ArtistFilter from './components/ArtistFilter/ArtistFilter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">

      <ArtistFilter />
      <CardSlide />
      < Footer />
    </div>
  );
}

export default App;
