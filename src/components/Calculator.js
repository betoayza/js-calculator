import React, {useState} from "react";

export const Calculator = () => {
  const [display, setDisplay] = useState('0');

  const handleClick=e=>{
    console.log(e);
    console.log(e.target.innerHTML);
    const key=e.target.innerHTML;
    setDisplay(display+key);

  };

  return (
    <div id="calculator-div">
      <div id="buttons-div">
      <textarea name="display" id="display" value={display} readOnly />
        <button id="clear" onClick={(e)=>setDisplay('0')}>AC</button>
        <button id="divide">/</button>
        <button id="multiply">*</button>
        <button id="seven" onClick={handleClick}>7</button>
        <button id="eight">8</button>
        <button id="nine">9</button>
        <button id="subtract">-</button>
        <button id="four">4</button>
        <button id="five">5</button>
        <button id="six">6</button>
        <button id="add">+</button>
        <button id="one">1</button>
        <button id="two">2</button>
        <button id="three">3</button>
        <button id="equal">=</button>
        <button id="zero">0</button>
        <button id="decimal">.</button>
      </div>
    </div>
  );
};
