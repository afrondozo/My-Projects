import React from 'react';
import { useState } from 'react';
import './App.css';
import './components/Board.js'
import Board from './components/Board.js';




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