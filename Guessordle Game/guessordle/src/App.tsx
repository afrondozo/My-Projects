import React from 'react';
import { useState } from 'react';
import './App.css';




function GameBoard() {
  type Color = 'green' | 'grey' | 'white';
  const [color, setColor] = useState<Color>("white");
 
  const word = 'DECOY';

  const handleClick =() => {
    
    setColor('green');
  }



  return(
    <div className='gameboard'>
      <div className={color} onClick={handleClick} > {word[0]} </div>
      <div> 2 </div>
      <div> 3 </div>
      <div> 4 </div>
      <div> u </div>
      <div> 6 </div>
      <div> 7 </div>
      <div> 8 </div>
      <div> n </div>
      <div> n </div>
      <div> n </div>
      <div> n </div>
      <div> n </div>
      <div> n </div>
      <div> n </div>
      <div> n </div>
      <div> n </div>
      <div> n </div>
      <div> n </div>
      <div> n </div>
      <div> n </div>
      <div> n </div>
      <div> n </div>
      <div> n </div>
      <div> n </div>
    </div>
  );
}

function Tries() {
  return(
    <div>
      <h1> TRIES: </h1>
    </div>
  );
}


function App() {
  return (
    <div className="Guessordle">
      <header className='title'> Guessordle </header>
      <div className='container'>
        <GameBoard />
        <Tries />
      </div>
    </div>
  );
}

export default App;
