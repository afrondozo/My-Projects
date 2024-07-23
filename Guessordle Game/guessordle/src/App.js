import React from 'react';
import { useState } from 'react';
import './App.css';
import Board from './components/Board.js';
import Nav from './components/Nav.js';
import Tutorial from './components/Tutorial.js';
import Start from './components/Start.js';




export default function App() {
  const [showStartScreen, setShowStartScreen] = useState(true);

  const handleStartClick = () => {
      setShowStartScreen(false);
  };

  return (
    <div className="App">
      {showStartScreen && <Start onStartClick={handleStartClick} />}
      {!showStartScreen && <React.Fragment>
          <Nav />
          <Board />
          <Tutorial />
      </React.Fragment>}
    </div>

    // <div className="App">
    //   <Start />
    //   <Nav />
    //   <Board />
    //   <Tutorial />
    // </div>
  );
}