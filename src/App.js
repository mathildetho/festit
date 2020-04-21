import React from 'react';
import './App.css';
import Footer from './components/Footer';
import ArtistList from './components/ArtistList';
import ArtistSlide from './components/ArtistSlide';
import CardSlide from './components/CardSlide';

function App() {
  return (
    <div className="App">
      <ArtistSlide />
      <CardSlide />
      < Footer />
    </div>
  );
}

export default App;
