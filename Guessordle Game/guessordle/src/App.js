import React from 'react';
import './App.css';
import Board from './components/Board.js';
import Nav from './components/Nav.js';
import Tutorial from './components/Tutorial.js';



export default function App() {

  return (
    <div className="App">
      <Nav />
      <Board />
      <Tutorial />
    </div>
  );
}