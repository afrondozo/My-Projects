import React from 'react';
import { useState } from 'react';
import './App.css';
import { words } from './components/Words.js';
import { alphabet } from './components/Alphabet.js';
import SingleCard from './components/SingleCard.js';
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
  //const [board, setBoard] = useState(cardSetup);
  // const [index, setIndex] = useState(0);
  const [flips, setFlips] = useState(0);
  const [flipCard, setFlipCard] = useState("");
  const [isWinning, setIsWinning] = useState(false);
  
  // const handleChoice = (card) => {
  //   setFlips(flips + 1);

  //   if (card.val === wordOfTheDay[index]) {
  //     setIndex(index + 1);
  //     setFlipCard("Green");
  //     setIsWinning(true);
  //   } else if (card.val !== wordOfTheDay[index]) {
  //     setIndex(0);
  //     setIsWinning(false);
  //   }  
  // }

  // to handle flip:
  // 1. click on card
  // 2. if letter is equal the current index of wordofday
  //      - square will be green after flip and will stay there
  //    else if letter is not equal to current index but exists in the word
  //      - square will turn over and be yellow and then turn back around
  //    else
  //      - square will be grey and then turn back

  return (
    <div className="App">
      <nav className='title'> 
        <h1>
          GUESSORDLE 
        </h1>
      </nav>

      <div> {flipCard} </div>

      <Board />

      {/* <div className='board'>
        <div>{wordOfTheDay} {flips} </div>
        <div className='card-grid'>
          {board.map(card => (
              <SingleCard 
                key={card.id} 
                card={card}
                //handleChoice={handleChoice}
                //isWinning={isWinning}
              />
          ))}
        </div>
      </div> */}
      
    </div>
  );
}