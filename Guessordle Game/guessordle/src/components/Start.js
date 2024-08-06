import logo from './icon.png';


function Start({ onStartClick }) {
    return(
        <div className="start-screen">
            <div className="start-screen-container">
                <img src={logo} alt="logo" />
                <h2> WordFlip </h2>
                <p> 
                    Flip over cards to uncover the hidden <br/>
                    5-letter word 
                </p>
                <button className='start-btn' onClick={onStartClick}> Play </button>
            </div>
        </div>
    );
};

export default Start;