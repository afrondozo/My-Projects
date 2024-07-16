import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';




function GameBoard() {

  type Color = 'green' | 'grey' | 'white';

  const [color, setColor] = useState<Color>("white");
 
  const handleClick =(newColor: Color) => {
    setColor(newColor);
  }

  useEffect( () => {

  })

  return(
    <div className='gameboard'>
      <div onClick={handleClick('green')}> 1 </div>
      <div> 2 </div>
      <div> 3 </div>
      <div> 4 </div>
      <div> 5 </div>
      <div> 6 </div>
      <div> 7 </div>
      <div> 8 </div>
      <div> 9 </div>
    </div>
  );
}


function App() {
  return (
    <div className="Guessordle">
      <header className='title'> Guessordle </header>
      <div className='container'>
        <GameBoard />
      </div>
    </div>
  );
}

export default App;
