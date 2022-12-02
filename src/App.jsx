import React from "react";
import { Calculator } from "./components/Calculator";

function App() {
  return (
    <div
      className="App container h-auto"
      style={{
        display: "grid",
        placeItems: "center",        
      }}
    >
      <h1 style={{ color: "#ffcc33" }}>JS Calculator</h1>

      <Calculator />
    </div>
  );
}

export default App;
