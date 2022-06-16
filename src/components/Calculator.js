import React, {useState} from "react";

export const Calculator = () => {
  const [display, setDisplay] = useState('0');

  const validateOperators=()=>{
    const regExpRepOps=/('+'|'-'|'*'|'\/'){2,}/;
    const match=display.match(regExpRepOps);
    return match;
  };

  const handleAddKey=e=>{
    console.log(e);
    console.log(e.target.innerHTML);
    const key=e.target.innerHTML;    
    if(display==='0' && key!=='.'){
      setDisplay(key);
    }else{
      if(display.includes('.') && key!=='.'){
        let expression=display+key;        
        setDisplay(expression);        
      }else{
        if(!display.includes('.')){
          let expression2=display+key;        
          setDisplay(expression2); 
        }else{
          if(display.includes('.') && key==='.'){
            setDisplay(display);
          }
        }
      }
    }
  };

  const handleResult=e=>{
    if(!validateOperators(display).length){
        console.log(e.target);
        const expression=document.getElementById("display").innerHTML;
        console.log(expression);
        const result=eval(expression);
        console.log(result);
        const strResult=result.toString();
        setDisplay(strResult);
    }else{

    }
  };

  return (
    <div id="calculator-div">
      <div id="buttons-div">
      <label id="display">{display}</label>
        <button id="clear" onClick={(e)=>setDisplay('0')}>AC</button>
        <button id="divide" onClick={handleAddKey}>/</button>
        <button id="multiply" onClick={handleAddKey}>*</button>
        <button id="seven" onClick={handleAddKey}>7</button>
        <button id="eight" onClick={handleAddKey}>8</button>
        <button id="nine" onClick={handleAddKey}>9</button>
        <button id="subtract" onClick={handleAddKey}>-</button>
        <button id="four" onClick={handleAddKey}>4</button>
        <button id="five" onClick={handleAddKey}>5</button>
        <button id="six" onClick={handleAddKey}>6</button>
        <button id="add" onClick={handleAddKey}>+</button>
        <button id="one" onClick={handleAddKey}>1</button>
        <button id="two" onClick={handleAddKey}>2</button>
        <button id="three" onClick={handleAddKey}>3</button>
        <button id="equals" onClick={handleResult}>=</button>
        <button id="zero" onClick={handleAddKey}>0</button>
        <button id="decimal" onClick={handleAddKey}>.</button>
      </div>
    </div>
  );
};
