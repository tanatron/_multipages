import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleDisplay = (value) => {
    setDisplay(prev => prev + value);
  };

  const calculate = () => {
    try {
      const result = new Function('return ' + display)();
      setDisplay(String(result));
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clearScreen = () => {
    setDisplay('');
  };

  const style = `
    .calculator-container {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-color: #ffffff;
    }

    .calculator {
      width: 320px;
      background: #ffffff;
      border-radius: 20px;
      padding: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .display-box {
      width: 100%;
      height: 80px;
      margin-bottom: 20px;
      padding: 0 20px;
      font-size: 36px;
      text-align: right;
      color: #2d3436;
      background: #f8f9fa;
      border: none;
      border-radius: 12px;
      outline: none;
    }

    .buttons-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
    }

    .calc-button {
      height: 65px;
      border: none;
      border-radius: 12px;
      font-size: 24px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      color: #2d3436;
      background: #f8f9fa;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .calc-button:hover {
      background: #f1f3f5;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .calc-button:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .operator {
      background: #e3f2fd;
      color: #1976d2;
      font-weight: bold;
    }

    .operator:hover {
      background: #bbdefb;
    }

    .special-btn {
      background: #ffebee;
      color: #d32f2f;
    }

    .special-btn:hover {
      background: #ffcdd2;
    }

    .equals {
      background: #e8f5e9;
      color: #2e7d32;
    }

    .equals:hover {
      background: #c8e6c9;
    }

    @media (max-width: 400px) {
      .calculator {
        width: 90%;
        padding: 15px;
      }

      .calc-button {
        height: 55px;
        font-size: 20px;
      }
    }
  `;

  return (
    <>
      <style>{style}</style>
      <div className="calculator-container">
        <div className="calculator">
          <input 
            className="display-box" 
            type="text" 
            value={display} 
            readOnly 
          />
          <div className="buttons-grid">
            <button className="calc-button special-btn" onClick={clearScreen}>C</button>
            <button className="calc-button operator" onClick={() => handleDisplay('(')}>(</button>
            <button className="calc-button operator" onClick={() => handleDisplay(')')}>)</button>
            <button className="calc-button operator" onClick={() => handleDisplay('/')}>÷</button>

            <button className="calc-button" onClick={() => handleDisplay('7')}>7</button>
            <button className="calc-button" onClick={() => handleDisplay('8')}>8</button>
            <button className="calc-button" onClick={() => handleDisplay('9')}>9</button>
            <button className="calc-button operator" onClick={() => handleDisplay('*')}>×</button>

            <button className="calc-button" onClick={() => handleDisplay('4')}>4</button>
            <button className="calc-button" onClick={() => handleDisplay('5')}>5</button>
            <button className="calc-button" onClick={() => handleDisplay('6')}>6</button>
            <button className="calc-button operator" onClick={() => handleDisplay('-')}>−</button>

            <button className="calc-button" onClick={() => handleDisplay('1')}>1</button>
            <button className="calc-button" onClick={() => handleDisplay('2')}>2</button>
            <button className="calc-button" onClick={() => handleDisplay('3')}>3</button>
            <button className="calc-button operator" onClick={() => handleDisplay('+')}>+</button>

            <button className="calc-button" onClick={() => handleDisplay('00')}>00</button>
            <button className="calc-button" onClick={() => handleDisplay('0')}>0</button>
            <button className="calc-button" onClick={() => handleDisplay('.')}>.</button>
            <button className="calc-button equals" onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;