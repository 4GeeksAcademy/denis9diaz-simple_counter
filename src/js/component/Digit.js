import React from "react";

const Digit = (props) => {
    console.log(typeof (props.digit))

    return (
        <div className="digits container">
            <div className="digit">{props.digit % 10}</div>
        </div>
    )
};

export default Digit;
