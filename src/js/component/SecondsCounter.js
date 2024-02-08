import React, { useState, useEffect } from "react";
import Clock from "./Clock";
import Digit from "./Digit";
import Buttons from "./Buttons";

const SecondsCounter = () => {
    const [counter, setCounter] = useState(0);
    const [targetValue, setTargetValue] = useState("Ingrese número para alerta");
    const [intervalId, setIntervalId] = useState(null);

    const stopCounter = () => {
        clearInterval(intervalId);
        setIntervalId(null);
    };

    const restartCounter = () => {
		clearInterval(intervalId); 
		const id = setInterval(() => {
			setCounter(prevCounter => prevCounter + 1);
		}, 1000);
		setIntervalId(id); 
	};

	const resetCounter = () => {
		setCounter(0);
		setTargetValue(0);
		clearInterval(intervalId); 
		const id = setInterval(() => { 
			setCounter(prevCounter => prevCounter + 1);
		}, 1000);
		setIntervalId(id);
	};

    const handleInputChange = event => {
        setTargetValue(parseInt(event.target.value));
    };

	useEffect(() => {
        if (intervalId) {
            clearInterval(intervalId);
        }
        const id = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000);
        setIntervalId(id);

        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        if (counter === targetValue && targetValue !== 0) {
            alert("El contador alcanzó el valor ingresado!");
        }
    }, [counter, targetValue]);

    const digitFive = Math.floor(counter / 10000);
    const digitFour = Math.floor(counter / 1000);
    const digitThree = Math.floor(counter / 100);
    const digitTwo = Math.floor(counter / 10);
    const digitOne = Math.floor(counter / 1);

    return (
        <div className="totalCounter text-center container">
            <div className="counterNumbers">
                <div><Clock /></div>
                <div><Digit digit={digitFive} /></div>
                <div><Digit digit={digitFour} /></div>
                <div><Digit digit={digitThree} /></div>
                <div><Digit digit={digitTwo} /></div>
                <div><Digit digit={digitOne} /></div>
            </div>
			<div>
                <Buttons stopCounter={stopCounter} restartCounter={restartCounter} resetCounter={resetCounter}/>
            </div>
            <div className="inputContainer">
                <input type="number" value={targetValue} onChange={handleInputChange} placeholder="Ingrese número para alerta" className="smallInput"/>
			</div>
        </div>
    );
};

export default SecondsCounter;
