import React from "react";

const Buttons = (props) => {
    return (
        <div className="buttons">
            <button type="button" className="buttonStop btn btn-outline-light me-2" onClick={props.stopCounter}>Stop</button>
            <button type="button" className="buttonRestart btn btn-outline-light me-2" onClick={props.restartCounter}>Restart</button>
            <button type="button" className="buttonReset btn btn-outline-light" onClick={props.resetCounter}>Reset</button>
        </div>
    )
}

export default Buttons;