import React, { useState } from "react";

export const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const regExp_multipleOperators = /([\+|\-|\*|\/]){2,}/;
  const regExp_iniciateWithOperators = /^([\+|\-|\*|\/])/;
  const regExp_iniciate_with_operators = /^(\+|\-|\*|\/)/;
  const regExp_some_operator = /(\+|\-|\*|\/)/;
  const regExp_numbers = /[0-9]/;
  const regExp_points = /\./g;

  const checkPointLastTerm = (expression) => {
    let flag = false;
    let termsArray = expression.split(/([\+|\-|\*|\/])/);
    if (termsArray[termsArray.length - 1].includes(".")) {
      flag = true;
    }
    return flag;
  };

  const checkErrors = (expression) => {
    try {
      // Si habia otro punto decimal devuelve error
      let match4 = expression.match(regExp_points);
      console.log(match4);
      if (match4) {
        let count = match4.length;
        if (count > 1) return true;
      }
      // FILTRAR ERRORES RELACIONADOS CON OPERADORES
      // -------------------------------------------

      if (expression.match(regExp_some_operator) !== null) {
        // Si empieza con algun operador
        let match = expression.match(regExp_iniciate_with_operators);
        // Si hay operadores repetidos
        let match2 = expression.match(regExp_multipleOperators);
        console.log(match, match2);

        if (match || match2) return true;
      }

      // Si ya habia otro punto
      // if (display.includes(".") === true && expression === ".") return true;

      // si empieza con 0 y la nueva entrada es un punto
      if (expression === "0.") {
        return false;
      }

      // si la entrada se trata de un numero del 0-9
      let match3 = expression.match(regExp_numbers);
      console.log(match3);

      if (display === "0." && match3) return false;

      if (match3) return false;

      else {
        return true;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddKey = (e) => {
    // console.log(e);
    console.log(e.target.innerHTML, typeof e.target.innerHTML);

    const key = e.target.innerHTML;
    let expression;

    if (display !== "0" || (display === "0" && key === ".")) {
      expression = display + key;
    } else {
      expression = key;
    }

    let isErrors = checkErrors(expression);
    console.log(isErrors);

    if (!isErrors) {
      setDisplay(expression);
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
          readOnly // avoid input keyboard
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
