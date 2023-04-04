import { useState, useContext } from "react";
import D from "./D";
import myContext from "./context";

function C(props) {
  const contextData = useContext(myContext);
  console.log(contextData);

  return (
    <div>
      <h2>C Component</h2>
      <button
        onClick={() => {
          contextData[1]("Banglore");
        }}
      >
        Send Data to A
      </button>
      <D />
    </div>
  );
}

export default C;
