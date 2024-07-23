
function Start({ onStartClick }) {
    return(
        <div className="start-screen">
            <div className="start-screen-container">
                <h1>Welcome to Your App</h1>
                <button onClick={onStartClick}>Click to play</button>
            </div>
        </div>
    );
};

export default Start;