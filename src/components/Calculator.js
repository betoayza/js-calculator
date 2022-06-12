import React from "react";

export const Calculator = () => {
  return (
    <div id="calculator-div">
      <div id="buttons-div">
      <textarea name="display" id="display" value={0} />
        <button id="AC">AC</button>
        <button id="divide">/</button>
        <button id="multiply">*</button>
        <button id="seven">7</button>
        <button id="eight">8</button>
        <button id="nine">9</button>
        <button id="substract">-</button>
        <button id="four">4</button>
        <button id="five">5</button>
        <button id="six">6</button>
        <button id="sum">+</button>
        <button id="one">1</button>
        <button id="two">2</button>
        <button id="three">3</button>
        <button id="equal">=</button>
        <button id="cero">0</button>
        <button id="decimal">.</button>
      </div>
    </div>
  );
};
