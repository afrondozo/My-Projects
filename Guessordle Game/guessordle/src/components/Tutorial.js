import { useState } from 'react';
import Popup from './Popup.js';

function Tutorial() {
    const [buttonPopup, setButtonPopup] = useState(false); 

    return(
        <div className='tutorial'>
            <button className='tutorial-btn' onClick={() => setButtonPopup(true)}> How to play </button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div className='instructions'>
                    <h1> How To Play </h1>
                    <p> Flip over cards to find the hidden word </p>
                    <ul>
                        <li> Once letter are found, the word must be spelled correctly </li>
                        <li> Each card will flip over either grey, yellow, or green </li>
                        <li> Yellow means the letter is in the word, but wrong order </li>
                        <li> Green indicates the letter is in the word and correct order </li>
                        <li> Grey means the letter is not in the word </li>
                    </ul>
                    <p> FIND THE FIRST LETTER TO START!! </p>
                </div>
            </Popup>
        </div>
    )
}

export default Tutorial;