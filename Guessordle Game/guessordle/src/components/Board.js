import { words } from './Words.js';
import { alphabet } from './Alphabet.js';
import SingleCard from './SingleCard.js';
import { useState } from 'react';

// Get the word for the day
const wordOfTheDay =  words[Math.floor(Math.random() * words.length)].toUpperCase();

// Split word into chars and add letter objects to the cards array
const cardSetup = [];
for(let i = 0; i < 5; i++) {
    const letter = new Object();
    letter.val = wordOfTheDay[i];
    letter.id = i;
    letter.stat = "active";

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
  letter.stat = "";

  cardSetup.push(letter);
}

cardSetup.sort( () => Math.random() - 0.5)



export default function Board() {
    const [board, setBoard] = useState(cardSetup);
    const [index, setIndex] = useState(0);

    // function handleClick() {
    //     if (board[])
    // }

    return(
    <div className='board'>
        <div> {wordOfTheDay}  </div>
        <div className='card-grid'>
            {board.map(card => (
                <SingleCard 
                key={card.id} 
                card={card}
                //handleClick={handleClick}
                />
            ))}
        </div>
    </div>
    );
}