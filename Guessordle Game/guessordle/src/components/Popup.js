import React from 'react'

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            { props.children }
            <button 
            className='close-btn' 
            onClick={() => props.setTrigger(false)}
            > X </button>
        </div>
        
    </div>
  ) : "";
};

export default Popup;