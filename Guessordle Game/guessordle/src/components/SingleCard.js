import React, { useState } from 'react'
import './SingleCard.css';


function SingleCard({ card, handleChoice, isWinning, handleClick}) {
  const itemClass = card.stat ? "active " + card.stat: ""


  return (
    <div className={'card' + itemClass} onClick={handleClick} >
      <div> {card.val} </div>
    </div>

  )
}

export default SingleCard