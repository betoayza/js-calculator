import React from "react";
import { Calculator } from "./components/Calculator";

function App() {
  return (
    <div
      className="App w-auto"
      style={{ display: "grid", placeItems: "center", height: "100vh" }}
    >
      {/* <h1>JS Calculator</h1> */}
      <Calculator />
    </div>
  );
}

export default App;
