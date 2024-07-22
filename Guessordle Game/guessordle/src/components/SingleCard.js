import React, { useState } from 'react'
import './SingleCard.css';


function SingleCard({ card, handleClick, id, }) {
 
  return (
    <div className={'card ' + card.stat} onClick={() => handleClick(id)} >
      <div > {card.val} </div>
    </div>
  );
};

export default SingleCard