import React, { useState } from "react";

export const Calculator = () => {
  const [display, setDisplay] = useState("0");

  const checkPointLastTerm = (expression) => {
    let flag = false;
    let termsArray = expression.split(/([\+|\-|\*|\/])/);
    if (termsArray[termsArray.length - 1].includes(".")) {
      flag = true;
    }
    return flag;
  };

  const validateOperators = (expression) => {
    try {
      const regExp = /([\+|\-|\*|\/]){2,}/;
      const match = expression.match(regExp);
      if (match) {
        console.log(match[0]);
        const operators = match[0];
        //if last char is not "-", take last
        const lastOperator = operators.charAt(operators.length - 1);
        if (lastOperator !== "-") {
          expression = expression.replace(operators, lastOperator);
          //setDisplay(expression);
        }
      }
      return expression;
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddKey = (e) => {
    try {
      console.log(e);
      console.log(e.target.innerHTML);
      const key = e.target.innerHTML;
      if (display === "0" && key !== ".") {
        setDisplay(key);
      } else {
        if (checkPointLastTerm(display) === true && key !== ".") {
          let expression = display + key;
          setDisplay(expression);
        } else {
          if (checkPointLastTerm(display) === false) {
            let expression2 = display + key;
            setDisplay(expression2);
          } else {
            if (checkPointLastTerm(display) && key === ".") {
              setDisplay(display);
            }
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleResult = (e) => {
    try {
      console.log(e.target);
      const expression = validateOperators(display);
      console.log(expression);
      //const expression=display;
      const result = eval(expression);
      console.log(result);
      const strResult = result.toString();
      setDisplay(strResult);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={"rounded p-0 h-auto container"}
      style={{
        border: "5px solid",
        borderColor: "#adff2f",
        display: "grid",
        gridTemplateRows: "auto auto",
      }}
    >
      <div className={"h-auto"}>
        <textarea
          name="display"
          id="display"
          value={display}
          style={{
            backgroundColor: "black",
            color: "yellowgreen",
            width: "100%",
          }}
        />

        <div
          id="buttons-div"
          className={""}
          style={{ display: "grid", justifyContent: "stretch" }}
        >
          <button
            className={"btn btn-danger border border-dark border-3"}
            id="clear"
            onClick={(e) => setDisplay("0")}
            style={{ fontWeight: "bold" }}
          >
            AC
          </button>
          <button
            className={"btn btn-warning border border-dark border-3"}
            id="divide"
            onClick={handleAddKey}
            style={{ fontWeight: "bold" }}
          >
            /
          </button>
          <button
            className={"btn btn-warning border border-dark border-3"}
            id="multiply"
            onClick={handleAddKey}
            style={{ fontWeight: "bold" }}
          >
            *
          </button>
          <button
            className={"btn btn-light border border-dark border-3"}
            id="seven"
            onClick={handleAddKey}
            style={{ backgroundColor: "#20c997", fontWeight: "bold" }}
          >
            7
          </button>
          <button
            className={"btn btn-light border border-dark border-3"}
            id="eight"
            onClick={handleAddKey}
            style={{ backgroundColor: "#20c997", fontWeight: "bold" }}
          >
            8
          </button>
          <button
            className={"btn btn-light border border-dark border-3"}
            id="nine"
            onClick={handleAddKey}
            style={{ backgroundColor: "#20c997", fontWeight: "bold" }}
          >
            9
          </button>
          <button
            className={"btn btn-warning border border-dark border-3"}
            id="subtract"
            onClick={handleAddKey}
            style={{ fontWeight: "bold" }}
          >
            -
          </button>
          <button
            className={"btn btn-light border border-dark border-3"}
            id="four"
            onClick={handleAddKey}
            style={{ backgroundColor: "#20c997", fontWeight: "bold" }}
          >
            4
          </button>
          <button
            className={"btn btn-light border border-dark border-3"}
            id="five"
            onClick={handleAddKey}
            style={{ backgroundColor: "#20c997", fontWeight: "bold" }}
          >
            5
          </button>
          <button
            className={"btn btn-light border border-dark border-3"}
            id="six"
            onClick={handleAddKey}
            style={{ backgroundColor: "#20c997", fontWeight: "bold" }}
          >
            6
          </button>
          <button
            className={"btn btn-warning border border-dark border-3"}
            id="add"
            onClick={handleAddKey}
            style={{ fontWeight: "bold" }}
          >
            +
          </button>
          <button
            className={"btn btn-light border border-dark border-3"}
            id="one"
            onClick={handleAddKey}
            style={{ backgroundColor: "#20c997", fontWeight: "bold" }}
          >
            1
          </button>
          <button
            className={"btn btn-light border border-dark border-3"}
            id="two"
            onClick={handleAddKey}
            style={{ backgroundColor: "#20c997", fontWeight: "bold" }}
          >
            2
          </button>
          <button
            className={"btn btn-light border border-dark border-3"}
            id="three"
            onClick={handleAddKey}
            style={{ backgroundColor: "#20c997", fontWeight: "bold" }}
          >
            3
          </button>
          <button
            className={"btn btn-success border border-dark border-3"}
            id="equals"
            onClick={handleResult}
            style={{ fontWeight: "bold" }}
          >
            =
          </button>
          <button
            className={"btn btn-light border border-dark border-3"}
            id="zero"
            onClick={handleAddKey}
            style={{ backgroundColor: "#20c997", fontWeight: "bold" }}
          >
            0
          </button>
          <button
            className={"btn btn-secondary border border-dark border-3"}
            id="decimal"
            onClick={handleAddKey}
            style={{ fontWeight: "bold" }}
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
};
