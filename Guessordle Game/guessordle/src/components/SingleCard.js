import React, { useState } from 'react'
import './SingleCard.css';


function SingleCard({ card, handleChoice, flip}) {
  const [color, setColor] = useState('');

  const handleClick = () => {
    handleChoice(card);
    setColor("flipped");
   };

  //  const flip = () => {
  //   return (
  //     backgroundColor: green; 
  //   );
  //  };

  return (
    <div className='card' >
      <div className={color}>
        <div className='face front'>
          <div className='front'>
            {card.val}
          </div>
        </div>

        <div className='face back' onClick={handleClick}>
          <div className='back'> </div>
        </div>
      </div>
    </div>

  )
}

export default SingleCard