//import '../App.css';


function SingleCard({ card, handleClick, id, }) {
 
  return (
    <div className={'card ' + card.stat} onClick={() => handleClick(id, card.flipped)} >
      <div > {card.val} </div>
    </div>
  );
};

export default SingleCard