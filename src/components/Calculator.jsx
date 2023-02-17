import React, { useState } from "react";

export const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const regExp_multipleOperators = /([\+|\-|\*|\/]){2,}/;
  const regExp_iniciateWithOperators = /^([\+|\-|\*|\/])/;
  const regExp_iniciate_with_operators = /^(\+|\-|\*|\/)/;
  const regExp_some_operator = /(\+|\-|\*|\/)/;
  const regExp_numbers = /[0-9]/;
  const regExp_points = /\./g;

  // const checkPointLastTerm = (expression) => {
  //   let flag = false;
  //   let termsArray = expression.split(/([\+|\-|\*|\/])/);
  //   if (termsArray[termsArray.length - 1].includes(".")) {
  //     flag = true;
  //   }
  //   return flag;
  // };

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
      const result = eval(display);
      console.log(result);
      const strResult = result.toString();
      setDisplay(strResult);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={"rounded p-0 h-auto"}
      style={{
        border: "5px solid",
        borderColor: "#adff2f",
        display: "grid",
        gridTemplateRows: "auto auto",
        backgroundColor: "#a2a2d0",
      }}
    >
      <div className={"h-auto"}>
        <div className={"p-2"}>
          <textarea
            name="display"
            id="display"
            value={display}
            style={{
              backgroundColor: "black",
              color: "yellowgreen",
              width: "100%",
              borderColor: "cyan",
            }}
            className={"rounded container"}
            readOnly // avoid input keyboard
          />
        </div>

        <div
          id="keyboard-div"
          className={"container p-2"}
          style={{ display: "grid", justifyContent: "stretch" }}
        >
          <button
            className={"btn btn-danger border border-dark border-3 btn-square"}
            id="clear"
            onClick={(e) => setDisplay("0")}
            style={{ fontWeight: "bold" }}
          >
            AC
          </button>
          <button
            className={"btn btn-warning border border-dark border-3 btn-square"}
            id="divide"
            onClick={handleAddKey}
            style={{ fontWeight: "bold" }}
          >
            /
          </button>
          <button
            className={"btn btn-warning border border-dark border-3 btn-square"}
            id="multiply"
            onClick={handleAddKey}
            style={{ fontWeight: "bold" }}
          >
            *
          </button>
          <button
            className={"btn btn-light border border-dark border-3 btn-square"}
            id="seven"
            onClick={handleAddKey}
            style={{ backgroundColor: "#20c997", fontWeight: "bold" }}
          >
            7
          </button>
          <button
            className={"btn btn-light border border-dark border-3 btn-square"}
            id="eight"
            onClick={handleAddKey}
            style={{ backgroundColor: "#20c997", fontWeight: "bold" }}
          >
            8
          </button>
          <button
            className={"btn btn-light border border-dark border-3 btn-square"}
            id="nine"
            onClick={handleAddKey}
            style={{ backgroundColor: "#20c997", fontWeight: "bold" }}
          >
            9
          </button>
          <button
            className={"btn btn-warning border border-dark border-3 btn-square"}
            id="subtract"
            onClick={handleAddKey}
            style={{ fontWeight: "bold" }}
          >
            -
          </button>
          <button
            className={"btn btn-light border border-dark border-3 btn-square"}
            id="four"
            onClick={handleAddKey}
            style={{ backgroundColor: "#20c997", fontWeight: "bold" }}
          >
            4
          </button>
          <button
            className={"btn btn-light border border-dark border-3 btn-square"}
            id="five"
            onClick={handleAddKey}
            style={{ backgroundColor: "#20c997", fontWeight: "bold" }}
          >
            5
          </button>
          <button
            className={"btn btn-light border border-dark border-3 btn-square"}
            id="six"
            onClick={handleAddKey}
            style={{ backgroundColor: "#20c997", fontWeight: "bold" }}
          >
            6
          </button>
          <button
            className={"btn btn-warning border border-dark border-3 btn-square"}
            id="add"
            onClick={handleAddKey}
            style={{ fontWeight: "bold" }}
          >
            +
          </button>
          <button
            className={"btn btn-light border border-dark border-3 btn-square"}
            id="one"
            onClick={handleAddKey}
            style={{ backgroundColor: "#20c997", fontWeight: "bold" }}
          >
            1
          </button>
          <button
            className={"btn btn-light border border-dark border-3 btn-square"}
            id="two"
            onClick={handleAddKey}
            style={{ backgroundColor: "#20c997", fontWeight: "bold" }}
          >
            2
          </button>
          <button
            className={"btn btn-light border border-dark border-3 btn-square"}
            id="three"
            onClick={handleAddKey}
            style={{ backgroundColor: "#20c997", fontWeight: "bold" }}
          >
            3
          </button>
          <button
            className={"btn btn-success border border-dark border-3 btn-square"}
            id="equals"
            onClick={handleResult}
            style={{ fontWeight: "bold" }}
          >
            =
          </button>
          <button
            className={"btn btn-light border border-dark border-3 btn-square"}
            id="zero"
            onClick={handleAddKey}
            style={{ backgroundColor: "#20c997", fontWeight: "bold" }}
          >
            0
          </button>
          <button
            className={
              "btn btn-secondary border border-dark border-3 btn-square"
            }
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
