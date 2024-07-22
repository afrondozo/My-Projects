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
    letter.stat = "";

    cardSetup.push(letter);
}

// Fills in rest of the cards array with random letters
for(let i = 5; i < 25; i++) {
  let char = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
//   console.log("before", char);
//   console.log('wordOfDay', wordOfTheDay);
  while (wordOfTheDay.includes(char)) {
    char = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
    //console.log("After: " + char);
  }

  const letter = new Object();
  letter.val = char.toUpperCase();
  letter.id = i;
  letter.stat = "";

  cardSetup.push(letter);
}

cardSetup.sort( () => Math.random() - 0.5);


export default function Board() {
    const [board, setBoard] = useState(structuredClone(cardSetup));
    const [index, setIndex] = useState(0);


    // function reset() {
    //     for (let i = 0; i < )
    // };

    

    function handleClick(id, key) {

        if(board[id].val === wordOfTheDay[index]) {
            board[id].stat = "active correct";
            setBoard([...board]);
            setIndex(index + 1);
        } else if (wordOfTheDay.includes(board[id].val)) {
            board[id].stat = "active yellow";
            setBoard([...board]);
        } else {
            board[id].stat = "active gray";
            setBoard([...board]);
            setTimeout(() => {
                //board[id].stat =
                
                //items[prev].stat = "";
                console.log('reset!');
                console.log(cardSetup);
                setBoard(structuredClone(cardSetup));
                setIndex(0);
            }, 1000)
        }


    }

    return(
    <div className='board'>
        <div> {wordOfTheDay}  </div>
        <div className='card-grid'>
            {board.map((card, index) => (
                <SingleCard 
                key={index} 
                card={card}
                id = {index}
                handleClick={handleClick}
                />
            ))}
        </div>
    </div>
    );
}