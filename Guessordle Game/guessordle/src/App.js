import React from 'react';
import { useState } from 'react';
import './App.css';


function Square({letter,onSquareClick, color}) {
  return(
    <div className={color} onClick={onSquareClick}>{letter}</div>

  );
}



function GameBoard() {
  const [color, setColor] = useState("white");
 
  const word = 'DECOY';

  const handleClick =() => {
    
    setColor('green');
  }



  return(
    <div className='gameboard'>
      <div  className={color} onClick={handleClick} > {word[0]} </div>
      <Square letter="Test" color={color} onSquareClick={handleClick} />
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
      <h1> TRIES: unlimted </h1>
    </div>
  );
}


export default function App() {
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