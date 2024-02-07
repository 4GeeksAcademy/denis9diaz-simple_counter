import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";

import SecondsCounter from "./component/SecondsCounter.js";

let counter = 0;
setInterval(()=>{
    const digitFive = Math.floor(counter/10000);
    const digitFour = Math.floor(counter/1000);
    const digitThree = Math.floor(counter/100);
    const digitTwo = Math.floor(counter/10);
    const digitOne = Math.floor(counter/1);
    
    console.log(digitFive, digitFour, digitThree, digitTwo, digitOne);
    counter++;

ReactDOM.render(<SecondsCounter digitOne={digitOne} digitTwo={digitTwo} digitThree={digitThree} digitFour={digitFour} digitFive={digitFive}/>, document.querySelector("#app"));
},1000);


