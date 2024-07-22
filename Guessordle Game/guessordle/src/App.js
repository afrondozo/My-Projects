import React from 'react';
import { useState } from 'react';
import './App.css';
import { words } from './components/Words.js';
import { alphabet } from './components/Alphabet.js';
import Board from './components/Board.js';

// Get the word for the day
const wordOfTheDay =  words[Math.floor(Math.random() * words.length)].toUpperCase();

// Split word into chars and add letter objects to the cards array
const cardSetup = [];
for(let i = 0; i < 5; i++) {
    const letter = new Object();
    letter.val = wordOfTheDay[i];
    letter.id = i;

    cardSetup.push(letter);
}

// Fills in rest of the cards array with random letters
for(let i = 5; i < 25; i++) {
  let char = alphabet[Math.floor(Math.random() * alphabet.length)];
  while (wordOfTheDay.includes(char)) {
    char = alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  const letter = new Object();
  letter.val = char.toUpperCase();
  letter.id = i;

  cardSetup.push(letter);
}

cardSetup.sort( () => Math.random() - 0.5)


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