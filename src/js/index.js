import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import SecondsCounter from "./component/SecondsCounter.js";

let counter = 0;
let intervalId;

const stopCounter = () => {
    clearInterval(intervalId);
};

const restartCounter = () => {
    intervalId = setInterval(updateCounter, 1000);
};

const resetCounter = () => {
    clearInterval(intervalId);
    counter = 0;
    intervalId = setInterval(updateCounter, 1000);
};

const updateCounter = () => {
    ReactDOM.render(
        <SecondsCounter
            digitOne={Math.floor(counter / 1) % 10}
            digitTwo={Math.floor(counter / 10) % 10}
            digitThree={Math.floor(counter / 100) % 10}
            digitFour={Math.floor(counter / 1000) % 10}
            digitFive={Math.floor(counter / 10000) % 10}
            stopCounter={stopCounter}
            restartCounter={restartCounter}
            resetCounter={resetCounter}
        />,
        document.querySelector("#app")
    );
    counter++;
};

intervalId = setInterval(updateCounter, 1000);
