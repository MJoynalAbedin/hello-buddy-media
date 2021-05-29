import React from 'react';
import './App.css';
import Feed from './Components/feed/feed';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Feed/>
    </div>
  );
}

export default App;
