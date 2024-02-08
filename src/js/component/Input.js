import React from "react";

const Input = ({ onNumberChange }) => {
    const handleInputChange = (event) => {
        const value = event.target.value;
        onNumberChange(value);
    };

    return (
        <div className="inputContainer">
            <input type="number" placeholder="Ingrese número para alerta" className="smallInput" onChange={handleInputChange}/>
        </div>
    )
}

export default Input;
