import React from 'react'
import './SingleCard.css';

function SingleCard({ card }) {
  return (
    <div className='card' >
        <div className='front'>
          {card.val}
        </div>

        <div className='back'>
          
        </div>
      
    </div>

  )
}

export default SingleCard