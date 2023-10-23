import './App.css';
import React, { useState } from "react";

function App() {
  const [display, setDisplay] = useState("0");
  const [operator, setOperator] = useState("");

  const handleNumberClick = (number) => {
    setDisplay(display + number);
  };

  const handleOperatorClick = (operator) => {
    setOperator(operator);
    setDisplay(display + operator);
  };

  const handleEqualsClick = () => {
    const [operand1, operand2] = display.split(operator);
    const result = calculate(operand1, operand2, operator);
    setDisplay(result);
  };

  const calculate = (operand1, operand2, operator) => {
    switch (operator) {
      case "+":
        return operand1 + operand2;
      case "-":
        return operand1 - operand2;
      case "*":
        return operand1 * operand2;
      case "/":
        return operand1 / operand2;
      default:
        return 0;
    }
  };

  const handleClearClick = () => {
    setDisplay("0");
    setOperator("");
  };

  const backspace = () => {
    setDisplay(display.slice(0, -1));
  };

  return (
    <div className="calculator">
      <h1>This is a calculator</h1>
      <br></br>
      <input type="text" value={display} readOnly />
      <div className="buttons">
        <button onClick={handleNumberClick}>7</button>
        <button onClick={handleNumberClick}>8</button>
        <button onClick={handleNumberClick}>9</button>
        <button onClick={backspace}>DEL</button>        
        <button onClick={handleNumberClick}>4</button>
        <button onClick={handleNumberClick}>5</button>
        <button onClick={handleNumberClick}>6</button>        
        <button onClick={handleOperatorClick}>*</button>
        <button onClick={handleNumberClick}>1</button>
        <button onClick={handleNumberClick}>2</button>
        <button onClick={handleNumberClick}>3</button>
        <button onClick={handleOperatorClick}>/</button>
        <button onClick={handleNumberClick}>0</button>
        <button onClick={handleOperatorClick}>.</button>
        <button onClick={handleNumberClick}>-</button>
        <button onClick={handleEqualsClick}>=</button>
        <button onClick={handleClearClick}>C</button>
      </div>
    </div>
  );
}

export default App;
