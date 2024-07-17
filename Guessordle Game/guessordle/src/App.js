import React from 'react';
import { useState } from 'react';
import './App.css';
import './Board.js'
import Board from './Board.js';




export default function App() {
  return (
    <div className="App">
      <nav className='title'> 
        <h1>
          GUESSORDLE 
        </h1>
      </nav>
      <Board />
    </div>
  );
}