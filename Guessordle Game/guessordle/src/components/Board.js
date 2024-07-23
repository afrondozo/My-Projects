import { words } from './Words.js';
import { alphabet } from './Alphabet.js';
import SingleCard from './SingleCard.js';
import { useState } from 'react';

// Get the word for the day
const wordOfTheDay = words[Math.floor(Math.random() * words.length)].toUpperCase();

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
for(let i = 5; i < 16; i++) {
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
  letter.flipped = false;

  cardSetup.push(letter);
}

cardSetup.sort( () => Math.random() - 0.5);


export default function Board() {
    const [board, setBoard] = useState(structuredClone(cardSetup));
    const [index, setIndex] = useState(0);
    const [display, setDisplay] = useState("");
    const [disableClick, setDisableClick] = useState(false); // State variable for click disablement

    function check(index) {
        if (index === 4) {
            setDisableClick(true);
        }
    }

    function handleClick(id, flipped) {
        if (disableClick || flipped) {
            return;
        }

        setDisplay(display + board[id].val);
        if(board[id].val === wordOfTheDay[index]) {
            board[id].stat = "active correct";
            board[id].flipped = true;
            setBoard([...board]);
            setIndex(index + 1);
        } else if (wordOfTheDay.includes(board[id].val)) {
            board[id].stat = "active yellow";
            setBoard([...board]);
            setDisableClick(true);
            setTimeout(() => {
                console.log('reset!');
                console.log(cardSetup);
                setBoard(structuredClone(cardSetup));
                setIndex(0);
                setDisplay("");
                setDisableClick(false);
            }, 900);
        } else {
            board[id].stat = "active gray";
            setBoard([...board]);
            setDisableClick(true);
            setTimeout(() => {
                console.log('reset!');
                console.log(cardSetup);
                setBoard(structuredClone(cardSetup));
                setIndex(0);
                setDisplay("");
                setDisableClick(false);
            }, 900);
        }

        check(index);
    }

    return(
    <div className='board'>
        <div className='display-box'>
            <div className='text-display'> {display} </div>
        </div>
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