import React from "react";

const Digit = (props) => {
    console.log(typeof (props.digitFive))

    return (
        <div className="digits container">
            <div className="digitFive">{props.digit % 10}</div>
        </div>
    )
};

export default Digit;