import React from 'react'
import { words } from './Words'
import { alphabet } from './Alphabet';


function Letters() {
  // Get the word for the day
  const wordOfTheDay = words[Math.floor(Math.random() * words.length)];

  // Split word into chars and add letter objects to the cards array
  const cards = [];
  for(let i = 0; i < 5; i++) {
      const letter = new Object();
      letter.val = wordOfTheDay[i];
      letter.id = i;

      cards.push(letter);
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

    cards.push(letter);
  }

  
  const shuffledCards = cards
  .sort( () => Math.random() - 0.5)
  
  

  return (
    <>
      <div>{wordOfTheDay}</div>
      <div className='card-grid'>
        {cards.map(card => (
          <div className='card' key={card.id}>
            {card.val}
          </div>
        ))}
      </div>
    </>
  )
}

export default Letters