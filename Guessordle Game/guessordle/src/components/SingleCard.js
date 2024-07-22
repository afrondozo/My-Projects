import React, { useState } from 'react'
import './SingleCard.css';


function SingleCard({ key, card, handleClick, id, }) {
  const itemClass = card.stat ? "active" + " correct": ""


  return (
    <div className={'card ' + card.stat} onClick={() => handleClick(id, key)} >
      <div> {card.val} </div>
    </div>

  )
}

export default SingleCard