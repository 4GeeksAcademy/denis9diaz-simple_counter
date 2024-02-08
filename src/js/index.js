import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";

import SecondsCounter from "./component/SecondsCounter.js";

let counter = 0;
let intervalId;
let running = true;

const stopCounter = () => {
    running = false;
    clearInterval(intervalId);
};

const restartCounter = () => {
    running = true;
    intervalId = setInterval(updateCounter, 1000);
};

const resetCounter = () => {
    running = true;
    clearInterval(intervalId); 
    counter = 0;
    intervalId = setInterval(updateCounter, 1000);
};

setInterval(()=>{
    const digitFive = Math.floor(counter/10000);
    const digitFour = Math.floor(counter/1000);
    const digitThree = Math.floor(counter/100);
    const digitTwo = Math.floor(counter/10);
    const digitOne = Math.floor(counter/1);
    
    console.log(digitFive, digitFour, digitThree, digitTwo, digitOne);
    counter++;

ReactDOM.render(<SecondsCounter digitOne={digitOne} digitTwo={digitTwo} digitThree={digitThree} digitFour={digitFour} digitFive={digitFive} stopCounter={stopCounter} restartCounter={restartCounter} resetCounter={resetCounter}/>, document.querySelector("#app"));
},1000);


