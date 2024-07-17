import React from 'react';
import { useState } from 'react';
import './App.css';
import { words } from './components/Words.js';
import { alphabet } from './components/Alphabet.js';
import SingleCard from './components/SingleCard.js';

// Get the word for the day
const wordOfTheDay = "testy"; //words[Math.floor(Math.random() * words.length)];

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
  letter.val = char;
  letter.id = i;

  cardSetup.push(letter);
}

cardSetup.sort( () => Math.random() - 0.5)


export default function App() {
  const [index, setIndex] = useState(0);
  const [flips, setFlips] = useState(0);
  const [flipped, setFlipped] = useState(false);
  
  const handleChoice = (card) => {
    setFlips(flips + 1);
    flipped ? setFlipped(true) : setFlipped(false);
    
  }

  return (
    <div className="App">
      <nav className='title'> 
        <h1>
          GUESSORDLE 
        </h1>
      </nav>

      <div className='board'>
        <div>{wordOfTheDay} {flips} </div>
        <div className='card-grid'>
          {cardSetup.map(card => (
              <SingleCard 
                key={card.id} 
                card={card}
                handleChoice={handleChoice}
                flipped={card === flipped}
              />
          ))}
        </div>
      </div>
      
    </div>
  );
}