import React from 'react'
import './SingleCard.css';


function SingleCard({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
   };

  //  const flip = () => {
  //   return (
  //     backgroundColor: green; 
  //   );
  //  };

  return (
    <div className='card' >
      <div >
        <div className='face front'>
          <div className='front'>
            {card.val}
          </div>
        </div>

        {/* <div className='face back' onClick={handleClick}>
          <div className='back'> </div>
        </div> */}
      </div>
    </div>

  )
}

export default SingleCard