import React from 'react'
import './SingleCard.css';


function SingleCard({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
   };

  return (
    <div className='card' >
      <div className={flipped ? 'flipped': ""}>
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