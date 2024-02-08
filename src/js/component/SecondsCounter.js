import React, { useState } from "react";
import Clock from "./Clock";
import Digit from "./Digit";
import Buttons from "./Buttons";
import Input from "./Input";

const SecondsCounter = (props) => {
    const [alertNumber, setAlertNumber] = useState(null); 

    const handleNumberChange = (value) => {
        setAlertNumber(parseInt(value)); 
    };

    const checkAlert = () => {
        if (alertNumber !== null && props.digitFive * 10000 + props.digitFour * 1000 + props.digitThree * 100 + props.digitTwo * 10 + props.digitOne === alertNumber) {
            alert(`¡Alerta! El contador ha alcanzado ${alertNumber}.`);
        }
    };

    checkAlert();

    return (
        <div className="totalCounter text-center">
            <div className="counterNumbers">
                <div><Clock /></div>
                <div><Digit digit={props.digitFive}/></div>
                <div><Digit digit={props.digitFour}/></div>
                <div><Digit digit={props.digitThree}/></div>
                <div><Digit digit={props.digitTwo}/></div>
                <div><Digit digit={props.digitOne}/></div>
            </div>
            <div><Buttons stopCounter={props.stopCounter} restartCounter={props.restartCounter} resetCounter={props.resetCounter} /></div>
            <div><Input onNumberChange={handleNumberChange} /></div>
        </div>
    );
};

export default SecondsCounter;

