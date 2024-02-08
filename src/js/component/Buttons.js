import React from "react";

const Buttons = (props) => {
    return (
        <div className="buttons">
            <button type="button" className="buttonStop btn btn-outline-light me-2" onClick={props.stopCounter}>STOP</button>
            <button type="button" className="buttonRestart btn btn-outline-light me-2" onClick={props.restartCounter}>RESTART</button>
            <button type="button" className="buttonReset btn btn-outline-light" onClick={props.resetCounter}>RESET</button>
        </div>
    )
}

export default Buttons;
