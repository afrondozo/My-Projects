import react, { useState } from 'react';
import Popup from './Popup.js';

function Tutorial() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return(
        <div className='tutorial'>
            <button className='tutorial-btn' onClick={() => setButtonPopup(true)}> How to play </button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3> my popup </h3>
            </Popup>
        </div>
    )
}

export default Tutorial;